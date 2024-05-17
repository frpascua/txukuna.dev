
init = () => {
	console.log('Startup');
	setTimeout(function () {
		window.location.href = '/start';
	}, 3000);
}


document.addEventListener("DOMContentLoaded", init)