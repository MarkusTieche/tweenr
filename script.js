
init()
var ball;
function init()
{
  document.getElementById("btn_tween").onclick = single
  document.getElementById("btn_chain").onclick = chain
  ball = document.getElementById("circle");

  ball = document.getElementById("circle");

}

function single()
{
  var tweenable = new Tweenable({
    from: {x:0},
    to: {x:100},
    ease:"linear",
    duration: 1000,
    onUpdate: ({x}) => {
      ball.style.transform = `translateX(${x}px) translateY(0px)`;
    }
  }).tween().then(() => console.log('All done!'))
}

function chain()
{
  var tweenable = new Tweenable({
    from: {x:0,scale:1},
    to: {x:100},
    ease:"linear",
    duration: 1000,
    onUpdate: ({x,scale}) => {
      ball.style.transform = `translateX(${x}px) translateY(0px) scale(${scale})`;
    }
  });

  if( tweenable.isRunning()){return;} //DONT RUN THE SAME TWEEN SIMULTANIOUS
  tweenable.tween().then(() =>tweenable.tween({to:{x:200,scale:2},duration:2000})).then(() => console.log('All done!'))
}