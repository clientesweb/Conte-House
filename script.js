document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click',

 function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        });
    });

    // Top banner message rotation
    const bannerMessages = document.querySelectorAll('.banner-message');
    let currentMessageIndex = 0;

    function rotateBannerMessage() {
        bannerMessages[currentMessageIndex].classList.add('hidden');
        currentMessageIndex = (currentMessageIndex + 1) % bannerMessages.length;
        bannerMessages[currentMessageIndex].classList.remove('hidden');
    }

    setInterval(rotateBannerMessage, 5000);

    // Hero slider
    const heroSlider = document.getElementById('hero-slider');
    const heroImages = heroSlider.querySelectorAll('img');
    let currentSlide = 0;

    function showNextSlide() {
        heroImages[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % heroImages.length;
        heroImages[currentSlide].style.opacity = '1';
    }

    setInterval(showNextSlide, 5000);

    // Tipologías filter
    const tipologiaFilter = document.getElementById('tipologia-filter');
    const tipologiaCards = document.querySelectorAll('.tipologia-card');

    tipologiaFilter.addEventListener('change', function() {
        const selectedType = this.value;
        tipologiaCards.forEach(card => {
            if (selectedType === 'all' || card.dataset.type === selectedType) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Tipologías modal
    const modal = document.getElementById('tipologia-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const viewMoreButtons = document.querySelectorAll('.view-more');

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tipologia = this.dataset.tipologia;
            modalTitle.textContent = this.parentElement.querySelector('h3').textContent;
            // Here you would typically fetch or have predefined content for each tipologia
            modalContent.innerHTML = `<p>Detailed information about ${tipologia} would go here.</p>`;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });

    // Instagram Reels slider
    const reelsSlider = document.getElementById('reels-slider');
    const reelsScrollLeft = document.getElementById('reels-scroll-left');
    const reelsScrollRight = document.getElementById('reels-scroll-right');

    // Sample reels data (replace with actual data)
    const reelsData = [
        { id: 1, url: 'https://www.instagram.com/reel/1' },
        { id: 2, url: 'https://www.instagram.com/reel/2' },
        { id: 3, url: 'https://www.instagram.com/reel/3' },
        { id: 4, url: 'https://www.instagram.com/reel/4' },
        { id: 5, url: 'https://www.instagram.com/reel/5' },
        { id: 6, url: 'https://www.instagram.com/reel/6' },
    ];

    // Populate reels
    reelsData.forEach(reel => {
        const reelElement = document.createElement('div');
        reelElement.className = 'flex-shrink-0 w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden';
        reelElement.innerHTML = `
            <iframe src="${reel.url}" class="w-full h-full" frameborder="0" allowfullscreen></iframe>
        `;
        reelsSlider.appendChild(reelElement);
    });

    reelsScrollLeft.addEventListener('click', () => {
        reelsSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    reelsScrollRight.addEventListener('click', () => {
        reelsSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Proyectos slider
    const proyectosSlider = document.getElementById('proyectos-slider');
    const scrollLeft = document.getElementById('scroll-left');
    const scrollRight = document.getElementById('scroll-right');

    // Sample projects data (replace with actual data)
    const projectsData = [
        { id: 1, title: 'Casa Moderna', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80' },
        { id: 2, title: 'Oficina Creativa', image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' },
        { id: 3, title: 'Estudio Minimalista', image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' },
        { id: 4, title: 'Casa de Playa', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80' },
        { id: 5, title: 'Loft Urbano', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80' },
        { id: 6, title: 'Casa Familiar', image: 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80' },
    ];

    // Populate projects
    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <a href="#" class="text-primary hover:underline">Ver más</a>
            </div>
        `;
        proyectosSlider.appendChild(projectElement);
    });

    scrollLeft.addEventListener('click', () => {
        proyectosSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', () => {
        proyectosSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Testimonios slider
    const testimoniosSlider = document.getElementById('testimonios-slider');
    const testimoniosScrollLeft = document.getElementById('testimonios-scroll-left');
    const testimoniosScrollRight = document.getElementById('testimonios-scroll-right');

    // Sample testimonials data (replace with actual data)
    const testimonialsData = [
        { id: 1, name: 'Juan Pérez', text: 'Excelente servicio y calidad en la construcción. Muy satisfecho con mi nueva casa contenedor.' },
        { id: 2, name: 'María González', text: 'Conte House superó todas mis expectativas. El diseño es moderno y funcional.' },
        { id: 3, name: 'Carlos Rodríguez', text: 'Profesionales en todo sentido. Cumplieron con los plazos y el presupuesto acordado.' },
        { id: 4, name: 'Ana Martínez', text: 'Mi oficina quedó espectacular. Recomiendo 100% a Conte House para proyectos innovadores.' },
    ];

    // Populate testimonials
    testimonialsData.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6';
        testimonialElement.innerHTML = `
            <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
            <p class="font-bold text-secondary">${testimonial.name}</p>
        `;
        testimoniosSlider.querySelector('.flex').appendChild(testimonialElement);
    });

    testimoniosScrollLeft.addEventListener('click', () => {
        testimoniosSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    testimoniosScrollRight.addEventListener('click', () => {
        testimoniosSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
});