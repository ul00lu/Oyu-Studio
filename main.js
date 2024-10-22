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

// Карусель
let currentSlide = 0
const slides = document.querySelectorAll('.carousel-slide')
const dots = document.querySelectorAll('.dot')
let intervalId

// Функция для отображения текущего слайда
function showSlide(index) {
	const prevIndex = (currentSlide - 1 + slides.length) % slides.length // Индекс предыдущего слайда
	const nextIndex = (currentSlide + 1) % slides.length // Индекс следующего слайда

	slides.forEach(slide => {
		slide.classList.remove('active', 'next', 'prev') // Убираем классы у всех слайдов
	})

	slides[currentSlide].classList.add('active') // Добавляем класс active к текущему слайду
	slides[prevIndex].classList.add('prev') // Добавляем класс prev к предыдущему слайду
	slides[nextIndex].classList.add('next') // Добавляем класс next к следующему слайду

	dots.forEach((dot, i) => {
		dot.classList.toggle('active', i === currentSlide) // Обновляем индикаторы
	})
}

// Функция для перехода к следующему слайду
function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length // Переход к следующему слайду
	showSlide(currentSlide)
}

// Обработчик событий для индикаторов
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide = index // Обновляем текущий слайд
		showSlide(currentSlide)
	})
})

// Функция для запуска автоперелистывания
function startAutoScroll() {
	intervalId = setInterval(nextSlide, 5000) // Переключение слайда каждые 5 секунд
}

// Функция для остановки автоперелистывания
function stopAutoScroll() {
	clearInterval(intervalId)
}

// Запускаем автоперелистывание при загрузке
startAutoScroll()

// Останавливаем автоперелистывание при наведении мыши на карусель
document
	.querySelector('.carousel')
	.addEventListener('mouseover', stopAutoScroll)
document
	.querySelector('.carousel')
	.addEventListener('mouseleave', startAutoScroll)

// Инициализация: показываем первый слайд
showSlide(currentSlide)
