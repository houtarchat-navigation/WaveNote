const bars = document.querySelectorAll('.bar');
let intervalValue = 0;

const delay = time => new Promise(resolve => setTimeout(resolve, time));

[...bars].map((bar) => {
	delay(0).then(() => {
		setTimeout(() => {
			bar.style.animation = 'sound 500ms linear infinite alternate'
		}, intervalValue += 100)
	})
})