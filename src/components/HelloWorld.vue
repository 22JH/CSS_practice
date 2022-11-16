<template>
  <div id="frame">
    <div id="card">
      <div id="light"></div>
      asdfasdf
    </div>
  </div>
</template>

<script>
window.onload = function() {
  const frame = document.getElementById('frame')
  const card = document.getElementById('card')
  const light = document.getElementById('light')

  let { x, y, width, height } = frame.getBoundingClientRect()

  function mouseMove(e) {
    const left = e.clientX - x
    const top = e.clientY - y
    const centerX = left - width / 2
    const centerY = top - height / 2
    const d = Math.sqrt(centerX ** 2 + centerY ** 2)
    // console.log(e)
    // console.log(e.clientY, e.clientX, left, top, e.x, x.y)

    card.style.boxShadow = `
      ${-centerX / 10}px ${-centerY / 10}px 10px rgba(0, 0, 0, 1)
    `

    card.style.transform = `
      rotate3d(
        ${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg
      )
    `
    light.style.backgroundImage = `
      radial-gradient(
        circle at ${left}px ${top}px, #00000010, #ffffff00, #ffffff70
      )
    `
    
  }

  frame.addEventListener('mouseenter', () => {
    frame.addEventListener('mousemove', mouseMove)
  })

  frame.addEventListener('mouseleave', () => {
    console.log('1')

    frame.removeEventListener('mousemove', mouseMove)
    // console.log(card.style.boxShadow)
    card.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)'
    // console.log(card.style.boxShadow)
    card.style.transform = ''
    light.style.backgroundImage = ''
  })

  window.addEventListener('resize', () => {
    const rect = frame.getBoundingClientRect()
    x = rect.x
    y = rect.y
    width = rect.width
    height = rect.height
  })
}
export default {
  name : 'HelloWorld',
  // methods : {
  //   mouseMove: function(e){
  //     const frame = document.getElementById('frame')
  //     const card = document.getElementById('card')

  //     let { x, y, width, height } = frame.getBoundingClientRect()
  //     const left = e.clientX - x
  //     const top = e.clinetY - y
  //     const centerX = left - width / 2
  //     const centerY = top - height / 2
  //     const d = Math.sqrt(centerX ** 2 + centerY ** 2)
  //     console.log(e)
  //     console.log(e.clinetY, e.clientX, left, top, e.x, x.y)
  //     card.style.transform = `
  //       rotate3d(
  //         ${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg
  //       )
  //     `
  //   }
  // }
}

</script>

<style scoped>
@import '../css/style.css';

</style>