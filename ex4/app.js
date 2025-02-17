let listelements=document.querySelectorAll("li");
listelements.forEach(item => {
    item.addEventListener('click', () => {
        listelements.forEach(el => el.style.backgroundColor = "");
        item.style.backgroundColor = "#d57b7b";
    });
});
