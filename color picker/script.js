let colorInput=document.querySelector('#color');
let textInput=document.querySelector('#hex');

colorInput.addEventListener('input' ,function(){
let color=colorInput.value;
textInput.value=color;
document.querySelector('h1').style.color=color;
});