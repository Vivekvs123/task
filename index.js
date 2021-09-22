let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
var arr=[];
function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
    screenValue= document.getElementById("screen").value;

}
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is',buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
       
        else if(buttonText =='Clear'){
            screenValue = "";
            screen.value = screenValue;    
        }
        else if(buttonText =='='){
            let x= screen.value;
            let hisexp = x;
            screen.value=eval(screenValue)
             
              let y = eval(screenValue);
              let hiseval = y;
              
              history(hisexp,hiseval);
                
        }
       
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

function history(x,y){
    var task = x +" = "+y
    console.log(task)
    arr.push(task);
    var list=document.getElementById('history');
    var li = document.createElement('li');
    li.className='a'
    li.id='li'
    arr.forEach(function(val,ind){
        li.innerHTML=val
        list.appendChild(li);
    })
}
function clearHist(){
    var task = document.getElementById('history');
    var li = document.getElementById('li')
    task.removeChild(li)
}