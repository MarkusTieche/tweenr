# TWEENR
Minimalistic Tweening Library for JS

[EXAMPLE](https://markustieche.github.io/tweenr/)

### Include in index.html

```
<script src="tweenr.js"></script>
```

### SINGLE TWEEN
Moves from current position to target position
```javascript
ball = document.getElementById("circle");

var tweenable = new Tweenable({
    from: {x:0},
    to: {x:100},
    ease:"linear",
    duration: 1000,
    onUpdate: ({x}) => {
      ball.style.transform = `translateX(${x}px) translateY(0px)`;
    }
  }).tween().then(() => console.log('All done!'))

  //CHECK IF TWEEN IS RUNNING
  if( tweenable.isRunning()){return;} //DON'T RUN THE SAME TWEEN SIMULTANIOUS
```

### CHAINED TWEEN
Moves from current position to next position in chain, reset if restarted;
```javascript
ball = document.getElementById("circle");

//START TWEEN
var tweenable = new Tweenable({
      from: {x:0,scale:1},
      to: {x:100},
      ease:"linear",
      duration: 1000,
      onUpdate: ({x,scale}) => {
        ball.style.transform = `translateX(${x}px) translateY(0px) scale(${scale})`;
      }
    });

    tweenable.tween().then(() =>tweenable.tween({to:{x:200,scale:2},duration:1000})).then(() => console.log('All done!'))

    //CHECK IF TWEEN IS RUNNING
  if( tweenable.isRunning()){return;} //DON'T RUN THE SAME TWEEN SIMULTANIOUS
```

### EASING OPTIONS
  - linear
  - easeInQuad
  - easeOutQuad
  - easeInOutQuad
  - easeInCubic
  - easeOutCubic
  - easeInOutCubic
  - easeInQuart
  - easeOutQuart
  - easeInOutQuart
  - easeInQuint
  - easeOutQuint
  - easeInOutQuint