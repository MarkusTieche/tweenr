
init()

function init()
{
  const ball = document.getElementById("circle");

  var t = new tweenable({
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
    const result = await t.tween()
    await t.tween({from:{scale:2},to:{scale:1},duration:1000})
    // await t.tween().then(() => console.log('All done!'));
  }
}
