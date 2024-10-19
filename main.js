//Анимация слов
document.addEventListener('DOMContentLoaded', function () {
	const words = ['работают', 'вдохновляют', 'удивляют', 'развиваются']
	const span = document.querySelector('.phases')
	let wordIndex = 0
	const changeTime = 3000
	function changeWord() {
		span.classList.add('fade-out')

		setTimeout(() => {
			wordIndex = (wordIndex + 1) % words.length
			span.textContent = words[wordIndex]

			span.classList.remove('fade-out')
		}, 600)
	}

	setInterval(changeWord, changeTime)
})

let currentSlide = 0
const slides = document.querySelectorAll('.carousel-slide')
const dots = document.querySelectorAll('.dot')

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.style.display = i === index ? 'flex' : 'none'
		dots[i].classList.toggle('active', i === index)
	})
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length
	showSlide(currentSlide)
}

dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide = index
		showSlide(currentSlide)
	})
})
