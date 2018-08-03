/**
 * 缓动运动的封装
 * @param target 目标位置
 * @param nowDistance 目前所在位置
 * @param fn 回调
 * @param time 时间
 */
export function slowAnimate(target, nowDistance, fn, time = 30) {
  clearInterval(slowAnimate.timer)
  slowAnimate.timer = setInterval(function() {
    let step = (target - nowDistance) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    nowDistance = nowDistance + step
    if (fn) {
      fn(nowDistance)
    }
    if (parseInt(nowDistance) === parseInt(target)) {
      clearInterval(slowAnimate.timer)
    }
  }, time)
}
