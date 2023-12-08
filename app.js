class App {
	timer = {
		minuts_tens: document.getElementById('minuts-tens'),
		minuts_: document.getElementById('minuts'),
		sec_tens: document.getElementById('sec-tens'),
		sec: document.getElementById('sec'),
	};
	
	#interval;

	submit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const time = formData.get('time');
		this.#clearTimer();
		this.#startTimer(time);
	}

	#clearTimer() {
		if (this.#interval) {
			clearInterval(this.#interval);
		}
		this.#setTimer({
			minuts_tens: 0,
			minuts_: 0,
			sec_tens: 0,
			sec: 0
		})
	}

	#startTimer(time) {
		const end = Date.now() + time * 1000 * 60;
		this.#interval = setInterval(() => {
			const now = Date.now();
			const delta = end - now;
			if (delta < 0) {
				clearInterval(this.#interval);
				return;
			}
			this.#setTimer({
				minuts_tens: Math.floor(delta / 1000 / 60 / 10),
				minuts_: Math.floor((delta / 1000 / 60) % 10),
				sec_tens: Math.floor((delta % 60000) / 10000),
				sec: Math.floor(((delta % 60000) / 1000) % 10)
			})
		}, 500);
	}

	#setTimer({ minuts_tens,minuts_,sec_tens,sec }) {
		this.timer.minuts_tens.innerText = minuts_tens;
		this.timer.minuts_.innerText = minuts_;
		this.timer.sec_tens.innerText = sec_tens;
		this.timer.sec.innerText = sec;
	}

}

const app = new App();
