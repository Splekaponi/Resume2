let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move")
};
window.onscroll = () => {
    navbar.classList.remove("open-menu")
    menu.classList.remove("move")
}

//Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_qtrhb5h","template_tanmbi7",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}


function emptyerror() {
    swal({
        title: "Oopsss...",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}
//Header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//Scroll top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});