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
let p_alert = document.querySelector(".project_alert");
p_alert.addEventListener("click", (e) => {
  e.preventDefault();

  alert(
    `Currently, this page is not available.
[Work is under Process]

It will be available very soon.
Inconvenience regretted!`
  );
  alert(`This Website is my First Project.`);
});

let project_footer = document.querySelector(
  "#project_footer_mid-section-part2"
);
project_footer.addEventListener("click", (e) => {
  e.preventDefault();

  alert(
    `Currently, this page is not available.
[Work is under Process]

It will be available very soon.
Inconvenience regretted!`
  );
  alert(`This Website is my First Project.`);
});
