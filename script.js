function generate()
{
    let randompin = Math.floor(1000 + Math.random()*9000);
    document.getElementById("screen-one").value=randompin;
}


let ScreenTwo = document.getElementById("screen-two");
let screenTwoValue="";
let ClickButton = document.getElementsByClassName("button");

for (item of ClickButton)
{
    item.addEventListener("click",function(number){

       const Button = number.target.innerText;

       if (Button=="C")
       {
            screenTwoValue="";
            ScreenTwo.value = screenTwoValue;

       }
       else if (Button=="<")
       {
           screenTwoValue =parseInt (screenTwoValue/10);
           let newValue = screenTwoValue;
           if (newValue !=0)
           {
               ScreenTwo.value=newValue;
           }
           else{
               ScreenTwo.value="";
               screenTwoValue="";
           }
       }

       else
       {
        screenTwoValue +=Button;
        ScreenTwo.value=screenTwoValue;
        
       
       }

    });
}

function submit(){
  
    const click = document.getElementById('clickCount').innerText;
    const clickCountNumber = parseInt(click);
    
    const newClickCount = clickCountNumber - 1;
    
    document.getElementById('clickCount').innerText = newClickCount;
    let newClickCountNumber = newClickCount+1;
    
    if (newClickCountNumber > 0) {
        
        let firstScreenValue = document.getElementById('screen-one').value;
        
        let screenValueSecond = document.getElementById('screen-two').value;
        
        const pinMatch = document.getElementById('pinMatch');
        const pinNotMatch = document.getElementById('pinNotMatch');
        if (firstScreenValue == screenValueSecond) {
            pinMatch.style.display = 'block';
            pinNotMatch.style.display = 'none';
        }
        else{
            pinMatch.style.display = 'none';
            pinNotMatch.style.display = 'block';
        }
    }
    if(newClickCount == 0){
        document.getElementById("submit").disabled = true;
    }
}