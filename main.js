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
let intervalId
let startX = 0
let endX = 0

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

// Функция для перехода к предыдущему слайду
function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length // Переход к предыдущему слайду
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

// Сенсорные события для перелистывания слайдов на мобильных устройствах
document.querySelector('.carousel').addEventListener('touchstart', e => {
	startX = e.touches[0].clientX // Запоминаем начальную точку касания
})

document.querySelector('.carousel').addEventListener('touchmove', e => {
	endX = e.touches[0].clientX // Запоминаем положение пальца во время движения
})

document.querySelector('.carousel').addEventListener('touchend', () => {
	// Вычисляем разницу между началом и концом свайпа
	if (startX - endX > 50) {
		// Свайп влево - следующий слайд
		nextSlide()
	} else if (endX - startX > 50) {
		// Свайп вправо - предыдущий слайд
		prevSlide()
	}
	// Сбрасываем значения
	startX = 0
	endX = 0
})

// Инициализация: показываем первый слайд
showSlide(currentSlide)
