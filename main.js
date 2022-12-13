   
if (localStorage.getItem("year") != "2") {
           alert(`Website is not updated since 19 jan 2021.`);
    localStorage.setItem("year", "2");
          }

const nav_phone = document.querySelector(".nav_phone");
const navmenu = document.querySelector(".navmenu");
const nav_list = document.querySelectorAll(".nav_list");

nav_phone.addEventListener("click", mobileMenu);
nav_list.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  nav_phone.classList.toggle("active_nav_phone");
  navmenu.classList.toggle("active_nav_phone");
  nav_phone.classList.toggle("animation_nav_phone_lines");
}

function closeMenu() {
  nav_phone.classList.remove("active_nav_phone");
  navmenu.classList.remove("active_nav_phone");
}

let change_heading = document.querySelector(".heading_mid-section-part2");
// let x = window.matchMedia("(min-width:0px) and (max-width:400px)");
/*The window.matchMedia() method returns a MeduaQueryList
object repersenting the results of the specified CSS media 
query string.
The value of the matchMedia() method can be any of the media 
features of the CSS@media rule like min-height,min-width,orientation,etc*/
// myfun(x);
// x.addListener(myfun);
// function myfun(x) {
//   if (x.matches) {
//     change_heading.innerHTML = "Hello";
//   }
// }
// The above method is also do the same works as below done.
if (window.innerWidth <= 400) {
  change_heading.innerHTML = "Hello";
}
let resume = document.querySelector("#resume_footer_mid-section-part2");
resume.addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    `Currently, this page is not available.
"Work is under Process."


Inconvenience regretted!"`
  );
});

document.querySelector(".click_fb").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.facebook.com/profile.php?id=100057814296670");
});
document.querySelector(".click_twit").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://twitter.com/aryan3865?s=08");
});
document.querySelector(".click_link").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.linkedin.com/in/aryan-kumar-88515121a");
});
document.querySelector(".click_insta").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.instagram.com/aryanroy.tony?r=nametag");
});
