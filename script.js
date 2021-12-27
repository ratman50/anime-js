const title = document.querySelector("h1");

const letters = [...document.querySelectorAll("span")];

title.addEventListener("mouseenter", handleLetters);
title.addEventListener("mouseleave", handleLetters);

let isAnimation=false;
let calledOut=false;
let animOpened=false;

function handleLetters() {
    if(animOpened)
    {
        animOut();
        animOpened=false;
        return;
    }
    if (isAnimation) {
        calledOut=true;
        return;
    }
    isAnimation=true;
  const animPromise = new Promise((resolve) => {
    animIn();
    setTimeout(()=>{
        resolve()
    },750)
  });
  animPromise.then(()=>{
      isAnimation=false
      if(calledOut)
      {
          animOut();
            calledOut=false
      }
      else if(!calledOut)
      {
          animOpened=true;
      }
    // animOut()
  })
  function animIn() {
    anime({
      targets: " h1 span",
      transLateX: function () {
        return anime.random(-250, 250);
      },
      transLateY: function () {
        return anime.random(-250, 250);
      },
      transLateZ: function () {
        return anime.random(-2000, 750);
      },
      rotate: function () {
        return anime.random(-250, 250);
      },
      easing: "easeOutCirc",
      duration: 750,
    });
  }
  function animOut() {
    anime({
      targets: " h1 span",
      transLateX: 0,
      transLateY: 0,
      transLateZ: 0,
      rotate: 0,
      easing: "easeInQuad",
      duration: 750,
    });
  }
}
