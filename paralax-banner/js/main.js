window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
})

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.main'
// })