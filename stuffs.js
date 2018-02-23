window.onload = getHeight;
window.onresize = getHeight;
window.onscroll = fixHeader;

function getHeight() {
    let elems = document.querySelectorAll('.setH');
    let index = 0, length = elems.length;
    for ( ; index < length; index++) {
      let heightC = window.innerHeight;
      elems[index].style.height= heightC + 'px';
    }
}

function fixHeader() {
  let logo = document.querySelector('.nazLogo');
  let topLine = document.querySelector('.nazLine-top');
	let imgHello = document.querySelector('.imgHello');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        logo.classList.add('fixed');
        topLine.classList.add('fixed');
				imgHello.classList.add('border');
    } else {
      logo.classList.remove('fixed');
      topLine.classList.remove('fixed');
			imgHello.classList.remove('border');
    }
}

function whoIs() {
	document.querySelector('.nazContainer-two').scrollIntoView({
  behavior: 'smooth'
});
}
