const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);




function coursourAnimation() {
  document.addEventListener('mousemove', function(dets){

    gsap.to('.crsr',{
     left : dets.x,
     top : dets.y
    })
})
}
coursourAnimation();

var tl = gsap.timeline();

tl.from(".top_loader h3", {
  duration : 2,
  opacity : 0,
  scrub : 1,
  y : 10,
}),
tl.from(".bottom_left h3", {
  opacity : 0,
  scrub : 1,
  y : 10,
}),
tl.from(".bottom_left span", {
  opacity : 0,
  scrub : 1,
  y : 10,
}),
tl.from(".count", {
  opacity: 0,
  onStart: function () {
    var counter = document.querySelector(".count");
    timer = 0;
    var counterStart = setInterval(function () {
      timer++;
      if (timer >= 100) {
        counterStoper();
      }
      counter.textContent = timer;
    }, 10);
    function counterStoper() {
      clearInterval(counterStart);
    }
  },
}),

tl.to(".loader_wrap", {
  delay: 1,
  duration : 0.71,
  scrub : 1,
  y : -590,
}),
tl.from(".flex-img img", { opacity: 0 , y: 3, duration : 1 }, "sameTime")
  .from(".head1 h1", { y: 100 ,duration : 1 }, "sameTime")
  .from(".head2 h1", { y: 100,duration : 1 }, "sameTime")
  .from(".flex-span div",  { opacity: 0, y: 10, stagger: 0.1 }, "sameTime")
  .from(".flex-name p", { opacity: 0, y: 10 , duration : 1}, "sameTime")
  .from(".skills p", { opacity: 0, x: -10 , duration : 1}, "sameTime")
  .from(".image-flex .img1", { opacity: 0, y: -10 , duration : 1.2 ,stagger : 0.2}, "sameTime");

