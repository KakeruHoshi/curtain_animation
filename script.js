const showElements = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", function(){
    for (let i = 0; i < showElements.length; i++) {
        const getElementDistance = showElements[i].getBoundingClientRect().top + showElements[i].clientHeight * .5;
        console.log(i, getElementDistance);
        if(window.innerHeight > getElementDistance){
            showElements[i].classList.add("show");
        }
    }
})