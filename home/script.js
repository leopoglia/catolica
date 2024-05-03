
function scrollToDirection(direction) {

    if(direction == 'left') {
    document.getElementById("container-boxes").scrollLeft += 250;
    } else {
    document.getElementById("container-boxes").scrollLeft -= 250;
    }


}