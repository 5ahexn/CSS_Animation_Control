// 배경 애니메이션 컨트롤 버튼
let myImg = document.getElementById("myImg");

myImg.onclick = function(){
    if(clouds.style.webkitAnimationPlayState == "paused"){
        clouds.style.webkitAnimationPlayState = "running";
        
        airplane.style.webkitAnimationPlayState = "running";

        hotairballoon.style.webkitAnimationPlayState = "running";

        myImg.src = 'assets/images/pause.png';
    } else {
        clouds.style.webkitAnimationPlayState = "paused";
        
        airplane.style.webkitAnimationPlayState = "paused";

        hotairballoon.style.webkitAnimationPlayState = "paused";

        myImg.src = 'assets/images/play.png';
    }
}