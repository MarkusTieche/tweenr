
init()

function init()
{
  const ball = document.getElementById("circle");
  // var t = tween({
  //   from: 0,
  //   to: 300,
  //   duration: 500,
  //   onUpdate: v => {
  //     ball.style.transform = `translateX(${v}px) translateZ(0)`;
  //   }
  // });
  // console.log(t)
  var t = new tweenable({
      from: 0,
      to: 300,
      duration: 500,
      onUpdate: x => {
        ball.style.transform = `translateX(${x}px) translateZ(0)`;
      }
    });

  asyncCall()
  
  async function asyncCall() {
    console.log('calling')
    
    // const result = await t.tween().then(() => console.log('All done!'));
    const result = await t.tween()
    await t.tween({to:500,duration:2000}).then(() => console.log('All done!'));
    // expected output: "resolved"
  }
}
