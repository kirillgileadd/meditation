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
	const audio = document.querySelector('#audio')
	const playBtns = document.querySelectorAll('#btnPlay')
	const pauseBtns = document.querySelectorAll('#btnPause')


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

	for (let button of audioBtns) {
		button.addEventListener('click', () => {
			playBtns.forEach((playBtn) => {
				playBtn.classList.remove('active')
			})
			if (audio.paused) {
				pauseBtns.forEach((pauseBtn) => {
					pauseBtn.classList.add('active')
				})
				audio.play()
			} else {
				pauseBtns.forEach((pauseBtn) => {
					pauseBtn.classList.remove('active')
				})
				playBtns.forEach((playBtn) => {
					playBtn.classList.add('active')
				})
				audio.pause()
			}
		})

	}
})
