const sentence=['He carried her about a hundred yards and then set her on her feet, slapping her backside with a sting that brought tears to her eyes.',
                "Let us have dinner, and then we'll set off."
                ,"Working, studying... don't you have a minute you can set aside - for me?"
               ,'Flash photography is best used in full sunlight.'
               ,'One small action would change her life, but whether it would be for better or for worse was yet to be determined.'
               ]
const msg=document.getElementById('msg')
const btn=document.getElementById('submit')
const typedWords=document.getElementById('mywords')               
let startTime,endTime;


const playGame=()=>{
    randomNum=Math.floor(Math.random()*sentence.length)
    msg.innerText=sentence[randomNum]
    let date= new Date;
    startTime=date.getTime();
    btn.innerText='Done'

}
const endGame=()=>{
    let date=new Date;
    endTime= date.getTime();
    totalTime=((endTime-startTime)/1000)
  
    let ttlStr=typedWords.value;
    let ttlWords=wordCounter(ttlStr);

    let speed=Math.round((ttlWords/totalTime)*60)
   
    let finalMsg='Your typing speed is '+speed+' words per minute'
    finalMsg+=compareWords(msg.innerText,ttlStr)

    msg.innerText=finalMsg
}

const compareWords=(str1,str2)=>{
    let words1=str1.split(" ")
    let words2=str2.split(' ')
    let ctr=0;

   words1.forEach((item,index)=>{
       if(item== words2[index]){
           ctr++;
       }
    });
       let errorWords=(words1.length-ctr)
       return (" "+ctr+ "  words correct out of "+words1.length+" and total number of error words are "+errorWords+' .')
   
}

const wordCounter=(str)=>{

    total= str.split(" ").length;
   
    return total
}
btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        typedWords.disabled=false;
        // typedWords.innerText=" ";
        playGame()
    }
    else if(this.innerText=='Done'){
        typedWords.disabled=true;
        btn.innerText='Start'
        endGame()
      
        
    }
})