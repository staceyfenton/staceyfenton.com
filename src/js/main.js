import 'whatwg-fetch';

if(typeof window.stacey === 'undefined') {
  window.stacey = {};
}

window.stacey = {
	vars: {
		contactForm: null,
		emAdd: null,
		animatedElements: null,
		mobileNavLink: null,
		primaryNav: null,
		observer: null
	},

	init() {
		// image lazy load
		if (!('IntersectionObserver' in window)) {
			window.stacey.Helpers.loadAllImages();
		} else {
			window.stacey.Helpers.lazyLoadImages();
		}

		// contact form
		window.stacey.Helpers.initForm();

		// animations
		window.stacey.vars.animatedElements = [...document.querySelectorAll('.project-list__item, .project-img')];

		if(document.querySelector('.work')) {
			if(sessionStorage.hit !== 1) {
				window.stacey.Events.disableAnimation();
				window.stacey.Events.initAnimation();
			}
		} else {
			window.stacey.Events.initAnimation();
		}

		// nav
		window.stacey.vars.primaryNav = document.querySelector('.site-header__nav-list');
		window.stacey.vars.mobileNavLink = document.querySelector('.site-header__mobile-link');
		window.stacey.vars.mobileNavLink.addEventListener('click', window.stacey.Events.toggleMobileNav);
	},

	Events: {
		disableAnimation() {
	  	document.body.dataset.hit = sessionStorage.hit || 0;
	  	sessionStorage.hit = 1;
	  },

	  initAnimation() {
	  	window.stacey.vars.animatedElements.forEach(element => element.classList.add('animate'));
			window.stacey.Events.addAnimationClass();
			window.addEventListener('scroll', window.stacey.Events.addAnimationClass);
	  },

	  isScrolledIntoView: function(el) {
	    var elemTop = el.getBoundingClientRect().top;
	    var elemBottom = el.getBoundingClientRect().bottom;

    	var isVisible = (elemTop < window.innerHeight) && (elemBottom >= 0);
    	return isVisible;
	  },

	  addAnimationClass: function() {
			window.stacey.vars.animatedElements.forEach(element => {
				if(window.stacey.Events.isScrolledIntoView(element)) {
					element.classList.add('fadeInUp');
				}
			});
		},

		toggleMobileNav: function(e) {
	  	e.preventDefault();
	  	window.stacey.vars.primaryNav.classList.toggle('site-header__nav-list--active');
	  },

		submitContactForm(event) {
			event.preventDefault();
			let successMsg = '<div class="notification is-success">Thanks for contacting me, I will respond to you as soon as possible.</div>';
			let errorMsg = '<div class="notification is-error">Oh no, something has gone wrong. Please try again.</div>';
			let request = new Request('//formspree.io/' + window.stacey.vars.emAdd, {
				method: 'POST', 
				body: new FormData(window.stacey.vars.contactForm),
				headers: new Headers({
					'Accept': 'application/json'
				})
			});

			fetch(request).then(function(response) {
				if(!response.ok) {
					window.stacey.vars.contactForm.insertAdjacentHTML('beforeend', errorMsg);
					return Promise.reject(new Error(response.statusText));
				}
				window.stacey.vars.contactForm.insertAdjacentHTML('beforeend', successMsg);
				return Promise.resolve(response);
			}).catch(function(error) {
				window.stacey.vars.contactForm.insertAdjacentHTML('beforeend', errorMsg);
			});
		}
	},

	Helpers: {
		loadAllImages() {
			let images = [...document.querySelectorAll('.js-lazy-load')];
			images.forEach(img => {
				window.stacey.Helpers.loadImage(img);
			});
		},

		lazyLoadImages() {
			// Get all of the images that are marked up to lazy load
			let images = [...document.querySelectorAll('.js-lazy-load')];
			let config = {
				// If the image gets within 50px in the Y axis, start the download.
				rootMargin: '50px 0px',
				threshold: 0.01
			};

			// The observer for the images on the page
			window.stacey.vars.observer = new IntersectionObserver(window.stacey.Helpers.onIntersection, config);
			images.forEach(image => {
				window.stacey.vars.observer.observe(image);
			});
		},

		onIntersection(entries) {
			// Loop through the entries
			entries.forEach(entry => {
				// Are we in viewport?
				if (entry.intersectionRatio > 0) {
		
					// Stop watching and load the image
					window.stacey.vars.observer.unobserve(entry.target);
					window.stacey.Helpers.loadImage(entry.target);
				}
			});
		},

		loadImage(img) {
			var sources = img.querySelectorAll('source');
			var img = img.querySelector('img');
			sources.forEach(src => {
				src.setAttribute('srcset', src.getAttribute('data-srcset'));
			});
			img.src = img.getAttribute('data-src');
		},

		initForm() {
			if(document.querySelector('.contact-form')) {
				window.stacey.vars.contactForm = document.querySelector('.contact-form');
				window.stacey.vars.emAdd = 'hello' + '@' + 'staceyfenton' + '.' + 'com';
				window.stacey.vars.contactForm.setAttribute('action', '//formspree.io/' + window.stacey.vars.emAdd);
				window.stacey.vars.contactForm.addEventListener('submit', window.stacey.Events.submitContactForm);
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', window.stacey.init);