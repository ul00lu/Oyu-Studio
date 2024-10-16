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
