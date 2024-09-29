var curPhraseIndex = -1;


function typeIt(){
  
  const typewriter = document.getElementById("typewriter");
  const phrases = typewriter.getAttribute("data-id").split(",");
  
  curPhraseIndex++

  // checking if all words have been typed
  if(curPhraseIndex == phrases.length){
    curPhraseIndex = 0;
  }

  // selecting the next word to be typed
  let curWord = phrases[curPhraseIndex];

  var i = 0
  hasWordFinished = 0;
  typeEachLetter(i)

  // type 
  function typeEachLetter(i){

    typewriter.innerHTML = curWord.substring(0, i + 1);

    if(i < curWord.length && hasWordFinished < 1){
      
      i ++;
      setTimeout(function(){
        typeEachLetter(i)
      },90)

    }else{

      if(hasWordFinished < 1){
        hasWordFinished ++;
      }

      if(i == curWord.length){

        setTimeout(function(){
          
          if(hasWordFinished > 0 && i < 1){
        
            setTimeout(typeIt,1000)
    
          }else{
    
            i --;
            setTimeout(function(){
              typeEachLetter(i)
            },90)
    
          }

        },2000)


      }else{
  
        if(hasWordFinished > 0 && i < 0){
      
          setTimeout(typeIt,1000)
  
        }else{
  
          i --;
          setTimeout(function(){

            typeEachLetter(i);

          },90)
  
        }

      }


    }
  }
}

// typeIt();