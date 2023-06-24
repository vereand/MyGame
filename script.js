score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log('Key code is :', e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 32) {
        monkey = document.querySelectorAll('.monkey')[0];
        monkey.classList.add('animatemonkey');
        setTimeout(() => {
            monkey.classList.remove('animatemonkey');
        }, 700)
    }
    if (e.keyCode == 39) {
        monkey = document.querySelectorAll('.monkey')[0];
        monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        monkey.style.left = monkeyX + 112 + 'px';
    }
    if (e.keyCode == 37) {
        monkey = document.querySelectorAll('.monkey')[0];
        monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        monkey.style.left = monkeyX - 112 + 'px';
    }
}
  function gam(event){
    monkey = document.querySelectorAll('.monkey')[0];
    monkey.classList.add('animatemonkey');
    setTimeout(() => {
        monkey.classList.remove('animatemonkey');
     }, 800);
     if(window.innerWidth <= 400){
     setTimeout(()=>{
    monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
    monkey.style.left = monkeyX + 60 + 'px';
    },200)
     }
     else if(window.innerWidth <= 650 && window.innerWidth > 400 ){
     setTimeout(()=>{
    monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
    monkey.style.left = monkeyX + 80 + 'px';
    },200)
     }
    else{
        setTimeout(()=>{
            monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
            monkey.style.left = monkeyX + 122 + 'px';
            },200)
    }

     if(window.innerWidth <= 300){
        setTimeout(()=>{
       monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
       monkey.style.left = monkeyX - 60 + 'px';
       },1500)
        }
    else if(window.innerWidth <= 400){
        setTimeout(()=>{
       monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
       monkey.style.left = monkeyX - 60 + 'px';
       },1100)
        }
    else if(window.innerWidth <= 650){
    setTimeout(()=>{
        monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        monkey.style.left = monkeyX - 80 + 'px';
    },1100)}
    else{
        setTimeout(()=>{
            monkeyX = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
            monkey.style.left = monkeyX - 122 + 'px';
        },1100)
    }
  }
  if(window.innerWidth < 1100 && window.innerWidth > 800 ){
    setInterval(() => {
        monkey = document.querySelectorAll('.monkey')[0];
        gameover = document.getElementsByClassName('gameover')[0];
        playagain = document.getElementsByClassName('playagain')[0];
        tortose = document.getElementsByClassName('tortose')[0];
        // let score = document.getElementsByClassName('score')[0];
    
        dx = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('top'));
    
        ox = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('top'));
    
        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        // console.log(offsetX,offsetY);
        if (offsetX < 70 && offsetY < 42) {
            gameover.style.visibility = 'visible';
            playagain.style.visibility = 'visible';
            let data = tortose.classList.remove('tortoseAni');
            console.log(data);
        }
        else if (cross && offsetX < 110) {
            score += 1;
            updatescore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(tortose, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                tortose.style.animationDuration = newDur + 's';
            }, 500)
        }
    }, 100)
  }
  else if(window.innerWidth < 800 && window.innerWidth >650){
    setInterval(() => {
        monkey = document.querySelectorAll('.monkey')[0];
        gameover = document.getElementsByClassName('gameover')[0];
        playagain = document.getElementsByClassName('playagain')[0];
        tortose = document.getElementsByClassName('tortose')[0];
        // let score = document.getElementsByClassName('score')[0];
    
        dx = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('top'));
    
        ox = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('top'));
    
        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        console.log(offsetX);
        // console.log(offsetX,offsetY);
        if (offsetX < 45 && offsetY < 22) {
            gameover.style.visibility = 'visible';
            playagain.style.visibility = 'visible';
            let data = tortose.classList.remove('tortoseAni');
            audiogo.play();
            setTimeout(() => {
                audiogo.pause();
                audio.pause();
            }, 1000);
        }
        else if (cross && offsetX < 110) {
            score += 1;
            updatescore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(tortose, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                tortose.style.animationDuration = newDur + 's';
            }, 500)
        }
    }, 100)
  }
  else if((window.innerWidth <= 650) && (window.innerWidth >400)){
    setInterval(() => {
        monkey = document.querySelectorAll('.monkey')[0];
        gameover = document.getElementsByClassName('gameover')[0];
        playagain = document.getElementsByClassName('playagain')[0];
        tortose = document.getElementsByClassName('tortose')[0];
        // let score = document.getElementsByClassName('score')[0];
    
        dx = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('top'));
    
        ox = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('top'));
    
        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        console.log(offsetX);
        // console.log(offsetX,offsetY);
        if (offsetX < 45 && offsetY < 30) {
            gameover.style.visibility = 'visible';
            playagain.style.visibility = 'visible';
            let data = tortose.classList.remove('tortoseAni');
            audiogo.play();
            setTimeout(() => {
                audiogo.pause();
                audio.pause();
            }, 1000);
        }
        else if (cross && offsetX < 110) {
            score += 1;
            updatescore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(tortose, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                tortose.style.animationDuration = newDur + 's';
            }, 500)
        }
    }, 100)
  }
  else if((window.innerWidth <= 400) && (window.innerWidth >300)){
    setInterval(() => {
        monkey = document.querySelectorAll('.monkey')[0];
        gameover = document.getElementsByClassName('gameover')[0];
        playagain = document.getElementsByClassName('playagain')[0];
        tortose = document.getElementsByClassName('tortose')[0];
        // let score = document.getElementsByClassName('score')[0];
    
        dx = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('top'));
    
        ox = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('top'));
    
        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        console.log(offsetX);
        // console.log(offsetX,offsetY);
        if (offsetX < 25 && offsetY < 30) {
            gameover.style.visibility = 'visible';
            playagain.style.visibility = 'visible';
            let data = tortose.classList.remove('tortoseAni');
            audiogo.play();
            setTimeout(() => {
                audiogo.pause();
                audio.pause();
            }, 1000);
        }
        else if (cross && offsetX < 110) {
            score += 1;
            updatescore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(tortose, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                tortose.style.animationDuration = newDur + 's';
            }, 500)
        }
    }, 100)
  }
  else if((window.innerWidth <= 300) && (window.innerWidth >200)){
    setInterval(() => {
        monkey = document.querySelectorAll('.monkey')[0];
        gameover = document.getElementsByClassName('gameover')[0];
        playagain = document.getElementsByClassName('playagain')[0];
        tortose = document.getElementsByClassName('tortose')[0];
        // let score = document.getElementsByClassName('score')[0];
    
        dx = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('top'));
    
        ox = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('top'));
    
        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        console.log(offsetX);
        // console.log(offsetX,offsetY);
        if (offsetX < 20 && offsetY < 30) {
            gameover.style.visibility = 'visible';
            playagain.style.visibility = 'visible';
            let data = tortose.classList.remove('tortoseAni');
            audiogo.play();
            setTimeout(() => {
                audiogo.pause();
                audio.pause();
            }, 1000);
        }
        else if (cross && offsetX < 110) {
            score += 1;
            updatescore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(tortose, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                tortose.style.animationDuration = newDur + 's';
            }, 500)
        }
    }, 100)
  }
  else{
setInterval(() => {
    monkey = document.querySelectorAll('.monkey')[0];
    gameover = document.getElementsByClassName('gameover')[0];
    playagain = document.getElementsByClassName('playagain')[0];
    tortose = document.getElementsByClassName('tortose')[0];
    // let score = document.getElementsByClassName('score')[0];

    dx = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(monkey, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(tortose, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX,offsetY);
    if (offsetX < 100 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        playagain.style.visibility = 'visible';
        audiogo.play();
        let data = tortose.classList.remove('tortoseAni');
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (cross && offsetX < 110) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(tortose, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            tortose.style.animationDuration = newDur + 's';
        }, 500)
    }
    console.log(offsetX);
}, 100)
  }
function updatescore(score) {
    let scorecontaner = document.getElementById('scorecontaner');
    let s = scorecontaner.innerHTML = 'Your Score : ' + score;
}