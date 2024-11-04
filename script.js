document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    closeMenu.addEventListener('click', () =>  {
        mobileMenu.classList.add('hidden');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Top Banner Messages
    const bannerMessages = document.querySelectorAll('.banner-message');
    let currentMessageIndex = 0;

    function showNextMessage() {
        bannerMessages.forEach((message, index) => {
            if (index === currentMessageIndex) {
                message.classList.add('active');
            } else {
                message.classList.remove('active');
            }
        });
        currentMessageIndex = (currentMessageIndex + 1) % bannerMessages.length;
    }

    showNextMessage(); // Show first message immediately
    setInterval(showNextMessage, 5000); // Change message every 5 seconds

    // Hero Image Slider
    const heroImages = document.querySelectorAll('#hero-slider img');
    let currentImageIndex = 0;

    function showNextImage() {
        heroImages[currentImageIndex].style.opacity = '0';
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].style.opacity = '1';
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds

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

    // Tipología Modal
    const modal = document.getElementById('tipologia-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const viewMoreButtons = document.querySelectorAll('.view-more');

    const tipologiaDetails = {
        'house-premium': {
            title: 'House Premium 60m²',
            description: 'Nuestra House Premium de 60m² es la elección perfecta para familias que buscan espacio y comodidad sin comprometer el estilo. Con un diseño moderno y funcional, esta casa ofrece amplias áreas de estar, cocina integrada, dos dormitorios espaciosos y un baño completo. Características destacadas incluyen grandes ventanales para maximizar la luz natural, acabados de alta calidad y un sistema de climatización eficiente.',
            features: ['60m² de espacio habitable', 'Dos dormitorios', 'Sala de estar amplia', 'Cocina integrada', 'Baño completo', 'Grandes ventanales', 'Sistema de climatización eficiente'],
            images: [
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
                'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
            ]
        },
        'house-luxury': {
            title: 'House Luxury 100m²',
            description: 'La House Luxury de 100m² es nuestra oferta más exclusiva, diseñada para aquellos que buscan lo mejor en espacio y confort. Esta casa contenedor de lujo ofrece un amplio salón, cocina gourmet, tres dormitorios, dos baños completos y un estudio o área de trabajo. Con acabados de primera calidad, tecnología domótica integrada y un diseño que maximiza la eficiencia energética, la House Luxury es la culminación de la vida moderna en un contenedor.',
            features: ['100m² de espacio habitable', 'Tres dormitorios', 'Dos baños completos', 'Salón amplio', 'Cocina gourmet', 'Estudio/área de trabajo', 'Domótica integrada', 'Diseño de eficiencia energética'],
            images: [
                'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80'
            ]
        },
        'house-large': {
            title: 'House Large 45m²',
            description: 'La House Large de 45m² ofrece un equilibrio perfecto entre espacio y funcionalidad. Ideal para parejas o pequeñas familias, esta casa contenedor cuenta con un diseño inteligente que maximiza cada metro cuadrado. Incluye un dormitorio principal, un área de estar y comedor integrada, cocina completa y un baño moderno. Con amplios ventanales y un diseño que prioriza la luz natural, la House Large crea una sensación de amplitud y conexión con el exterior.',
            features: ['45m² de espacio habitable', 'Un dormitorio principal', 'Área de estar y comedor integrada', 'Cocina completa', 'Baño moderno', 'Amplios ventanales', 'Diseño que maximiza la luz natural'],
            images: [
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
            ]
        },
        'house-classic': {
            title: 'House Classic 30m²',
            description: 'La House Classic de 30m² es nuestra solución compacta y eficiente, perfecta para solteros o parejas que buscan un espacio funcional sin sacrificar estilo. A pesar de su tamaño reducido, esta casa contenedor ofrece todas las comodidades necesarias para una vida confortable. Cuenta con un área de estar multifuncional, una cocina eficiente, un dormitorio acogedor y un baño completo. El diseño inteligente y los acabados modernos hacen de la House Classic una opción atractiva para aquellos que valoran la simplicidad y la eficiencia.',
            features: ['30m² de espacio habitable', 'Área de estar multifuncional', 'Cocina eficiente', 'Dormitorio acogedor', 'Baño completo', 'Diseño inteligente para maximizar el espacio', 'Acabados modernos'],
            images: [
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80',
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            ]
        },
        'studio-15': {
            title: 'Studio 15m²',
            description: 'El Studio 15m² es nuestra solución más compacta, diseñada para maximizar la eficiencia en espacios reducidos. Perfecto para oficinas personales, estudios de arte o espacios de trabajo remoto, este estudio contenedor ofrece un ambiente versátil y moderno. A pesar de su tamaño, incluye un área de trabajo principal, un pequeño rincón para descanso o reuniones, y un baño compacto. Con un diseño que prioriza la funcionalidad y el estilo, el Studio 15m² es ideal para profesionales creativos o emprendedores que buscan un espacio de trabajo inspirador.',
            features: ['15m² de espacio útil', 'Área de trabajo principal', 'Rincón para descanso o reuniones', 'Baño compacto', 'Diseño versátil y moderno', 'Iluminación optimizada', 'Soluciones de almacenamiento inteligentes'],
            images: [
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80',
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
            ]
        },
        'studio-30': {
            title: 'Studio 30m²',
            description: 'El Studio 30m² ofrece un espacio amplio y versátil, ideal para oficinas, estudios creativos o espacios de coworking. Con el doble de espacio que nuestro Studio 15m², esta unidad permite una mayor flexibilidad en el diseño y uso del espacio. Incluye un área de trabajo principal espaciosa, una zona de reuniones o colaboración, un pequeño kitchenette para mayor comodidad, y un baño completo. El Studio 30m² está diseñado para fomentar la productividad y la creatividad, con abundante luz natural y un diseño interior que se puede personalizar según las necesidades específicas del cliente.',
            features: ['30m² de espacio útil', 'Área de trabajo principal espaciosa', 'Zona de reuniones o colaboración', 'Kitchenette', 'Baño completo', 'Diseño flexible y personalizable', 'Abundante luz natural', 'Opciones de almacenamiento amplias'],
            images: [
                'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
                'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
                'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80'
            ]
        }
    };

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tipologia = this.dataset.tipologia;
            const details = tipologiaDetails[tipologia];
            
            modalTitle.textContent = details.title;
            
            let content = `
                <div class="mb-6">
                    <div class="flex overflow-x-auto space-x-4 mb-4">
                        ${details.images.map(img => `
                            <img src="${img}" alt="${details.title}" class="w-64 h-48 object-cover rounded">
                        `).join('')}
                    </div>
                    <p class="text-secondary mb-4">${details.description}</p>
                    <h3 class="text-xl font-bold mb-2 text-secondary">Características:</h3>
                    <ul class="list-disc list-inside text-secondary">
                        ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <button class="bg-primary text-white hover:bg-primary-dark font-bold py-2 px-4 rounded transition duration-300">
                    Solicitar Cotización
                </button>
            `;
            
            modalContent.innerHTML = content;
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Instagram Reels
    const reelsSlider = document.getElementById('reels-slider');
const reelsScrollLeft = document.getElementById('reels-scroll-left');
const reelsScrollRight = document.getElementById('reels-scroll-right');

const reels = [
    { id: 1, url: 'https://www.instagram.com/reel/CwgTtA-MaKj/' },
    { id: 2, url: 'https://www.instagram.com/reel/Cv9z6dbupXe/' },
    { id: 3, url: 'https://www.instagram.com/reel/Cu0LeCFxiq-/' },
    { id: 4, url: 'https://www.instagram.com/reel/Cs9jCU6LS5n/' },
];

reels.forEach(reel => {
    const reelElement = document.createElement('div');
    reelElement.className = 'flex-shrink-0 w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden';
    reelElement.innerHTML = `
        <blockquote class="instagram-media" data-instgrm-permalink="${reel.url}" data-instgrm-version="14"></blockquote>
    `;
    reelsSlider.appendChild(reelElement);
});

// Cargar script de Instagram para procesar incrustaciones
if (typeof instgrm === 'undefined') {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
}

// Configuración de desplazamiento
reelsScrollLeft.addEventListener('click', () => {
    reelsSlider.scrollBy({ left: -300, behavior: 'smooth' });
});

reelsScrollRight.addEventListener('click', () => {
    reelsSlider.scrollBy({ left: 300, behavior: 'smooth' });
});

    // Proyectos Realizados
    const proyectosSlider = document.getElementById('proyectos-slider');
    const scrollLeft = document.getElementById('scroll-left');
    const scrollRight = document.getElementById('scroll-right');

    const proyectos = [
        { 
            title: 'Casa de Playa', 
            description: 'Proyecto de casa contenedor frente al mar', 
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80'
        },
        { 
            title: 'Oficina Moderna', 
            description: 'Espacio de trabajo innovador en contenedor', 
            image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        { 
            title: 'Café Contenedor', 
            description: 'Local comercial único y atractivo', 
            image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
        },
        { 
            title: 'Casa de Montaña', 
            description: 'Refugio acogedor en entorno natural', 
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1765&q=80'
        },
        { 
            title: 'Estudio de Arte', 
            description: 'Espacio creativo para artistas', 
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80'
        },
        { 
            title: 'Casa Familiar', 
            description: 'Hogar espacioso y confortable', 
            image: 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
        }
    ];

    proyectos.forEach(proyecto => {
        const proyectoElement = document.createElement('div');
        proyectoElement.className = 'flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden';
        proyectoElement.innerHTML = `
            <img src="${proyecto.image}" alt="${proyecto.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold mb-2 text-secondary">${proyecto.title}</h3>
                <p class="text-secondary">${proyecto.description}</p>
            </div>
        `;
        proyectosSlider.appendChild(proyectoElement);
    });

    scrollLeft.addEventListener('click', () => {
        proyectosSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    scrollRight.addEventListener('click', () => {
        proyectosSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Testimonios
    const testimoniosSlider = document.getElementById('testimonios-slider').querySelector('.flex');
    const testimoniosScrollLeft = document.getElementById('testimonios-scroll-left');
    const testimoniosScrollRight = document.getElementById('testimonios-scroll-right');

    const testimonios = [
        { 
            name: 'Juan Pérez', 
            text: 'Increíble experiencia con Conte House. Mi nueva casa contenedor supera todas mis expectativas.', 
            image: 'https://randomuser.me/api/portraits/men/1.jpg' 
        },
        { 
            name: 'María González', 
            text: 'El equipo de Conte House hizo realidad mi sueño de tener una oficina moderna y sostenible.', 
            image: 'https://randomuser.me/api/portraits/women/2.jpg' 
        },
        { 
            name: 'Carlos Rodríguez', 
            text: 'La calidad y el diseño de mi casa contenedor son excepcionales. Totalmente recomendado.', 
            image: 'https://randomuser.me/api/portraits/men/3.jpg' 
        },
        { 
            name: 'Ana Martínez', 
            text: 'Conte House transformó un simple contenedor en un hermoso y funcional espacio de trabajo.', 
            image: 'https://randomuser.me/api/portraits/women/4.jpg' 
        },
        { 
            name: 'Luis Sánchez', 
            text: 'Profesionalismo y creatividad en cada etapa del proyecto. Estoy encantado con el resultado.', 
            image: 'https://randomuser.me/api/portraits/men/5.jpg' 
        }
    ];

    testimonios.forEach(testimonio => {
        const testimonioElement = document.createElement('div');
        testimonioElement.className = 'flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6';
        testimonioElement.innerHTML = `
            <div class="flex items-center mb-4">
                <img src="${testimonio.image}" alt="${testimonio.name}" class="w-12 h-12 rounded-full mr-4">
                <h3 class="text-lg font-semibold text-secondary">${testimonio.name}</h3>
            </div>
            <p class="text-secondary">"${testimonio.text}"</p>
        `;
        testimoniosSlider.appendChild(testimonioElement);
    });

    testimoniosScrollLeft.addEventListener('click', () => {
        testimoniosSlider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    testimoniosScrollRight.addEventListener('click', () => {
        testimoniosSlider.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const tipologias = Array.from(document.getElementById('tipologias').selectedOptions).map(option => option.text);
        const message = document.getElementById('message').value;

        const whatsappMessage = `Hola, mi nombre es ${name}. Estoy interesado en las siguientes tipologías: ${tipologias.join(', ')}. Mi email es ${email} y mi teléfono es ${phone}. Mensaje adicional: ${message}`;
        const whatsappUrl = `https://wa.me/5493512363777?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, '_blank');
    });
});