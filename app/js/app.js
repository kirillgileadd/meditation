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
			audioBtn.addEventListener('click', () => {
				audioBtn.classList.toggle('active')
				audioWork()
			})
		})
	}

	function audioWork() {
		if (audios.length > 0) {
			audios.forEach((audio) => { })
		}
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

	// }
})
