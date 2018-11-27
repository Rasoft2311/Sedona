var open_button = document.getElementById("navbar-toggle-open");
var close_button = document.getElementById("navbar-toggle-close");
var navbar_list = document.getElementById("navbar-list");

open_button.addEventListener("click",function () {
    this.classList.toggle("disp-none");
    close_button.classList.toggle("disp-none");
    navbar_list.classList.toggle("disp-none-mobile");
});

close_button.addEventListener("click",function () {
    this.classList.toggle("disp-none");
    open_button.classList.toggle("disp-none");
    navbar_list.classList.toggle("disp-none-mobile");
});