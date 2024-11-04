document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    const content = document.body;

    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.display = 'none';
            content.style.opacity = '1';
        }, 500);
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
    const heroImages = heroSlider.querySelectorAll('img');
    let currentHeroImage = 0;

    function changeHeroImage() {
        heroImages[currentHeroImage].style.opacity = '0';
        currentHeroImage = (currentHeroImage + 1) % heroImages.length;
        heroImages[currentHeroImage].style.opacity = '1';
    }

    setInterval(changeHeroImage, 5000);

    // Projects slider
    const projectsSlider = document.getElementById('proyectos-slider');
    const projects = [
        { title: 'Proyecto 1', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80', description: 'Descripción del Proyecto 1' },
        { title: 'Proyecto 2', image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', description: 'Descripción del Proyecto 2' },
        { title: 'Proyecto 3', image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', description: 'Descripción del Proyecto 3' },
        { title: 'Proyecto 4', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80', description: 'Descripción del Proyecto 4' },
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
        { name: 'Juan Pérez', text: 'Excelente servicio y calidad en la construcción de mi casa contenedor.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
        { name: 'María González', text: 'Conte House superó mis expectativas. Recomiendo sus servicios al 100%.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
        { name: 'Carlos Rodríguez', text: 'Profesionales en todo sentido. Mi oficina quedó perfecta.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' },
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
    const tipologiaModal = document.getElementById('tipologia-modal');
    const closeTipologiaModal = document.getElementById('close-tipologia-modal');
    const tipologiaModalContent = document.getElementById('tipologia-modal-content');
    const viewMoreButtons = document.querySelectorAll('.view-more');

    const tipologias = {
        'house-premium': {
            title: 'House Premium 60m²',
            description: 'Espacioso y lujoso, perfecto para familias que buscan comodidad y estilo.',
            features: ['2 dormitorios', 'Cocina integrada', 'Sala de estar amplia', 'Baño completo'],
            images: [
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
                'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80'
            ]
        },
        'house-luxury': {
            title: 'House Luxury 100m²',
            description: 'La máxima expresión del lujo y el espacio en construcción modular.',
            features: ['3 dormitorios', 'Cocina gourmet', 'Sala de estar y comedor', 'Terraza privada'],
            images: [
                'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80'
            ]
        },
        'house-large': {
            title: 'House Large 45m²',
            description: 'Amplio y confortable, ideal para parejas o pequeñas familias.',
            features: ['1 dormitorio', 'Cocina integrada', 'Sala de estar', 'Baño completo'],
            images: [
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
                'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
            ]
        },
        'house-classic': {
            title: 'House Classic 30m²',
            description: 'Compacto y funcional, perfecto para solteros o parejas.',
            features: ['1 dormitorio', 'Cocina americana', 'Área de estar', 'Baño completo'],
            images: [
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
                'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
            ]
        },
        'studio-15': {
            title: 'Studio 15m²',
            description: 'Eficiente y moderno, ideal para espacios de trabajo o estudios.',
            features: ['Área multifuncional', 'Kitchenette', 'Baño compacto'],
            images: [
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
                'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
                'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            ]
        },
        'studio-30': {
            title: 'Studio 30m²',
            description: 'Amplio y versátil, perfecto para oficinas o espacios creativos.',
            features: ['Área de trabajo', 'Sala de reuniones', 'Kitchenette', 'Baño completo'],
            images: [
                'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
                'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            ]
        }
    };

    function openTipologiaModal(tipologia) {
        const data = tipologias[tipologia];
        tipologiaModalContent.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${data.title}</h2>
            <div class="mb-4">
                <img src="${data.images[0]}" alt="${data.title}" class="w-full h-64 object-cover rounded-lg">
            </div>
            <p class="mb-4">${data.description}</p>
            <h3 class="text-xl font-semibold mb-2">Características:</h3>
            <ul class="list-disc list-inside mb-4">
                ${data.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <div class="grid grid-cols-2 gap-4">
                ${data.images.map(image => `
                    <img src="${image}" alt="${data.title}" class="w-full h-32 object-cover rounded-lg cursor-pointer gallery-image">
                `).join('')}
            </div>
        `;
        tipologiaModal.classList.remove('hidden');

        // Add click event to gallery images
        const galleryImages = tipologiaModalContent.querySelectorAll('.gallery-image');
        galleryImages.forEach(img => {
            img.addEventListener('click', () => openGalleryModal(data.images, data.title));
        });
    }

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tipologia = button.dataset.tipologia;
            openTipologiaModal(tipologia);
        });
    });

    closeTipologiaModal.addEventListener('click', () => {
        tipologiaModal.classList.add('hidden');
    });

    // Close modal when clicking outside
    tipologiaModal.addEventListener('click', (e) => {
        if (e.target === tipologiaModal) {
            tipologiaModal.classList.add('hidden');
        }
    });

    // Gallery modal
    const galleryModal = document.getElementById('gallery-modal');
    const galleryModalSlider = document.getElementById('gallery-modal-slider');
    const galleryModalDescription = document.getElementById('gallery-modal-description');
    const closeGalleryModal = document.getElementById('close-gallery-modal');
    const galleryModalPrev = document.getElementById('gallery-modal-prev');
    const galleryModalNext = document.getElementById('gallery-modal-next');

    let currentImageIndex = 0;
    let currentImages = [];

    function openGalleryModal(images, title) {
        currentImages = images;
        currentImageIndex = 0;
        updateGalleryModal();
        galleryModalDescription.textContent = title;
        galleryModal.classList.remove('hidden');
    }

    function updateGalleryModal() {
        galleryModalSlider.innerHTML = `
            <img src="${currentImages[currentImageIndex]}" alt="Gallery image" class="w-full h-64 object-cover rounded-lg">
        `;
    }

    galleryModalPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        updateGalleryModal();
    });

    galleryModalNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        updateGalleryModal();
    });

    closeGalleryModal.addEventListener('click', () => {
        galleryModal.classList.add('hidden');
    });

    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.add('hidden');
        }
    });

    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('svg');
            
            // Toggle the active class on the question
            question.classList.toggle('active');
            
            // Toggle the visibility of the answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.classList.add('hidden');
                icon.classList.remove('rotate-180');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });
});