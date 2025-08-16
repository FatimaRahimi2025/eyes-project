document.querySelector("body").addEventListener("mousemove",
    function eyeball(){
        const eye = document.querySelectorAll(".eyes");
        let x = eye.getBoundingClientRect().left + eye.clientWidth;
        let y = eye.getBoundingClientRect().right + eye.clientHeight;
        let radian = Math.tana2(event.pageX -x, event.pageY -y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate("+ rotate +"deg)";

    }
)