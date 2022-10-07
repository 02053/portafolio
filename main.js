let w = window
let d = document
let principalPosition = w.scrollY

window.onscroll = function() {
    let actualPosition = w.scrollY
    if (principalPosition >= actualPosition) {
        document.querySelector(".main-header").style.top = "0"
    } else {
        document.querySelector(".main-header").style.top = "-100px"
    }
    principalPosition = actualPosition
}
