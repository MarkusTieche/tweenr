/////////
//
//https://mattperry.is/writing-code/how-to-write-a-tween -> CONCEPT
//https://github.com/jeremyckahn/shifty -> CODE CONCEPT
//https://raw.githubusercontent.com/chenglou/tween-functions/master/index.js -> EASING FUNCTIONS
//
////////


function Tweenable(tween={
  from = {},
  to = {},
  duration = 300,
  ease = "linear",
  onUpdate
} = {}) {
  
  //ADD ALL POSSIBLE TRANSFORMS
  var latest = Object.assign({}, tween.from);
  
  this.update = function(callback,t){
    // const delta = tween.to - tween.from;
    const startTime = performance.now();
    requestAnimationFrame(update);
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / tween.duration, 1);

      //UPDATE ONLY VALUES THAT CHANGE
      for (const property in tween.to) 
      {
        // const delta = (tween.to[property] - tween.from[property]);
        // latest[property] = tween.from[property] + easing[tween.ease](progress) * (tween.to[property] - tween.from[property]);
      }
      
      if (tween.onUpdate)
      {
        tween.onUpdate(latest)
      };
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
      else
      {
        //TWEEN FINISHED
        //APPLY TWEEN
        //APPLY ONLY VALUES THAT HAVE CHANGED
        for (const property in tween.to) 
        {
          tween.from[property] = tween.to[property];
        };
        //CALL CALLBACK TO FINISH
        callback();
      };

    }
  }

  this.tween = function({from,to,duration,ease} = "") {
    tween.ease = ease || tween.ease
    tween.duration = duration || tween.duration;
    tween.to = to || tween.to;

    for (const property in from) 
    {
      tween.from[property] = from[property];
    }

    return new Promise(resolve => { this.update(() => {resolve();},"uskdcb")});
  }
}
var easing = {
  // no easing, no acceleration
  linear: t => {
   return t;
  },
  // accelerating from zero velocity
  easeInQuad: t => {
   return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: t => {
   return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: t => {
   return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: t => {
   return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: t => {
   return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: t => {
   return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: t => {
   return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: t => {
   return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: t => {
   return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: t => {
   return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: t => {
   return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: t => {
   return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
 };