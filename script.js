const nav_menu = document.querySelector(".nav-menu");
const sub_head = document.querySelector(".sub");
const intro = document.querySelector(".intro-section");
const nav_menu_red = document.querySelector(".red");
const nav_menu_blue = document.querySelector(".blue");
const nav_menu_green = document.querySelector(".green");
const top_btn = document.querySelector(".top");
const mid_btn = document.querySelector(".mid");
const bottom_btn = document.querySelector(".bottom");
const prog_bar = document.querySelectorAll(".progress");
const prog_text = document.querySelectorAll(".progress-text");
const work_sec = document.querySelectorAll(".project");
const prog_bar_out = document.querySelectorAll(".progress-bar");
const marketing_fade_in = document.querySelectorAll(".text-container");
const ana_fade_in = document.querySelectorAll(".ana-sctn");
const project_fade_in = document.querySelectorAll(".project-container");
const project_head = document.querySelectorAll(".project-head");
const quote = document.querySelectorAll(".quote");
const about_head = document.querySelector("about-head");
const sections = document.querySelectorAll("article");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
function  showMenu(){
    top_btn.classList.toggle('top-appear');
    mid_btn.classList.toggle('mid-appear');
    bottom_btn.classList.toggle('bottom-appear');
    nav_menu_red.classList.toggle('appear');
    nav_menu_green.classList.toggle('appear');
    nav_menu_blue.classList.toggle('appear');
    nav_menu.classList.toggle('appear');
}
var i = 0;
function introEntry(){
    intro.classList.add('intro-appear');
}
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};
const appearOptions_III = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"};
const appearOptions_II = {
  threshold: 0,
  rootMargin: "0px 0px -100% 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries,appearOnScroll) {
    entries.forEach (entry => {
      if(!entry.isIntersecting){
          return;
      }else{
          if (i == 0){
            entry.target.classList.add('fill-in-html');
            appearOnScroll.unobserve(entry.target);
          }
          if (i == 1){
            entry.target.classList.add('fill-in-css');
            appearOnScroll.unobserve(entry.target);
          }
          if (i == 2){
            entry.target.classList.add('fill-in-js');
            appearOnScroll.unobserve(entry.target);
          }
          if (i == 3){
            entry.target.classList.add('fill-in-ruby');
            appearOnScroll.unobserve(entry.target);
          }
          i = i+1;
      }
    })
},appearOptions);
prog_bar.forEach (bar => {
    appearOnScroll.observe(bar);
})
const appearOnScroll_II = new IntersectionObserver
(function(entries,appearOnScroll) {
    entries.forEach (entry => {
      if(!entry.isIntersecting){
        entry.target.classList.remove('project-appear');
      }else{
        entry.target.classList.add('project-appear');
      }
    })
},appearOptions_II);
work_sec.forEach (sec =>{
  appearOnScroll_II.observe(sec);
})
const appearOnScroll_III = new IntersectionObserver
(function(entries,appearOnScroll) {
    entries.forEach (entry => {
      if(!entry.isIntersecting){
          return;
      }else{
        entry.target.classList.add('opacity-appear');
      }
    })
},appearOptions_III);
const appearOnScroll_IIII = new IntersectionObserver
(function(entries,appearOnScroll) {
    entries.forEach (entry => {
      if(!entry.isIntersecting){
          return;
      }else{
        entry.target.classList.add('project-opacity-appear');
      }
    })
},appearOptions_III);
prog_bar_out.forEach (bar =>{
  appearOnScroll_III.observe(bar);
})
marketing_fade_in.forEach (fade =>{
  appearOnScroll_III.observe(fade);
})
ana_fade_in.forEach (fade =>{
  appearOnScroll_III.observe(fade);
})
quote.forEach (fade =>{
  appearOnScroll_III.observe(fade);
})
project_fade_in.forEach (fade =>{
  appearOnScroll_IIII.observe(fade);
})
project_head.forEach (fade =>{
  appearOnScroll_IIII.observe(fade);
})
window.onload = function() {
    introEntry();
  };
