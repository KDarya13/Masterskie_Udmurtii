window.addEventListener ('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.contant'
})
const menuClick = document.querySelector('.menu-sec');
 console.log(menuClick);

const menuNav = document.querySelector('.menu-nav');
console.log(menuNav);



menuClick.addEventListener('click', () => {
    menuClick.classList.toggle('menu-sec_active');
    menuNav.classList.toggle('menu-nav_active');
})