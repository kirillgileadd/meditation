// // Import vendor jQuery plugin example
import Swiper from 'swiper/bundle'
// import '~/app/libs/mmenu/dist/mmenu.js'
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
});
document.addEventListener('DOMContentLoaded', () => {

	const practices = document.querySelectorAll('.practice__item')
	const audioBtns = document.querySelectorAll('#startOrStop')
	const audios = document.querySelectorAll('#audio')
	const playBtns = document.querySelectorAll('#btnPlay')
	const pauseBtns = document.querySelectorAll('#btnPause')
	const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
	const menuBody = document.querySelector('.menu__body')
	//Scroll to section 


	if (menuLinks.length > 0) {
		menuLinks.forEach((menuLink) => {
			menuLink.addEventListener('click', onMenuLinkClick)
		})

		function onMenuLinkClick(e) {
			let menuLink = e.target
			removeLiksClasses()
			menuLink.classList.add('active')
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				menuLink.c
				const goToBlock = document.querySelector(menuLink.dataset.goto)
				const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

				if (iconMenu.classList.contains('active')) {
					document.body.classList.remove('lock')
					iconMenu.classList.remove('active')
					menuBody.classList.remove('active')
				}

				window.scrollTo({
					top: goToBlockValue,
					behavior: 'smooth'
				})
				e.preventDefault()
			}
		}

		function removeLiksClasses() {
			menuLinks.forEach((menuLink) => {
				menuLink.classList.remove('active')
			})
		}
	}
	// Choice

	for (let practice of practices) {
		practice.addEventListener('click', () => {
			removeAllClasses()
			practice.classList.add('active')
		})
	}

	const removeAllClasses = () => {
		practices.forEach((practice) => {
			practice.classList.remove('active')
		})
	}

	//Music



	if (audioBtns.length > 0) {
		audioBtns.forEach((audioBtn) => {
			audioBtn.addEventListener('click', (e) => {

				if (audioBtn.classList.contains('active')) {
					removePlayClases()
				} else {
					removePlayClases()
					audioBtn.classList.toggle('active')
				}
			})
		})
	}

	const removePlayClases = () => {
		audioBtns.forEach((audioBtn) => {
			audioBtn.classList.remove('active')
		})
	}

	//POPUP


	let popupBg = document.querySelector('.popup__bg');
	let popup = document.querySelector('.popup');
	let openPopupButtons = document.querySelectorAll('#popupBtn')
	let closePopupButton = document.querySelector('#popupBtnClose')
	let thankspopup = document.querySelector('.thankspopup')
	let thankspopupBg = document.querySelector('.thankspopup__bg')
	let sendEmailBtn = document.querySelector('.popup__button-send')
	let thankspopupBtnClose = document.querySelector('#thankspopupBtnClose')
	let popupInput = document.querySelector('#sendBtn')


	const popupClose = () => {
		popupBg.classList.remove('active'); // ?????????????? ???????????????? ?????????? ?? ????????
		popup.classList.remove('active'); // ?? ?? ????????
		popupInput.style.border = ""

	}
	const popupOpen = () => {
		popupBg.classList.add('active'); // ?????????????? ???????????????? ?????????? ?? ????????
		popup.classList.add('active'); // ?? ?? ????????
	}

	openPopupButtons.forEach((button) => { // ???????????????????? ?????? ????????????
		button.addEventListener('click', (e) => { // ?????? ???????????? ???????????? ???????????????????? ?????????????? ???? ????????
			e.preventDefault(); // ?????????????????????????? ?????????????????? ?????????????????? ????????????????
			popupOpen()
		})
	});

	closePopupButton.addEventListener('click', () => { // ???????????? ???????????????????? ???? ??????????????
		popupClose()

	});

	sendEmailBtn.addEventListener('click', () => {

		if (popupInput.value !== '') {
			popupClose()
			thankspopup.classList.add('active')
			thankspopupBg.classList.add('active')
			popupInput.value = ''
		} else {
			popupInput.style.border = "1px solid red"
		}
	})


	document.addEventListener('click', (e) => { // ???????????? ???????????????????? ???? ???????? ????????????????
		if (e.target === popupBg) { // ???????? ???????? ?????????? - ??????, ????:
			popupClose()
		} else if (e.target === thankspopupBg) {
			thankspopup.classList.remove('active')
			thankspopupBg.classList.remove('active')
		}
	});

	thankspopupBtnClose.addEventListener('click', () => {
		thankspopup.classList.remove('active')
		thankspopupBg.classList.remove('active')
	})

	// Butger 

	const iconMenu = document.querySelector('.menu__icon')
	if (iconMenu) {
		iconMenu.addEventListener('click', () => {
			document.body.classList.toggle('lock')
			iconMenu.classList.toggle('active')
			menuBody.classList.toggle('active')
		})
	}


	// if (audio.paused) {
	// 	audio.play()
	// } else {
	// 	audio.pause()
	// }
	// for (let button of audioBtns) {
	// 	button.addEventListener('click', () => {
	// 		playBtns.forEach((playBtn) => {
	// 			playBtn.classList.remove('active')
	// 		})
	// if (audio.paused) {
	// 	pauseBtns.forEach((pauseBtn) => {
	// 		pauseBtn.classList.add('active')
	// 	})
	// 	audio.play()
	// } else {
	// 	pauseBtns.forEach((pauseBtn) => {
	// 		pauseBtn.classList.remove('active')
	// 	})
	// 	playBtns.forEach((playBtn) => {
	// 		playBtn.classList.add('active')
	// 	})
	// 	audio.pause()
	// }
	// 	})

	// }https://hachapuriivino.ru/
})
