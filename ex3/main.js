const colorchoice = document.querySelector('#colorchoice');
const fontsize = document.querySelector('#fontsize');
const fontfamily = document.querySelector('#fontFamily');
const paragraph = document.querySelector('#paragraphe');

function updateColor(){
    paragraph.style.color = colorchoice.value; 
}

function updateFontSize(){
    paragraph.style.fontSize = fontsize.value + 'px'; 
}

function updateFontFamily(){
    console.log(fontfamily.value); 
    paragraph.style.fontFamily = fontfamily.value;
}

colorchoice.addEventListener('input', updateColor);
fontsize.addEventListener('input', updateFontSize);
fontfamily.addEventListener('change', updateFontFamily);

updateColor();
updateFontSize();
updateFontFamily();
