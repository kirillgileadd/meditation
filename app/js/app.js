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
})
