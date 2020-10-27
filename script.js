
function animation(element){
    if(element.classList[1] === "hide"){
        element.classList.remove("hide");
        setTimeout(()=>{
            element.style.transform = "translateY(0)";
        }, 10)
    }
}

const firstElement = document.querySelector(".section2 .keep-Track");
const secondElement = document.querySelector(".section2 .img-responsive");
const thirdElement = document.querySelector(".section2 .content");
const fourthElement = document.querySelector(".section3");
const fifthElement = document.querySelector(".section4");

window.addEventListener("scroll", elementsAppear)

function elementsAppear(){
    const position = document.body.scrollHeight - window.pageYOffset;
    if(position <= 3900){
        animation(firstElement);
    }
    if(position <= 3200){
        animation(secondElement);
        animation(thirdElement);
    }
    if(position <= 2500){
        animation(fourthElement);
    }
    if(position <= 1700){
        animation(fifthElement);
    } 
}
