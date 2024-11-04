document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    // Hero Slider
    const heroSlider = document.getElementById('hero-slider');
    const heroImages = heroSlider.querySelectorAll('img');
    let currentHeroImage = 0;

    function cycleHeroImages() {
        heroImages[currentHeroImage].style.opacity = '0';
        currentHeroImage = (currentHeroImage + 1) % heroImages.length;
        heroImages[currentHeroImage].style.opacity = '1';
    }

    setInterval(cycleHeroImages, 5000);

    // Tipologías Filter
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

    // Proyectos Slider
    const proyectosSlider = document.getElementById('proyectos-slider');
    const scrollLeftProyectos = document.getElementById('scroll-left');
    const scrollRightProyectos = document.getElementById('scroll-right');

    scrollLeftProyectos.addEventListener('click', () => {
        proyectosSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightProyectos.addEventListener('click', () => {
        proyectosSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Instagram Reels Slider
    const reelsSlider = document.getElementById('reels-slider');
    const scrollLeftReels = document.getElementById('reels-scroll-left');
    const scrollRightReels = document.getElementById('reels-scroll-right');

    scrollLeftReels.addEventListener('click', () => {
        reelsSlider.scrollBy({ left: -400, behavior: 'smooth' });
    });

    scrollRightReels.addEventListener('click', () => {
        reelsSlider.scrollBy({ left: 400, behavior: 'smooth' });
    });

    // Testimonios Slider
    const testimoniosSlider = document.getElementById('testimonios-slider');
    const scrollLeftTestimonios = document.getElementById('testimonios-scroll-left');
    const scrollRightTestimonios = document.getElementById('testimonios-scroll-right');

    scrollLeftTestimonios.addEventListener('click', () => {
        testimoniosSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRightTestimonios.addEventListener('click', () => {
        testimoniosSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Formulario enviado con éxito!');
        contactForm.reset();
    });
});