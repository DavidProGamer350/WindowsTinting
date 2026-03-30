document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initComparisonSlider();
    initAnimations();
    initSmoothScroll();
    initLightbox();
    initLanguageToggle();
});

const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_servicios: "Servicios",
        nav_galeria: "Galería",
        nav_contacto: "Contacto",
        hero_subtitle: "Protección, estilo y confort en un solo servicio",
        hero_description: "Transformamos tu vehículo con polarizado profesional. Protección UV, reducción de calor y máxima privacidad.",
        hero_cta: "Cotizar Ahora",
        hero_cta2: "Ver Servicios",
        servicios_title: "Nuestros Servicios",
        servicios_subtitle: "Calidad profesional en cada aplicación",
        servicio_vehicular: "Polarizado Vehicular",
        servicio_vehicular_desc: "Protección completa para tu vehículo. Bloquea hasta 99% de rayos UV, reduce el calor interior y mejora la privacidad.",
        servicio_residencial: "Polarizado Residencial",
        servicio_residencial_desc: "Transforma tu hogar. Disminuye el consumo de energía, protege tus muebles y disfruta de mayor confort.",
        servicio_comercial: "Polarizado Comercial",
        servicio_comercial_desc: "Soluciones empresariales profesionales. Mejora la eficiencia energética y crea ambientes de trabajo cómodos.",
        feature_uv: "Protección UV",
        feature_calor: "Reducción de calor",
        feature_privacidad: "Privacidad mejorada",
        feature_apariencia: "Apariencia elegante",
        feature_calor_interior: "Reducción de calor interior",
        feature_luz_solar: "Control de entrada de luz solar",
        feature_privacidad2: "Mayor privacidad",
        feature_uv_proteccion: "Protección contra rayos UV",
        feature_eficiencia: "Mejora en eficiencia energética",
        feature_energetica: "Eficiencia energética",
        feature_imagen: "Imagen profesional",
        feature_confidencial: "Confidencialidad",
        feature_instalacion: "Instalación rápida",
        comparador_title: "Ver la Diferencia",
        comparador_subtitle: "Arrastra el slider para comparar antes y después",
        comparador_before: "SIN Polarizado",
        comparador_after: "CON Polarizado",
        galeria_title: "Galería de Trabajos",
        galeria_subtitle: "Conoce algunos de nuestros proyectos",
        about_title: "Sobre Nosotros",
        about_desc1: "Con años de experiencia en el sector, <strong>Windows Tinting JD</strong> se ha consolidado como líder en servicios de polarizado profesional.",
        about_desc2: "Nuestro compromiso es con la calidad, la satisfacción del cliente y la excelencia en cada trabajo que realizamos.",
        about_vehiculos: "Vehículos atendidos",
        about_satisfechos: "Clientes satisfechos",
        about_experiencia: "Años de experiencia",
        contacto_title: "Contáctanos",
        contacto_subtitle: "Estamos listos para atenderte",
        contacto_whatsapp: "WhatsApp",
        contacto_whatsapp_desc: "Chatea con nosotros",
        contacto_whatsapp_cta: "Enviar mensaje",
        contacto_telefono: "Teléfono",
        contacto_telefono_desc: "Llamadas directas",
        contacto_ubicacion: "Ubicación",
        contacto_ubicacion_desc: "Visítanos en nuestro taller",
        cta_title: "¿Listo para transformar tu vehículo?",
        cta_desc: "Contáctanos hoy mismo y obtén una cotización sin compromiso",
        cta_button: "Cotizar Ahora",
        footer_brand: "Profesionalismo y calidad en cada trabajo",
        footer_links: "Enlaces rápidos",
        footer_social: "Síguenos",
        footer_copyright: "Todos los derechos reservados.",
        vehicle_sedan: "Sedán Ejecutivo",
        vehicle_suv: "SUV Premium",
        vehicle_deportivo: "Deportivo",
        vehicle_camioneta: "Camioneta Familiar",
        vehicle_luxury: "Luxury",
        vehicle_clasico: "Clásico"
    },
    en: {
        nav_inicio: "Home",
        nav_servicios: "Services",
        nav_galeria: "Gallery",
        nav_contacto: "Contact",
        hero_subtitle: "Protection, style and comfort in one service",
        hero_description: "We transform your vehicle with professional tinting. UV protection, heat reduction and maximum privacy.",
        hero_cta: "Get Quote",
        hero_cta2: "View Services",
        servicios_title: "Our Services",
        servicios_subtitle: "Professional quality in every application",
        servicio_vehicular: "Vehicle Tinting",
        servicio_vehicular_desc: "Complete protection for your vehicle. Blocks up to 99% of UV rays, reduces interior heat and improves privacy.",
        servicio_residencial: "Residential Tinting",
        servicio_residencial_desc: "Transform your home. Reduces energy consumption, protects your furniture and enjoys greater comfort.",
        servicio_comercial: "Commercial Tinting",
        servicio_comercial_desc: "Professional business solutions. Improves energy efficiency and creates comfortable work environments.",
        feature_uv: "UV Protection",
        feature_calor: "Heat reduction",
        feature_privacidad: "Improved privacy",
        feature_apariencia: "Elegant appearance",
        feature_calor_interior: "Interior heat reduction",
        feature_luz_solar: "Solar light control",
        feature_privacidad2: "Greater privacy",
        feature_uv_proteccion: "UV ray protection",
        feature_eficiencia: "Energy efficiency improvement",
        feature_energetica: "Energy efficiency",
        feature_imagen: "Professional image",
        feature_confidencial: "Confidentiality",
        feature_instalacion: "Quick installation",
        comparador_title: "See the Difference",
        comparador_subtitle: "Drag the slider to compare before and after",
        comparador_before: "WITHOUT Tint",
        comparador_after: "WITH Tint",
        galeria_title: "Work Gallery",
        galeria_subtitle: "Check out some of our projects",
        about_title: "About Us",
        about_desc1: "With years of experience in the sector, <strong>Windows Tinting JD</strong> has established itself as a leader in professional tinting services.",
        about_desc2: "Our commitment is to quality, customer satisfaction and excellence in every job we do.",
        about_vehiculos: "Vehicles serviced",
        about_satisfechos: "Satisfied clients",
        about_experiencia: "Years of experience",
        contacto_title: "Contact Us",
        contacto_subtitle: "We're ready to serve you",
        contacto_whatsapp: "WhatsApp",
        contacto_whatsapp_desc: "Chat with us",
        contacto_whatsapp_cta: "Send message",
        contacto_telefono: "Phone",
        contacto_telefono_desc: "Direct calls",
        contacto_ubicacion: "Location",
        contacto_ubicacion_desc: "Visit our shop",
        cta_title: "Ready to transform your vehicle?",
        cta_desc: "Contact us today and get a no-obligation quote",
        cta_button: "Get Quote",
        footer_brand: "Professionalism and quality in every job",
        footer_links: "Quick links",
        footer_social: "Follow us",
        footer_copyright: "All rights reserved.",
        vehicle_sedan: "Executive Sedan",
        vehicle_suv: "Premium SUV",
        vehicle_deportivo: "Sports Car",
        vehicle_camioneta: "Family Truck",
        vehicle_luxury: "Luxury",
        vehicle_clasico: "Classic"
    }
};

let currentLang = 'es';

function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langToggle.classList.toggle('active');
        applyTranslations();
    });
}

function applyTranslations() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    document.documentElement.lang = currentLang;
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navClose = document.getElementById('navClose');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    if (navClose) {
        navClose.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function initComparisonSlider() {
    const container = document.getElementById('comparisonSlider');
    const handle = document.getElementById('comparisonHandle');
    const beforeImage = document.querySelector('.comparison-before');
    
    if (!container || !handle || !beforeImage) return;

    let isDragging = false;

    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        let percentage = ((x - rect.left) / rect.width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        
        handle.style.left = percentage + '%';
        beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }

    function startDrag(e) {
        isDragging = true;
        e.preventDefault();
    }

    function endDrag() {
        isDragging = false;
    }

    function drag(e) {
        if (!isDragging) return;
        
        const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        updateSlider(x);
    }

    handle.addEventListener('mousedown', startDrag);
    handle.addEventListener('touchstart', startDrag, { passive: false });

    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    container.addEventListener('mousemove', drag);
    container.addEventListener('touchmove', drag, { passive: false });

    container.addEventListener('click', (e) => {
        const x = e.clientX;
        updateSlider(x);
    });
}

function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox || !lightboxImg) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}
