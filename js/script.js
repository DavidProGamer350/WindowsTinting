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
        nav_tipos: "Tipos",
        nav_galeria: "Galería",
        nav_contacto: "Contacto",
        hero_subtitle: "Protección, estilo y confort en un solo servicio",
        hero_description: "Protección UV del 99%, protege tu interior y mejora la apariencia de tu vehículo desde el primer día.",
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
        vehicle_clasico: "Clásico",
        tipos_title: "Tipos de Polarizado",
        tipos_subtitle: "Conoce las mejores opciones para tu vehículo",
        tipos_description: "Elige el tipo de polarizado ideal según tus necesidades y presupuesto. Calidad profesional garantizada.",
        tipos_cta: "Solicitar Cotización",
        tipos_cards_title: "Nuestros Tipos de Polarizado",
        tipos_cards_subtitle: "Tecnología de vanguardia para tu comodidad",
        tipo_ultra_ceramic: "Ultra Ceramic",
        tipo_ceramic: "Ceramic",
        tipo_standard: "Standard",
        tipo_premium: "Premium",
        tipo_popular: "Popular",
        tipo_economic: "Economic",
        tipo_cta: "Cotizar",
        price_ultra_ceramic: "Desde $350",
        price_ceramic: "Desde $220",
        price_standard: "Desde $160",
        tipo_ultra_ceramic_desc: "La mejor tecnología en polarizado. Nanopartículas cerámicas de última generación con máximo rendimiento.",
        tipo_ceramic_desc: "Tecnología cerámica de excelente calidad con gran relación precio-rendimiento.",
        tipo_standard_desc: "Opción económica con buena calidad para quienes buscan protección básica.",
        tipo_uv_99: "99% Protección UV",
        tipo_durabilidad_15: "15 años de durabilidad",
        tipo_durabilidad_10: "10 años de durabilidad",
        tipo_durabilidad_2: "2 años de durabilidad",
        tipo_laterales: "Solo laterales y cristal atrás",
        tipo_precio_varia: "Precio varía según modelo",
        garantia_title: "🛡️ GARANTÍA INCLUIDA 🛡️",
        garantia_subtitle: "Tu tranquilidad es nuestra prioridad",
        garantia_1: "<strong>Ultra Ceramic: 15 años</strong> | Ceramic: 10 años | Standard: 2 años",
        garantia_2: "No <strong>formará</strong> burbujas",
        garantia_3: "Protección UV <strong>99%</strong>",
        garantia_4: "Instalación <strong>profesional</strong>",
        garantia_note: "*La garantía cubre defectos de fabricación y despegue premature de la película.",
        tipos_cta_title: "¿Aún tienes dudas?",
        tipos_cta_desc: "Contáctanos y te asesoramos para elegir el mejor polarizado para tu vehículo.",
        tipos_whatsapp: "Chatear por WhatsApp",
        nav_faq: "FAQ",
        faq_title: "Preguntas Frecuentes",
        faq_subtitle: "Todo lo que necesitas saber sobre polarizado",
        faq_1_question: "¿Cuánto dura el polarizado?",
        faq_1_answer: "Entre 3 y 10 años dependiendo del tipo de película seleccionada y los cuidados posteriores. El polarizado Nano Cerámico tiene la mayor durabilidad.",
        faq_2_question: "¿Se puede mojar después de instalado?",
        faq_2_answer: "Sí, pero recomendamos esperar 48 horas después de la instalación para exponerlo al agua. Esto permite que el adhesivo cure correctamente.",
        faq_3_question: "¿Es legal el polarizado en Florida?",
        faq_3_answer: "Sí, en Florida es legal siempre y cuando el polarizado permita pasar al menos el 28% de luz en las ventanas laterales del conductor y acompañante. Nosotros instalamos cumpliendo todas las regulaciones.",
        faq_4_question: "¿El polarizado interfiere con dispositivos electrónicos?",
        faq_4_answer: "Sí, algunos tipos de polarizado pueden interferir con señales de GPS, radio y teléfonos. Sin embargo, el polarizado Nano Cerámico que ofrecemos NO interfere con ningún dispositivo electrónico.",
        faq_5_question: "¿Cómo debo cuidar mi polarizado?",
        faq_5_answer: "Evita limpiar las ventanas en los primeros 5 días. Después, usa un limpiador suave sin amoníaco y un paño de microfibra. No uses productos abrasivos.",
        faq_6_question: "¿Cuánto tiempo toma la instalación?",
        faq_6_answer: "La instalación completa de un vehículo toma entre 2 a 4 horas dependiendo del tipo de película y el número de ventanas a polarizar.",
        faq_7_question: "¿El polarizado protege contra rayos UV?",
        faq_7_answer: "Sí, todos nuestros tipos de polarizado bloquean hasta el 99% de los rayos UV, protegiendo tu piel y el interior del vehículo del envejecimiento prematuro.",
        faq_8_question: "¿Puedo instalar polarizado yo mismo?",
        faq_8_answer: "No lo recomendamos. Una instalación profesional garantiza un acabado sin burbujas, duradera y sin defectos. Nuestra garantía solo cubre instalaciones profesionales.",
        why_title: "¿Por Qué Elegirnos?",
        why_subtitle: "Tu satisfacción es nuestra prioridad",
        why_1_title: "Instalación Profesional",
        why_1_desc: "Técnicos certificados con años de experiencia garantizando un acabado perfecto.",
        why_2_title: "Materiales de Alta Calidad",
        why_2_desc: "Solo usamos películas premium garantizadas para máxima durabilidad y rendimiento.",
        why_3_title: "Garantía en Todos los Trabajos",
        why_3_desc: "5 años de garantía en instalaciones para tu total tranquilidad.",
        why_4_title: "Servicio Rápido",
        why_4_desc: "Instalación en el mismo día para que puedas disfrutar de tu vehículo cuanto antes.",
        why_5_title: "Atención Personalizada",
        why_5_desc: "Te asesoramos para elegir el polarizado ideal según tus necesidades y presupuesto.",
        why_6_title: "Clientes Satisfechos",
        why_6_desc: "Más de 500 vehículos polarizados con un 98% de clientes satisfechos.",
        faq_cta_title: "¿Aún tienes preguntas?",
        faq_cta_desc: "Contáctanos y te responderemos lo antes posible.",
        faq_whatsapp: "Chatear por WhatsApp"
    },
    en: {
        nav_inicio: "Home",
        nav_servicios: "Services",
        nav_tipos: "Types",
        nav_galeria: "Gallery",
        nav_contacto: "Contact",
        hero_subtitle: "Protection, style and comfort in one service",
        hero_description: "99% UV protection, protect your interior and improve your vehicle's appearance from day one.",
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
        vehicle_clasico: "Classic",
        tipos_title: "Types of Tinting",
        tipos_subtitle: "Discover the best options for your vehicle",
        tipos_description: "Choose the ideal tint type according to your needs and budget. Guaranteed professional quality.",
        tipos_cta: "Request Quote",
        tipos_cards_title: "Our Types of Tinting",
        tipos_cards_subtitle: "Cutting-edge technology for your comfort",
        tipo_ultra_ceramic: "Ultra Ceramic",
        tipo_ceramic: "Ceramic",
        tipo_standard: "Standard",
        tipo_premium: "Premium",
        tipo_popular: "Popular",
        tipo_economic: "Economic",
        tipo_cta: "Quote",
        price_ultra_ceramic: "From $350",
        price_ceramic: "From $220",
        price_standard: "From $160",
        tipo_ultra_ceramic_desc: "The best technology in tinting. Latest generation ceramic nanoparticles with maximum performance.",
        tipo_ceramic_desc: "Excellent quality ceramic technology with great price-performance ratio.",
        tipo_standard_desc: "Economical option with good quality for those seeking basic protection.",
        tipo_uv_99: "99% UV Protection",
        tipo_durabilidad_15: "15 years durability",
        tipo_durabilidad_10: "10 years durability",
        tipo_durabilidad_2: "2 years durability",
        tipo_laterales: "Side windows and rear glass only",
        tipo_precio_varia: "Price varies by model",
        garantia_title: "🛡️ WARRANTY INCLUDED 🛡️",
        garantia_subtitle: "Your peace of mind is our priority",
        garantia_1: "<strong>Ultra Ceramic: 15 years</strong> | Ceramic: 10 years | Standard: 2 years",
        garantia_2: "Will <strong>not</strong> bubble",
        garantia_3: "UV Protection <strong>99%</strong>",
        garantia_4: "<strong>Professional</strong> installation",
        garantia_note: "*Warranty covers manufacturing defects and premature film detachment.",
        tipos_cta_title: "Still have questions?",
        tipos_cta_desc: "Contact us and we'll advise you to choose the best tinting for your vehicle.",
        tipos_whatsapp: "Chat on WhatsApp",
        nav_faq: "FAQ",
        faq_title: "Frequently Asked Questions",
        faq_subtitle: "Everything you need to know about window tinting",
        faq_1_question: "How long does window tinting last?",
        faq_1_answer: "Between 3 and 10 years depending on the type of film selected and aftercare. Nano Ceramic tinting has the highest durability.",
        faq_2_question: "Can it get wet after installation?",
        faq_2_answer: "Yes, but we recommend waiting 48 hours after installation before exposing it to water. This allows the adhesive to cure properly.",
        faq_3_question: "Is window tinting legal in Florida?",
        faq_3_answer: "Yes, in Florida it is legal as long as the tint allows at least 28% of light to pass through the side windows of the driver and passenger. We install in compliance with all regulations.",
        faq_4_question: "Does tinting interfere with electronic devices?",
        faq_4_answer: "Yes, some types of tinting can interfere with GPS, radio and phone signals. However, the Nano Ceramic tinting we offer does NOT interfere with any electronic devices.",
        faq_5_question: "How should I care for my tint?",
        faq_5_answer: "Avoid cleaning the windows for the first 5 days. After that, use a mild ammonia-free cleaner and a microfiber cloth. Do not use abrasive products.",
        faq_6_question: "How long does installation take?",
        faq_6_answer: "Complete vehicle installation takes between 2 to 4 hours depending on the type of film and number of windows to be tinted.",
        faq_7_question: "Does tinting protect against UV rays?",
        faq_7_answer: "Yes, all our types of tinting block up to 99% of UV rays, protecting your skin and the vehicle interior from premature aging.",
        faq_8_question: "Can I install tinting myself?",
        faq_8_answer: "We don't recommend it. Professional installation ensures a bubble-free, durable, and defect-free finish. Our warranty only covers professional installations.",
        why_title: "Why Choose Us?",
        why_subtitle: "Your satisfaction is our priority",
        why_1_title: "Professional Installation",
        why_1_desc: "Certified technicians with years of experience guaranteeing a perfect finish.",
        why_2_title: "High-Quality Materials",
        why_2_desc: "We only use premium films guaranteed for maximum durability and performance.",
        why_3_title: "Warranty on All Work",
        why_3_desc: "5-year warranty on installations for your total peace of mind.",
        why_4_title: "Fast Service",
        why_4_desc: "Same-day installation so you can enjoy your vehicle as soon as possible.",
        why_5_title: "Personalized Attention",
        why_5_desc: "We advise you to choose the ideal tinting according to your needs and budget.",
        why_6_title: "Satisfied Customers",
        why_6_desc: "More than 500 vehicles tinted with 98% satisfied customers.",
        faq_cta_title: "Still have questions?",
        faq_cta_desc: "Contact us and we'll respond as soon as possible.",
        faq_whatsapp: "Chat on WhatsApp"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    if (currentLang === 'en') {
        langToggle.classList.add('active');
    }
    applyTranslations();

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
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
