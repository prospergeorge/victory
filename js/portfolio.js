$('#myFilters li').on('click', function() {

    $("#myFilters li").removeClass('filter-active');
    $(this).addClass('filter-active');
  
    var projectList = document.querySelectorAll(".projects .projectList");
  
    projectList.forEach((fn) => {
  
      if(fn.querySelector($(this).data('filter')) != null){
        
        fn.classList.remove("invisibleBox");
        setTimeout(function(){
            fn.style.display = "block";
        },400)
  
      }else{
  
        fn.classList.add("invisibleBox");
        setTimeout(function(){
            fn.style.display = "none";
        },400)
      }
  
    });
  
});

$('.noload').on('click', function() {
  
    event.preventDefault();
})

var caseStudyBox = document.querySelector("#caseStudy");
var caseStudyContent = document.querySelector("#text");

var lightBox = document.querySelector("#lightBox .body");
var lightBoxTitle = document.querySelector("#lightBox .name");

var turner = document.querySelector(".turner");

var enlargedImg = document.querySelector("#enlargedImg");
var imgList = document.querySelectorAll(".projectList img");

var prevImg = document.querySelector(".left");
var nextImg = document.querySelector(".right");

function loadupImg(imgSrc,imgTitle) {

  extractImg1 = imgList[0].src.split("/");

  extractImg2 = imgSrc.split("/");

  setTimeout(function(){

    enlargedImg.classList.remove("moveRight");
    enlargedImg.classList.remove("moveLeft");

  },700);

  if(extractImg1[extractImg1.length - 1] == extractImg2[extractImg2.length - 1]){

    prevImg.classList.remove('prevImg');
    nextImg.classList.add('nextImg');

  }else{

    prevImg.classList.add('prevImg');
    nextImg.classList.add('nextImg');

    for(var i=0; i < imgList.length; i++){

      extractImg3 = imgList[i].src.split("/");
  
      if(extractImg2[extractImg2.length - 1] == extractImg3[extractImg3.length - 1]){
  
        if(i == imgList.length - 1){
          nextImg.classList.remove('nextImg');
        }
      }
    }
  }

  setTimeout(function(){

    turner.classList.remove("lightUp");
    enlargedImg.setAttribute("src",imgSrc);

    lightBoxTitle.innerHTML = imgTitle;

  },1500);
}

function enlarge(id){

  var imageViewed = id.getAttribute("data-id");
  var imageName = id.getAttribute("data-filter");

  turner.classList.add("lightUp");

  setTimeout(function(){

    lightBox.classList.add("lightUp");
  },200);

  loadupImg(imageViewed,imageName);
}

$('.close').on('click', function() {
  lightBox.classList.remove("lightUp");
});

$('.nextImg').on('click', function() {

  var checkingList = 0;

  extractImg1 = imgList[0].src.split("/");

  extractImg2 = enlargedImg.getAttribute('src').split("/");

  
  if(extractImg1[extractImg1.length - 1] == extractImg2[extractImg2.length - 1]){
    
    enlargedImg.classList.add("moveLeft");
    
    setTimeout(function(){

      turner.classList.add("lightUp");
      
    },100)
    
    loadupImg(imgList[1].src,imgList[1].alt);

  }else{

    for(var i=0; i < imgList.length; i++){

      extractImg3 = imgList[i].src.split("/");
  
      if(extractImg2[extractImg2.length - 1] == extractImg3[extractImg3.length - 1]){
  
        if(checkingList < 1){

          if(i < imgList.length - 1){

            checkingList++;

            enlargedImg.classList.add("moveLeft");

            setTimeout(function(){

              turner.classList.add("lightUp");

            },100)

            loadupImg(imgList[i+1].src,imgList[i+1].alt);

          }else{
            console.log("Last image on your list");
          }
        }
      }
    }
  }

});

$('.prevImg').on('click', function() {

  var checkingList = 0;

  extractImg1 = imgList[0].src.split("/");
  extractImg2 = enlargedImg.getAttribute('src').split("/");

  if(extractImg1[extractImg1.length - 1] == extractImg2[extractImg2.length - 1]){

    console.log("First image on your list");

  }else{

    for(var i=0; i < imgList.length; i++){

      extractImg3 = imgList[i].src.split("/");
  
      if(extractImg2[extractImg2.length - 1] == extractImg3[extractImg3.length - 1]){
  
        if(checkingList < 1){

          checkingList++;

          enlargedImg.classList.add("moveRight");

          setTimeout(function(){

            turner.classList.add("lightUp");
            
          },100)

          loadupImg(imgList[i-1].src,imgList[i-1].alt);
        }
      }
    }
  }

});

function caseStudy(id) {

  caseStudyContent.innerHTML = id.getAttribute("data-content")

  caseStudyBox.classList.remove("invisibleBox");
}

$('.closeCaseStudy').on('click', function() {

  caseStudyBox.classList.add("invisibleBox");

});

$('#goBack').on('click', function() {
  alert("my back buttton");
});