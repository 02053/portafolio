((d) => {
    const $btnMenuOpen = d.querySelector('.menu-open'),
        $btnMenuClose = d.querySelector('.menu-close')

    $btnMenuOpen.addEventListener("click", (e) => {
        $btnMenuOpen.classList.toggle("none")
        $btnMenuClose.classList.toggle("none")
    })

    $btnMenuClose.addEventListener("click", (e) => {
        $btnMenuOpen.classList.toggle("none")
        $btnMenuClose.classList.toggle("none")
    })

    let w = window
    let principalPosition = w.scrollY

    w.onscroll = function() {
        let actualPosition = w.scrollY
        if (principalPosition >= actualPosition) {
            document.querySelector(".main-header").style.top = "0"
        } else {
            document.querySelector(".main-header").style.top = "-100px"
        }
        principalPosition = actualPosition
    }
})(document);
