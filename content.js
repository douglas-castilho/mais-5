let element = document.querySelector(".tm-gate")
function remove(element) {
    element.parentNode.removeChild(element);
    document.documentElement.style.overflow = "auto"
}
remove(element);