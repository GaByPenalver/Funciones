function pintar(ele, color = 'green'){
    ele.style.backgroundColor = color;
    }

    const ele = document.getElementById("ele1");
pintar(ele);


ele.addEventListener("click", function(){
    pintar(this, 'yellow');
});