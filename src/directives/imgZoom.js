const store = {
  scale: 1,
  moveX: 0,
  moveY: 0,
  width: 0,
  height: 0,
  isOneMove: false,
  isTwoMove: false
}
let $el = null

const getDistance = (start, stop) => {
  return Math.hypot(stop.x - start.x, stop.y - start.y)
}

const handleTouchStart = (event) => {
  const touches = event.touches
  const events = touches[0]
  const events2 = touches[1]
  store.pageX = events.pageX
  store.pageY = events.pageY
  if (touches.length >= 2) {
    store.pageX2 = events2.pageX
    store.pageY2 = events2.pageY
    store.isTwoMove = true
    store.isOneMove = false
    store.originScale = store.scale || 1
  } else if (touches.length === 1 && store.scale !== 1) {
    store.isOneMove = true
    store.isTwoMove = false
  }
}

const handleTouchMove = (event) => {
  if (store.isTwoMove) {
    handleTwoMove(event)
  } else if (store.isOneMove) {
    handleOneMove(event)
  }
}

const handleTwoMove = (event) => {
  const touches = event.touches
  const events = touches[0]
  const events2 = touches[1]
  if (!store.pageX2) {
    store.pageX2 = events2.pageX
  }
  if (!store.pageY2) {
    store.pageY2 = events2.pageY
  }
  const distance = getDistance({
    x: events.pageX,
    y: events.pageY
  }, {
    x: events2.pageX,
    y: events2.pageY
  })
  const distance2 = getDistance({
    x: store.pageX,
    y: store.pageY
  }, {
    x: store.pageX2,
    y: store.pageY2
  })
  const zoom = distance / distance2
  let newScale = store.originScale * zoom
  if (newScale > 3) {
    newScale = 3
  }
  if (newScale <= 0.5) {
    newScale = 0.5
  }
  store.scale = newScale
  $el && ($el.style.transform = `scale(${newScale})`)
}

const maxMoveWH = () => {
  const { width, height } = document.body.getBoundingClientRect()
  return {
    maxW: Math.max(0, (store.scale * store.width - width) / 2),
    maxH: Math.max(0, (store.scale * store.height - height) / 2)
  }
}

const handleOneMove = (event) => {
  const touches = event.touches
  const events = touches[0]

  let moveX = (events.pageX - store.pageX) + store.moveX
  let moveY = (events.pageY - store.pageY) + store.moveY
  const maxObj = maxMoveWH()
  if (Math.abs(moveX) > maxObj.maxW) {
    moveX = moveX > 0 ? maxObj.maxW : -maxObj.maxW
  }
  if (Math.abs(moveY) > maxObj.maxH) {
    moveY = moveY > 0 ? maxObj.maxH : -maxObj.maxH
  }
  $el.style.transition = 'transform .3s'
  $el.style.transform = `scale(${store.scale}) translate(${moveX}px, ${moveY}px)`
  store.moveX = moveX
  store.moveY = moveY
}

const handleFinish = () => {
  store.isOneMove = false
  store.isTwoMove = false
  delete store.pageX
  delete store.pageY
}

export default {
  bind(el) {
    $el = el
    // el.style.transformOrigin = '0 0'
    el.style.transformOrigin = 'center center'
    el.style.transition = 'transform 0.3s ease'
    store.width = el.width
    store.height = el.height
    el.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleFinish)
    document.addEventListener('touchcancel', handleFinish)
  },
  unbind(el) {
    el.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleFinish)
    document.removeEventListener('touchcancel', handleFinish)
  }
}
