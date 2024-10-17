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

// // Слайдер
// const sliderContainer = document.querySelector('.case__slider')
// const sliderWrapper = document.querySelector('.slider-wrapper')
// const slides = document.querySelectorAll('.slider-slide')
// const prevButton = document.querySelector('.prev')
// const nextButton = document.querySelector('.next')
// const indicatorsContainer = document.querySelector('.slider-indicators')
// let currentIndex = 0
// let autoSlide

// // Функция для переключения слайдов
// function showSlide(index) {
// 	const totalSlides = slides.length
// 	currentIndex = (index + totalSlides) % totalSlides
// 	sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`

// 	// Обновляем индикаторы
// 	document
// 		.querySelectorAll('.slider-indicators div')
// 		.forEach((indicator, i) => {
// 			indicator.classList.toggle('active', i === currentIndex)
// 		})
// }

// // Добавляем индикаторы
// slides.forEach((_, index) => {
// 	const indicator = document.createElement('div')
// 	if (index === 0) indicator.classList.add('active')
// 	indicator.addEventListener('click', () => showSlide(index))
// 	indicatorsContainer.appendChild(indicator)
// })

// // Переключение по кнопкам
// prevButton.addEventListener('click', () => showSlide(currentIndex - 1))
// nextButton.addEventListener('click', () => showSlide(currentIndex + 1))

// // Автоперелистывание
// function startAutoSlide() {
// 	autoSlide = setInterval(() => showSlide(currentIndex + 1), 3000)
// }

// function stopAutoSlide() {
// 	clearInterval(autoSlide)
// }

// // Сенсорное управление для мобильных устройств
// let startX = 0
// sliderWrapper.addEventListener('touchstart', e => {
// 	startX = e.touches[0].clientX
// 	stopAutoSlide() // Останавливаем автопрокрутку при свайпе
// })

// sliderWrapper.addEventListener('touchmove', e => {
// 	const touchEnd = e.touches[0].clientX
// 	if (touchEnd < startX - 50) {
// 		showSlide(currentIndex + 1)
// 	} else if (touchEnd > startX + 50) {
// 		showSlide(currentIndex - 1)
// 	}
// 	startAutoSlide() // Возобновляем автопрокрутку после свайпа
// })

// // Остановка автопрокрутки при наведении
// sliderContainer.addEventListener('mouseenter', stopAutoSlide)

// // Возобновление автопрокрутки при уходе мыши
// sliderContainer.addEventListener('mouseleave', startAutoSlide)

// // Запуск автопрокрутки
// startAutoSlide()

// Слайдер
const sliderContainer = document.querySelector('.case__slider')
const sliderWrapper = document.querySelector('.slider-wrapper')
const slides = document.querySelectorAll('.slider-slide')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const indicatorsContainer = document.querySelector('.slider-indicators')
let currentIndex = 0
let autoSlide

// Функция для переключения слайдов
function showSlide(index) {
	const totalSlides = slides.length
	currentIndex = (index + totalSlides) % totalSlides
	sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`

	// Обновляем индикаторы
	document
		.querySelectorAll('.slider-indicators div')
		.forEach((indicator, i) => {
			indicator.classList.toggle('active', i === currentIndex)
		})
}

// Добавляем индикаторы
slides.forEach((_, index) => {
	const indicator = document.createElement('div')
	if (index === 0) indicator.classList.add('active')
	indicator.addEventListener('click', () => showSlide(index))
	indicatorsContainer.appendChild(indicator)
})

// Переключение по кнопкам
prevButton.addEventListener('click', () => showSlide(currentIndex - 1))
nextButton.addEventListener('click', () => showSlide(currentIndex + 1))

// Автоперелистывание
function startAutoSlide() {
	autoSlide = setInterval(() => showSlide(currentIndex + 1), 3000)
}

function stopAutoSlide() {
	clearInterval(autoSlide)
}

// Сенсорное управление для мобильных устройств
let startX = 0
sliderWrapper.addEventListener('touchstart', e => {
	startX = e.touches[0].clientX
	stopAutoSlide() // Останавливаем автопрокрутку при свайпе
})

sliderWrapper.addEventListener('touchmove', e => {
	const touchEnd = e.touches[0].clientX
	if (touchEnd < startX - 50) {
		showSlide(currentIndex + 1)
		startX = touchEnd // Обновляем startX для предотвращения повторных вызовов
	} else if (touchEnd > startX + 50) {
		showSlide(currentIndex - 1)
		startX = touchEnd // Обновляем startX для предотвращения повторных вызовов
	}
})

sliderWrapper.addEventListener('touchend', () => {
	startAutoSlide() // Возобновляем автопрокрутку после свайпа
})

// Остановка автопрокрутки при наведении
sliderContainer.addEventListener('mouseenter', stopAutoSlide)

// Возобновление автопрокрутки при уходе мыши
sliderContainer.addEventListener('mouseleave', startAutoSlide)

// Запуск автопрокрутки
startAutoSlide()
