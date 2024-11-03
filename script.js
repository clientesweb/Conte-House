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
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero slider
    const heroSlider = document.getElementById('hero-slider');
    const heroImages = [
        'hero-image-1.jpg',
        'hero-image-2.jpg',
        'hero-image-3.jpg'
    ];

    heroImages.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Hero Image ${index + 1}`;
        img.className = 'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000';
        img.style.opacity = index === 0 ? '1' : '0';
        heroSlider.appendChild(img);
    });

    let currentHeroImage = 0;
    setInterval(() => {
        const images = heroSlider.querySelectorAll('img');
        images[currentHeroImage].style.opacity = '0';
        currentHeroImage = (currentHeroImage + 1) % images.length;
        images[currentHeroImage].style.opacity = '1';
    }, 5000);

    // Projects slider
    const projectsSlider = document.getElementById('proyectos-slider');
    const projects = [
        { title: 'Proyecto 1', image: 'project1.jpg', description: 'Descripción del Proyecto 1' },
        { title: 'Proyecto 2', image: 'project2.jpg', description: 'Descripción del Proyecto 2' },
        { title: 'Proyecto 3', image: 'project3.jpg', description: 'Descripción del Proyecto 3' },
        { title: 'Proyecto 4', image: 'project4.jpg', description: 'Descripción del Proyecto 4' },
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${project.title}</h3>
                <p class="text-gray-600">${project.description}</p>
                <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300">Ver Más</button>
            </div>
        `;
        projectsSlider.appendChild(projectCard);
    });

    // Projects slider navigation
    const scrollLeft = document.getElementById('scroll-left');
    const scrollRight = document.getElementById('scroll-right');

    scrollLeft.addEventListener('click', () => {
        projectsSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', () => {
        projectsSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Testimonials slider
    const testimoniosSlider = document.getElementById('testimonios-slider').querySelector('.flex');
    const testimonials = [
        { name: 'Juan Pérez', text: 'Excelente servicio y calidad en la construcción de mi casa contenedor.', image: 'testimonial1.jpg' },
        { name: 'María González', text: 'Conte House superó mis expectativas. Recomiendo sus servicios al 100%.', image: 'testimonial2.jpg' },
        { name: 'Carlos Rodríguez', text: 'Profesionales en todo sentido. Mi oficina quedó perfecta.', image: 'testimonial3.jpg' },
    ];

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'flex-shrink-0 w-72 bg-white rounded-lg shadow-md p-6';
        testimonialCard.innerHTML = `
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                <h3 class="font-bold">${testimonial.name}</h3>
            </div>
            <p class="text-gray-600">"${testimonial.text}"</p>
        `;
        testimoniosSlider.appendChild(testimonialCard);
    });

    // Testimonials slider navigation
    const testimoniosScrollLeft = document.getElementById('testimonios-scroll-left');
    const testimoniosScrollRight = document.getElementById('testimonios-scroll-right');

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
        // For this example, we'll just log it to the console
        console.log('Form submitted');
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });

    // Gallery modal
    const galleryModal = document.getElementById('gallery-modal');
    const closeGalleryModal = document.getElementById('close-gallery-modal');
    const galleryModalSlider = document.getElementById('gallery-modal-slider');
    const galleryModalDescription = document.getElementById('gallery-modal-description');
    const galleryModalPrev = document.getElementById('gallery-modal-prev');
    const galleryModalNext = document.getElementById('gallery-modal-next');

    let currentGalleryImage = 0;
    const galleryImages = [
        { src: 'gallery1.jpg', description: 'Interior de contenedor habitable' },
        { src: 'gallery2.jpg', description: 'Exterior de casa contenedor' },
        { src: 'gallery3.jpg', description: 'Área de estar en contenedor' },
    ];

    function openGalleryModal(index) {
        currentGalleryImage = index;
        updateGalleryModal();
        galleryModal.classList.remove('hidden');
    }

    function updateGalleryModal() {
        galleryModalSlider.innerHTML = `<img src="${galleryImages[currentGalleryImage].src}" alt="Gallery image" class="w-full h-64 object-cover">`;
        galleryModalDescription.textContent = galleryImages[currentGalleryImage].description;
    }

    closeGalleryModal.addEventListener('click', () => {
        galleryModal.classList.add('hidden');
    });

    galleryModalPrev.addEventListener('click', () => {
        currentGalleryImage = (currentGalleryImage - 1 + galleryImages.length) % galleryImages.length;
        updateGalleryModal();
    });

    galleryModalNext.addEventListener('click', () => {
        currentGalleryImage = (currentGalleryImage + 1) % galleryImages.length;
        updateGalleryModal();
    });

    // Add click event listeners to gallery images
    document.querySelectorAll('.gallery-image').forEach((img, index) => {
        img.addEventListener('click', () => openGalleryModal(index));
    });

    // Project modal
    const projectModal = document.getElementById('project-modal');
    const closeProjectModal = document.getElementById('close-project-modal');
    const projectModalSlider = document.getElementById('project-modal-slider');
    const projectModalDescription = document.getElementById('project-modal-description');
    const projectModalPrev = document.getElementById('project-modal-prev');
    const projectModalNext = document.getElementById('project-modal-next');

    let currentProjectImage = 0;
    const projectImages = [
        { src: 'project1.jpg', description: 'Proyecto 1: Casa contenedor de lujo' },
        { src: 'project2.jpg', description: 'Proyecto 2: Oficina modular' },
        { src: 'project3.jpg', description: 'Proyecto 3: Complejo residencial' },
    ];

    function openProjectModal(index) {
        currentProjectImage = index;
        updateProjectModal();
        projectModal.classList.remove('hidden');
    }

    function updateProjectModal() {
        projectModalSlider.innerHTML = `<img src="${projectImages[currentProjectImage].src}" alt="Project image" class="w-full h-64 object-cover">`;
        projectModalDescription.textContent = projectImages[currentProjectImage].description;
    }

    closeProjectModal.addEventListener('click', () => {
        projectModal.classList.add('hidden');
    });

    projectModalPrev.addEventListener('click', () => {
        currentProjectImage = (currentProjectImage - 1 + projectImages.length) % projectImages.length;
        updateProjectModal();
    });

    projectModalNext.addEventListener('click', () => {
        currentProjectImage = (currentProjectImage + 1) % projectImages.length;
        updateProjectModal();
    });

    // Add click event listeners to project cards
    document.querySelectorAll('#proyectos-slider .bg-white').forEach((card, index) => {
        card.querySelector('button').addEventListener('click', () => openProjectModal(index));
    });
});