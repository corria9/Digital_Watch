		


const app = document.getElementById('app');


				function reloj() {

					app.textContent = new Date ().toLocaleTimeString();

				}

				setInterval (reloj, 1000);





		


