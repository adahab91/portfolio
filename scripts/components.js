let toTop = document.getElementById("to-top");

toTop.addEventListener("click", moveToTop);

function moveToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
