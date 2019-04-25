//MOVE TO TOP ON CLICK
let toTop = document.getElementById("to-top");

toTop.addEventListener("click", function moveToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});




//TOGGLE HIDE/SHOW ON CLICK


function toggleElement(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block'){ 
        e.style.display = 'none';
        e.style.transition = "all 2s";
    }
    else {
        e.style.display = 'block';
        e.style.transition = "all 2s";
    }
 }