let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', function(){
        let value=button.innerText;
        if(value === "="){
        display.value=eval(display.value);
    }
    else{
        display.value +=value;
    }
});
}