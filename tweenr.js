/////////
//
//https://github.com/jeremyckahn/shifty
//https://mattperry.is/writing-code/how-to-write-a-tween
//
////////


function tweenable(tween={
  from = 0,
  to = 1,
  duration = 300,
  ease = easeOut(),
  onUpdate
} = {}) {
  
  this.update = function(callback){
    const delta = tween.to - tween.from;
    const startTime = performance.now();
    
    requestAnimationFrame(update);
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / tween.duration, 1);

      const latest = tween.from + this.easeOut(progress) * delta;
  
      if (tween.onUpdate) tween.onUpdate(latest);
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
      else
      {
        //APPLY TWEEN
        tween.from = tween.to;
        //CALL CALLBACK
        callback()
      }
    }
  }

  this.tween = function({from,to,duration,ease} = {}) {
  tween.duration = duration || tween.duration
  tween.from = from || tween.from
  tween.to = to || tween.to
    return new Promise(resolve => { this.update(() => {resolve();})})
  }
}

function easeOut(progress, power = 2) {
  return 1 - (1 - progress) ** power;
}