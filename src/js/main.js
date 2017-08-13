document.addEventListener('DOMContentLoaded', function() {
	// image lazy load
	var noscripts = [...document.querySelectorAll('noscript')];
	noscripts.forEach(noscript => {
		var newImg = new Image();
		newImg.setAttribute('data-src', '');
		newImg.setAttribute('alt', noscript.getAttribute('data-alt') || '');
		newImg.setAttribute('class', noscript.getAttribute('data-class'));
		noscript.parentNode.insertBefore(newImg, noscript);
		newImg.onload = function() {
			newImg.removeAttribute('data-src');
		};
		newImg.src = noscript.getAttribute('data-src');
	});

	// contact form
	
	if(document.querySelector('.contact-form')) {
		let contactForm = document.querySelector('.contact-form');
		let emAdd = 'hello' + '@' + 'staceyfenton' + '.' + 'com';
		contactForm.setAttribute('action', '//formspree.io/' + emAdd);
		contactForm.addEventListener('submit', function(event) {
			event.preventDefault();
			let successMsg = '<div class="notification is-success">Thanks for contacting me, I will respond to you as soon as possible.</div>';
			let errorMsg = '<div class="notification is-error">Oh no, something has gone wrong. Please try again.</div>';
			let request = new Request('//formspree.io/' + emAdd, {
				method: 'POST', 
				body: new FormData(contactForm),
				headers: new Headers({
					'Accept': 'application/json'
				})
			});

			fetch(request).then(function(response) {
				console.log(response);
				if(!response.ok) {
					contactForm.insertAdjacentHTML('beforeend', errorMsg);
					return Promise.reject(new Error(response.statusText));
				}
				contactForm.insertAdjacentHTML('beforeend', successMsg);
				return Promise.resolve(response);
			}).catch(function(error) {
				contactForm.insertAdjacentHTML('beforeend', errorMsg);
			});
		});
	}
});