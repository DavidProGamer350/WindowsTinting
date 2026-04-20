document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initComparisonSlider();
    initAnimations();
    initSmoothScroll();
    initLightbox();
    initLanguageToggle();
    initWeatherWidget();
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
        faq_whatsapp: "Chatear por WhatsApp",
        consejos_title: "Consejos & Blog",
        consejos_subtitle: "Consejos expertos sobre polarizado",
        nav_consejos: "Consejos",
        consejos_hero_desc: "Todo lo que necesitas saber sobre proteger tu vehículo, hogar y barco con polarizado profesional.",
        consejos_read_more: "Leer Más",
        consejos_back: "Volver a Consejos",
        consejos_vehicle: "Vehículo",
        consejos_home: "Hogar",
        consejos_boat: "Barco",
        consejos_latest_articles: "Últimos Artículos",
        consejos_articles_subtitle: "Consejos y recomendaciones de nuestros expertos",
        consejos_cta_title: "¿Listo para empezar?",
        consejos_cta_desc: "Contáctanos hoy mismo para una cotización gratis.",
        consejos_cta_button: "Obtener Cotización",
        article_meta: "Consejos de expertos para mantener tu polarizado como nuevo",
        article_cta_title: "¿Necesitas un servicio de polarizado?",
        article_cta_desc: "Contáctanos para una cotización gratis.",
        article_article_cta_button: "Obtener Cotización",
        article_mantener_title: "Cómo mantener tu polarizado",
        article_factory_title: "Polarizado vs Ventanas Polarizadas de Fábrica",
        article_hogar_title: "Beneficios del polarizado para tu hogar",
        article_barcos_title: "Polarizado para barcos: Protección UV en el agua",
        article_intro_mantener: "El polarizado es una inversión que protege el interior de tu vehículo, reduce el calor y mejora la estética. Para maximizar la vida útil de tu polarizado, sigue estos consejos esenciales de mantenimiento.",
        article_wait_cleaning: "Espera Antes de Limpiar",
        article_wait_cleaning_desc: "Después de la instalación, espera al menos 3-5 días antes de limpiar las ventanas. Esto permite que la película se cures completamente y se adhiera al vidrio. Limpiar demasiado pronto puede levantar los bordes y dañar el adhesivo.",
        article_cleaning_products: "Usa los Productos de Limpieza Correctos",
        article_cleaning_products_list: "Usa un pano suave sin pelusa o toallas de papel|Avoid ammonia-based cleaners - they can damage the film|Usa una solución de jabón suave y agua o un limpiador especial para polarizado|Nunca uses materiales abrasivos o esponjas",
        article_rolling_down: "Evita Bajar las Ventanas Muy Pronto",
        article_rolling_down_desc: "Mantén las ventanas subidas por al menos 2-3 días después de la instalación. Esto evita que la película se mueva y asegura una adhesión adecuada.",
        article_protect_damage: "Protege contra Daños",
        article_protect_damage_list: "Evita usar amuletos de cinturón de seguridad que puedan rayar la película|Ten cuidado con objetos afilados cerca de las ventanas polarizadas|Estaciona en áreas sombreadas cuando sea posible para reducir la exposición al calor",
        article_signs_replacement: "Señales de que es Hora de Cambiar",
        article_signs_replacement_desc: "Si notás burbujas, descamación, decoloración púrpura o reducción del rechazo de calor, puede ser hora de cambiar tu polarizado. Las películas de calidad pueden durar 5-10 años con el cuidado adecuado.",
        article_intro_factory: "Muchos vehículos modernos vienen con ventanas polarizadas de fábrica, pero ¿cómo se comparan con el polarizado profesional aftermarket? Veamos las diferencias.",
        article_factory_tint: "¿Qué es el Polarizado de Fábrica?",
        article_factory_tint_desc: "El polarizado de fábrica, también llamado cristal de privacidad, es una sombra oscura aplicada durante la fabricación. En realidad es el cristal teñido, no una película. Proporciona mínima rechazo de calor y ninguna protección UV.",
        article_key_differences: "Diferencias Clave",
        article_key_differences_list: "Rechazo de Calor: El polarizado profesional puede bloquear hasta 60% de calor; el polarizado de fábrica proporciona una reducción mínima de calor|Protección UV: El polarizado profesional bloquea el 99% de los rayos UV; el polarizado de fábrica ofrece poca o ninguna protección UV|Apariencia: El polarizado profesional tiene un aspecto uniforme y elegante; el polarizado de fábrica puede tener tonos inconsistentes|Durabilidad: Las películas profesionales duran 5-10 años; el polarizado de fábrica no se puede quitar ni reemplazar",
        article_double_tint: "¿Se Puede Agregar Polarizado Sobre el de Fábrica?",
        article_double_tint_desc: "¡Sí! Podés aplicar polarizado profesional sobre las ventanas polarizadas de fábrica. Esto se llama 'doblar' y puede proporcionar un rechazo de calor mejorado. Sin embargo, es importante verificar las leyes locales, ya que algunos estados tienen restricciones sobre la oscuridad total del polarizado.",
        article_benefits_aftermarket: "Beneficios del Polarizado Profesional",
        article_benefits_aftermarket_list: "Superior rechazo de calor reduce el uso del AC y el consumo de combustible|Bloquea los rayos UV dañinos que causan daño a la piel y Desvanecimiento interior|Reduce el deslumbramiento para una conducción más segura|Privacidad y seguridad mejorada|Variedad de tonos y acabados para combinar con tu estilo",
        article_factory_conclusion: "Mientras que las ventanas polarizadas de fábrica ofrecen algo de privacidad, el polarizado profesional proporciona rechazo de calor superior, protección UV y durabilidad.",
        article_intro_hogar: "El polarizado no es solo para vehículos. El polarizado residencial ofrece numerosos beneficios para los propietarios en Miami, desde ahorro de energía hasta mayor privacidad y protección.",
        article_energy_efficiency: "Eficiencia Energética",
        article_energy_efficiency_desc: "La película de ventana puede bloquear hasta el 60% del calor solar, reduciendo significativamente tus costos de enfriamiento. En el clima caluroso de Miami, esto puede traducirse en un 25-40% de ahorro en tus facturas de energía.",
        article_protect_interiors: "Protege tus Interiores",
        article_protect_interiors_list: "Bloquea el 99% de los rayos UV dañinos|Evite que los muebles, pisos y obras de arte se desvanezcan|Protege los pisos de madera de deformarse|Evita que las cortinas y telas se deterioren",
        article_increased_privacy: "Mayor Privacidad",
        article_increased_privacy_desc: "Las películas de privacidad unidireccionales te permiten ver hacia afuera mientras evitás que los extraños vean hacia adentro. Perfecto para habitaciones en planta baja y baños.",
        article_enhanced_comfort: "Confort Mejorado",
        article_enhanced_comfort_desc: "Reducí los puntos calientes en tu hogar y disfruta temperaturas consistentes. El polarizado también reduce el deslumbramiento en televisores y pantallas de computadora.",
        article_safety_security: "Seguridad",
        article_safety_security_desc: "Las películas de seguridad mantienen el vidrio junto durante los impactos, lo que dificulta que los intrusos entren. También protegen contra Vidriados durante tormentas.",
        article_types_residential: "Tipos de Película Residencial",
        article_types_residential_list: "Películas Solares: Rechazo de calor y UV|Películas de Privacidad: Visibilidad unidireccional|Películas de Seguridad: Resistencia al impacto|Películas Decorativas: Con patrones o esmeriladas",
        article_intro_barcos: "Los barcos en Miami enfrentan intensa exposición al sol y daño por sal. El polarizado es esencial para proteger tu embarcación y pasajeros del harsh marine environment.",
        article_why_tint_boat: "¿Por Qué Polarizar tu Barco?",
        article_why_tint_boat_list: "Protección UV: Bloquea el 99% de los rayos UV dañinos|Reducción de Calor: Mantiene los interiores frescos incluso bajo sol directo|Reducción de Deslumbramiento: Mejora la visibilidad y seguridad|Protege los Interiores: Evita que el tablero y tapicería se desvanezcan|Privacidad: Disfruta de momentos privados en tu barco",
        article_marine_challenges: "Desafíos Específicos Marine",
        article_marine_challenges_desc: "Los barcos enfrentan desafíos únicos que requieren películas especializadas:",
        article_marine_challenges_list: "Corrosión salina - las películas deben ser resistentes a la sal|Alta humedad - la instalación adecuada es crítica|Movimiento constante - las películas deben tener fuerte adhesión|Exposición solar extrema - se necesita mayor resistencia UV",
        article_types_boat: "Tipos de Película Marina",
        article_types_boat_list: "Películas UV Claras: Protección UV sin oscurecer|Películas Bronceadas: Aspecto marino clásico con rechazo de calor|Películas de Privacidad: Máxima privacidad para cabinas|Películas de Seguridad: Mantienen el vidrio junto en caso de impacto",
        article_considerations: "Consideraciones Importantes",
        article_considerations_list: "No todas las películas son adecuadas para uso marino|Se recomienda instalación profesional|Algunas áreas pueden tener restricciones de polarizado|El mantenimiento regular extiende la vida útil de la película",
        article_maintenance_tips: "Consejos de Mantenimiento",
        article_maintenance_tips_desc: "Limpiá tus ventanas polarizadas regularmente con agua fresca para eliminar los depósitos de sal. Usá solo jabón suave y paños suaves.",
        article_excerpt_mantener: "Aprende las mejores prácticas para mantener tu polarizado como nuevo. Evita errores comunes que pueden dañar la película.",
        article_excerpt_factory: "Descubre las diferencias clave entre el polarizado profesional y las ventanas polarizadas de fábrica. ¿Qué opción es mejor para vos?",
        article_excerpt_hogar: "Reducí costos de energía, protegé tus muebles y aumentá la privacidad. Descubrí todos los beneficios del polarizado residencial.",
        article_excerpt_barcos: "Protegé el interior de tu barco del sol intenso y el daño de la sal. Consejos esenciales para propietarios de barcos en Miami.",
        article_meta_factory: "¿Qué opción es mejor para vos?",
        article_meta_hogar: "Ahorro de energía, confort y protección para tu hogar",
        article_meta_barcos: "Protección esencial para propietarios de barcos en Miami"
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
        faq_whatsapp: "Chat on WhatsApp",
        consejos_title: "Tips & Blog",
        consejos_subtitle: "Expert tips about window tinting",
        nav_consejos: "Tips",
        consejos_hero_desc: "Everything you need to know about protecting your vehicle, home, and boat with professional tinting.",
        consejos_read_more: "Read More",
        consejos_back: "Back to Tips",
        consejos_vehicle: "Vehicle",
        consejos_home: "Home",
        consejos_boat: "Boat",
        consejos_latest_articles: "Latest Articles",
        consejos_articles_subtitle: "Tips and advice from our experts",
        consejos_cta_title: "Ready to Get Started?",
        consejos_cta_desc: "Contact us today for a free quote.",
        consejos_cta_button: "Get Quote",
        article_meta: "Expert tips to keep your tint looking new for years",
        article_cta_title: "Need a Professional Tint Service?",
        article_cta_desc: "Contact us for a free quote on window tinting for your vehicle.",
        article_article_cta_button: "Get Quote",
        article_mantener_title: "How to Maintain Your Window Tint",
        article_factory_title: "Window Tint vs Factory Polarized Windows",
        article_hogar_title: "Benefits of Window Tint for Your Home",
        article_barcos_title: "Boat Window Tinting: UV Protection on the Water",
        article_intro_mantener: "Window tinting is an investment that protects your vehicle's interior, reduces heat, and enhances aesthetics. To maximize the lifespan of your tint, follow these essential maintenance tips.",
        article_wait_cleaning: "Wait Before Cleaning",
        article_wait_cleaning_desc: "After installation, wait at least 3-5 days before cleaning your windows. This allows the film to fully cure and adhere to the glass. Cleaning too soon can lift the edges and damage the adhesive.",
        article_cleaning_products: "Use the Right Cleaning Products",
        article_cleaning_products_list: "Use a soft, lint-free cloth or paper towels|Avoid ammonia-based cleaners - they can damage the film|Use a mild soap and water solution or specialized tint-safe cleaner|Never use abrasive materials or scrubbers",
        article_rolling_down: "Avoid Rolling Down Windows Too Early",
        article_rolling_down_desc: "Keep your windows rolled up for at least 2-3 days after installation. This prevents the film from shifting and ensures proper adhesion.",
        article_protect_damage: "Protect from Damage",
        article_protect_damage_list: "Avoid using seat belt charms or accessories that could scratch the film|Be careful with sharp objects near tinted windows|Park in shaded areas when possible to reduce heat exposure",
        article_signs_replacement: "Signs It's Time for Replacement",
        article_signs_replacement_desc: "If you notice bubbling, peeling, purple discoloration, or reduced heat rejection, it may be time to replace your tint. Quality films can last 5-10 years with proper care.",
        article_intro_factory: "Many modern vehicles come with factory tinted windows, but how do they compare to professional aftermarket tint? Let's break down the differences.",
        article_factory_tint: "What is Factory Tint?",
        article_factory_tint_desc: "Factory tint, also called Privacy Glass, is a dark shade applied during manufacturing. It's actually the dyed glass itself, not a film. It provides minimal heat rejection and no UV protection.",
        article_key_differences: "Key Differences",
        article_key_differences_list: "Heat Rejection: Professional tint can block up to 60% of heat; factory tint provides minimal heat reduction|UV Protection: Aftermarket tint blocks 99% of UV rays; factory tint offers little to no UV protection|Appearance: Professional tint has a uniform, sleek look; factory tint can have inconsistent shades|Durability: Professional films last 5-10 years; factory tint cannot be removed or replaced",
        article_double_tint: "Can You Add Tint Over Factory Tint?",
        article_double_tint_desc: "Yes! You can apply professional tint over factory tinted windows. This is called 'doubling up' and can provide enhanced heat rejection. However, it's important to check local laws, as some states have restrictions on total tint darkness.",
        article_benefits_aftermarket: "Benefits of Aftermarket Tint",
        article_benefits_aftermarket_list: "Superior heat rejection reduces AC usage and fuel consumption|Blocks harmful UV rays that cause skin damage and interior fading|Reduces glare for safer driving|Enhanced privacy and security|Variety of shades and finishes to match your style",
        article_factory_conclusion: "While factory tinted windows offer some privacy, professional aftermarket tint provides superior heat rejection, UV protection, and durability.",
        article_intro_hogar: "Window tinting isn't just for vehicles. Residential window tinting offers numerous benefits for homeowners in Miami, from energy savings to increased privacy and protection.",
        article_energy_efficiency: "Energy Efficiency",
        article_energy_efficiency_desc: "Window film can block up to 60% of solar heat, reducing your cooling costs significantly. In Miami's hot climate, this can translate to 25-40% savings on your energy bills.",
        article_protect_interiors: "Protect Your Interiors",
        article_protect_interiors_list: "Blocks 99% of harmful UV rays|Prevents furniture, flooring, and artwork from fading|Protects hardwood floors from warping|Keeps curtains and fabrics from deteriorating",
        article_increased_privacy: "Increased Privacy",
        article_increased_privacy_desc: "One-way privacy films allow you to see outside while preventing outsiders from seeing in. Perfect for ground-floor rooms and bathrooms.",
        article_enhanced_comfort: "Enhanced Comfort",
        article_enhanced_comfort_desc: "Reduce hot spots in your home and enjoy consistent temperatures throughout. Window tinting also reduces glare on TVs and computer screens.",
        article_safety_security: "Safety and Security",
        article_safety_security_desc: "Security films hold glass together during impacts, making it harder for intruders to enter. They also protect against shattering during storms.",
        article_types_residential: "Types of Residential Window Film",
        article_types_residential_list: "Solar Films: Heat and UV rejection|Privacy Films: One-way visibility|Security Films: Impact resistance|Decorative Films: Frosted or patterned",
        article_intro_barcos: "Boats in Miami face intense sun exposure and salt damage. Window tinting is essential for protecting your vessel and passengers from the harsh marine environment.",
        article_why_tint_boat: "Why Tint Your Boat?",
        article_why_tint_boat_list: "UV Protection: Block 99% of harmful UV rays|Heat Reduction: Keep interiors cool even in direct sun|Glare Reduction: Improve visibility and safety|Protect Interiors: Prevent dashboard and upholstery fading|Privacy: Enjoy private moments on your boat",
        article_marine_challenges: "Marine-Specific Challenges",
        article_marine_challenges_desc: "Boats face unique challenges that require specialized films:",
        article_marine_challenges_list: "Salt corrosion - films must be salt-resistant|High humidity - proper installation is critical|Constant motion - films must have strong adhesion|Extreme sun exposure - higher UV resistance needed",
        article_types_boat: "Types of Marine Window Film",
        article_types_boat_list: "Clear UV Films: UV protection without darkening|Bronzed Films: Classic marine look with heat rejection|Privacy Films: Maximum privacy for cabins|Safety Films: Hold glass together on impact",
        article_considerations: "Important Considerations",
        article_considerations_list: "Not all films are suitable for marine use|Professional installation is recommended|Some areas may have tinting restrictions|Regular maintenance extends film life",
        article_maintenance_tips: "Maintenance Tips",
        article_maintenance_tips_desc: "Clean your tinted windows regularly with fresh water to remove salt deposits. Use only mild soap and soft cloths.",
        article_excerpt_mantener: "Learn the best practices to keep your tint looking new for years. Avoid common mistakes that can damage the film.",
        article_excerpt_factory: "Discover the key differences between aftermarket tint and factory tinted windows. Which option is better for your needs?",
        article_excerpt_hogar: "Reduce energy costs, protect furniture, and increase privacy. Discover all the benefits of residential tinting.",
        article_excerpt_barcos: "Protect your boat interiors from harsh sun and salt damage. Essential tips for boat owners in Miami.",
        article_meta_factory: "Which option is better for your needs?",
        article_meta_hogar: "Energy savings, comfort, and protection for your home",
        article_meta_barcos: "Essential protection for Miami boat owners"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

let weatherWidget, weatherMessage, weatherTemp;
let currentTempC = 25;
let weatherExpanded = localStorage.getItem('weatherExpanded') === 'true';

function initWeatherWidget() {
    weatherWidget = document.getElementById('weatherWidget');
    if (!weatherWidget) return;

    weatherMessage = document.getElementById('weatherMessage');
    weatherTemp = document.getElementById('weatherTemp');

    const collapsedBtn = document.getElementById('weatherCollapsedBtn');
    const closeBtn = document.getElementById('weatherCloseBtn');

    async function fetchWeather() {
        try {
            const response = await fetch(
                'https://api.open-meteo.com/v1/forecast?latitude=25.7617&longitude=-80.1918&current=temperature_2m'
            );
            const data = await response.json();
            currentTempC = data.current.temperature_2m;
            updateWeatherDisplay();
            weatherWidget.classList.add('show');
        } catch (error) {
            console.error('Weather fetch error:', error);
        }
    }

    function updateWeatherDisplay() {
        const tempF = (currentTempC * 9/5) + 32;
        const reduction = Math.min(60, Math.round(tempF * 1.5));
        const collapsedText = document.getElementById('weatherCollapsedText');
        
        if (currentLang === 'es') {
            weatherTemp.innerHTML = `${Math.round(currentTempC)}<span>°C</span>`;
            weatherMessage.textContent = `Con ${Math.round(currentTempC)}°C, el polarizado reduce el calor hasta ${reduction}%`;
            if (collapsedText) collapsedText.textContent = `${Math.round(currentTempC)}°C`;
        } else {
            weatherTemp.innerHTML = `${Math.round(tempF)}<span>°F</span>`;
            weatherMessage.textContent = `With ${Math.round(tempF)}°F, tinting reduces heat up to ${reduction}%`;
            if (collapsedText) collapsedText.textContent = `${Math.round(tempF)}°F`;
        }
    }

    function toggleExpanded() {
        weatherExpanded = !weatherExpanded;
        localStorage.setItem('weatherExpanded', weatherExpanded);
        
        if (weatherExpanded) {
            weatherWidget.classList.add('expanded');
        } else {
            weatherWidget.classList.remove('expanded');
        }
    }

    if (collapsedBtn) {
        collapsedBtn.addEventListener('click', toggleExpanded);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleExpanded();
        });
    }

    if (weatherExpanded) {
        weatherWidget.classList.add('expanded');
    }

    window.updateWeatherWidgetLang = updateWeatherDisplay;
    
    fetchWeather();
    setInterval(fetchWeather, 15 * 60 * 1000);
    updateWeatherDisplay();
}

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
        if (typeof updateWeatherWidgetLang === 'function') {
            updateWeatherWidgetLang();
        }
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
    
    document.querySelectorAll('[data-i18n-list]').forEach(el => {
        const key = el.getAttribute('data-i18n-list');
        if (t[key]) {
            const items = t[key].split('|');
            el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
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
        const weatherWidget = document.getElementById('weatherWidget');
        const whatsappFloat = document.querySelector('.whatsapp-float');
        if (navMenu.classList.contains('active')) {
            if (weatherWidget) weatherWidget.style.display = 'none';
            if (whatsappFloat) whatsappFloat.style.display = 'none';
        } else {
            if (weatherWidget) weatherWidget.style.display = '';
            if (whatsappFloat) whatsappFloat.style.display = '';
        }
    });

    if (navClose) {
        navClose.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            const weatherWidget = document.getElementById('weatherWidget');
            const whatsappFloat = document.querySelector('.whatsapp-float');
            if (weatherWidget) weatherWidget.style.display = '';
            if (whatsappFloat) whatsappFloat.style.display = '';
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            const weatherWidget = document.getElementById('weatherWidget');
            const whatsappFloat = document.querySelector('.whatsapp-float');
            if (weatherWidget) weatherWidget.style.display = '';
            if (whatsappFloat) whatsappFloat.style.display = '';
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
