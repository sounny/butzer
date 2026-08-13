
let l1 = document.querySelector('.navbar-nav > .nav-item:last-child');
let l1BtnGroup = l1.querySelectorAll('.btn-group');
l1BtnGroup.forEach((bg) => {
   bg.classList.remove("dropend");
   bg.classList.add("dropstart");
})

let width = window.innerWidth;
if (width < 991) {
  let btnGroup = document.querySelectorAll('.btn-group');
  btnGroup.forEach((bg) => {
    bg.classList.remove("dropend","dropstart");
  })
}
