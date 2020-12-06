
init()

function init()
{
  const ball = document.getElementById("circle");

  var tweenable = new Tweenable({
      from: {x:0,y:0,scale:1},
      to: {x:100},
      ease:"easeInOutQuart",
      duration: 1000,
      onUpdate: ({x,y,scale}) => {
        ball.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
      }
    });


  asyncCall()
  async function asyncCall() {
    console.log('calling')
    
    // const result = await t.tween().then(() => console.log('All done!'));
    const result = await tweenable.tween()
    // await tweenable.tween({from:{scale:2},to:{scale:1},duration:2000})
    await tweenable.tween({to:{x:50},duration:2000})
    await tweenable.tween()
    // await t.tween().then(() => console.log('All done!'));
  }
}
