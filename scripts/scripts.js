function loadPage(url) {
  location.href = url;
}

const tiltEls = document.querySelectorAll('.card')
const tiltMove = (x, y) => `perspective(500px) scale(1) rotateX(${x}deg) rotateY(${y}deg)`

tiltEls.forEach(tilt => {
  const height = tilt.clientHeight
  const width = tilt.clientWidth

  tilt.addEventListener('mousemove', (e) => {
    const x = e.layerX
    const y = e.layerY
    const multiplier = 15

    const xRotate = multiplier * ((x - width / 2) / width)
    const yRotate = -multiplier * ((y - height / 2) / height)
    
    tilt.style.transition = '0s';
    tilt.style.transform = tiltMove(xRotate, yRotate)
  })

  tilt.addEventListener('mouseout', function () {
    tilt.style.transition = '1s';
    tilt.style.transform = tiltMove(0, 0);
  })
})
