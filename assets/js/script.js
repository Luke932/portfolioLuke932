$(document).ready(function(){

  $('.scroll-top').hide();

  /*--------------- Navbar Toggler ---------------*/
  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active');
  });

  /*--------------- Scroll-Top ---------------*/
  $(window).on('scroll',function(){
    
    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    // STICKY HEADER
    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

  });

});

document.addEventListener('DOMContentLoaded', function() {
  const toggleModeButton = document.getElementById('toggle-mode');

  toggleModeButton.addEventListener('click', function() {
    document.documentElement.classList.toggle('light-mode');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleLanguageButton = document.getElementById('toggle-language');

  toggleLanguageButton.addEventListener('click', function() {
    const translatableElements = document.querySelectorAll('.translatable');

    translatableElements.forEach(element => {
      const currentText = element.innerText;

      if (currentText.includes('Modifica Schermo')) {
        element.innerText = currentText.replace('Modifica Schermo', 'Update Desktop');
      } else if (currentText.includes('Update Desktop')) {
        element.innerText = currentText.replace('Update Desktop', 'Modifica Schermo');
      }

      if (currentText.includes('English')) {
        element.innerText = currentText.replace('English', 'Italy');
      } else if (currentText.includes('Italy')) {
        element.innerText = currentText.replace('Italy', 'English');
      }

      if (currentText.includes('Ciao a tutti!')) {
        element.innerText = currentText.replace('Ciao a tutti!', 'Hi there!');
      } else if (currentText.includes('Hi there!')) {
        element.innerText = currentText.replace('Hi there!', 'Ciao a tutti!');
      }

      if (currentText.includes('chi sono')) {
        element.innerText = currentText.replace('chi sono', 'about me');
      } else if (currentText.includes('about me')) {
        element.innerText = currentText.replace('about me', 'chi sono');
      }

      if (currentText.includes('servizi')) {
        element.innerText = currentText.replace('servizi', 'services');
      } else if (currentText.includes('services')) {
        element.innerText = currentText.replace('services', 'servizi');
      }

      if (currentText.includes('progetti')) {
        element.innerText = currentText.replace('progetti', 'projects');
      } else if (currentText.includes('projects')) {
        element.innerText = currentText.replace('projects', 'progetti');
      }

      if (currentText.includes('contatti')) {
        element.innerText = currentText.replace('contatti', 'contacts');
      } else if (currentText.includes('contacts')) {
        element.innerText = currentText.replace('contacts', 'contatti');
      }

      if (currentText.includes('Sviluppatore web creativo con esperienza nell\'offrire soluzioni web ad alto impatto per diverse organizzazioni.')) {
        element.innerText = currentText.replace('Sviluppatore web creativo con esperienza nell\'offrire soluzioni web ad alto impatto per diverse organizzazioni.', 'Creative web developer with experience in delivering high-impact web solutions for various organizations.');
      } else if (currentText.includes('Creative web developer with experience in delivering high-impact web solutions for various organizations.')) {
        element.innerText = currentText.replace('Creative web developer with experience in delivering high-impact web solutions for various organizations.', 'Sviluppatore web creativo con esperienza nell\'offrire soluzioni web ad alto impatto per diverse organizzazioni.');
      }


      if (currentText.includes('Io sono Luca')) {
        element.innerText = currentText.replace('Io sono Luca', "I'm Luca");
      } else if (currentText.includes("I'm Luca")) {
        element.innerText = currentText.replace("I'm Luca", 'Io sono Luca');
      }

      if (currentText.includes('Sono diplomato nel settore turistico da 11 anni, ma ho sempre avuto una grande passione per i computer e lo sviluppo web in particolare e da breve ho preso la decisione di entrare in questo campo concludendo un corso di 6 mesi presso Epicode School e devo dire che credo di aver fatto la miglior scelta della mia vita e sono pronto per fare grandi salti di qualità approfondendo ogni giorno quello che ci offre questo lavoro.')) {
        element.innerText = currentText.replace('Sono diplomato nel settore turistico da 11 anni, ma ho sempre avuto una grande passione per i computer e lo sviluppo web in particolare e da breve ho preso la decisione di entrare in questo campo concludendo un corso di 6 mesi presso Epicode School e devo dire che credo di aver fatto la miglior scelta della mia vita e sono pronto per fare grandi salti di qualità approfondendo ogni giorno quello che ci offre questo lavoro.', "I have been graduated in the tourism sector for 11 years, but I have always had a great passion for computers and web development in particular. Recently, I made the decision to enter this field by completing a 6-month course at Epicode School. I must say that I believe I made the best choice of my life, and I am ready to take big leaps in quality by deepening my knowledge every day in this profession.");
      } else if (currentText.includes("I have been graduated in the tourism sector for 11 years, but I have always had a great passion for computers and web development in particular. Recently, I made the decision to enter this field by completing a 6-month course at Epicode School. I must say that I believe I made the best choice of my life, and I am ready to take big leaps in quality by deepening my knowledge every day in this profession.")) {
        element.innerText = currentText.replace("I have been graduated in the tourism sector for 11 years, but I have always had a great passion for computers and web development in particular. Recently, I made the decision to enter this field by completing a 6-month course at Epicode School. I must say that I believe I made the best choice of my life, and I am ready to take big leaps in quality by deepening my knowledge every day in this profession.", 'Sono diplomato nel settore turistico da 11 anni, ma ho sempre avuto una grande passione per i computer e lo sviluppo web in particolare e da breve ho preso la decisione di entrare in questo campo concludendo un corso di 6 mesi presso Epicode School e devo dire che credo di aver fatto la miglior scelta della mia vita e sono pronto per fare grandi salti di qualità approfondendo ogni giorno quello che ci offre questo lavoro.');
      }

      if (currentText.includes('Età')) {
        element.innerText = currentText.replace('Età', "Age");
      } else if (currentText.includes("Age")) {
        element.innerText = currentText.replace("Age", 'Età');
      }

      if (currentText.includes('Lingua')) {
        element.innerText = currentText.replace('Lingua', "Language");
      } else if (currentText.includes("Language")) {
        element.innerText = currentText.replace("Language", 'Lingua');
      }

      if (currentText.includes('Italiana')) {
        element.innerText = currentText.replace('Italiana', "Italian");
      } else if (currentText.includes("Italian")) {
        element.innerText = currentText.replace("Italian", 'Italiana');
      }

      if (currentText.includes('Ruolo')) {
        element.innerText = currentText.replace('Ruolo', "Work");
      } else if (currentText.includes("Work")) {
        element.innerText = currentText.replace("Work", 'Ruolo');
      }

      if (currentText.includes('Libero professionista')) {
        element.innerText = currentText.replace('Libero professionista', "Freelance");
      } else if (currentText.includes("Freelance")) {
        element.innerText = currentText.replace("Freelance", 'Libero professionista');
      }

      if (currentText.includes('Sviluppatore Full Stack')) {
        element.innerText = currentText.replace('Sviluppatore Full Stack', "Full Stack Developer");
      } else if (currentText.includes("Full Stack Developer")) {
        element.innerText = currentText.replace("Freelance", 'Full Stack Developer');
      }

      if (currentText.includes('Disponibile')) {
        element.innerText = currentText.replace('Disponibile', "Available");
      } else if (currentText.includes("Available")) {
        element.innerText = currentText.replace("Available", 'Disponibile');
      }

      if (currentText.includes('Scarica')) {
        element.innerText = currentText.replace('Scarica', "Download");
      } else if (currentText.includes("Download")) {
        element.innerText = currentText.replace("Download", 'Scarica');
      }

      if (currentText.includes('mesi di esperienza')) {
        element.innerText = currentText.replace('mesi di esperienza', "months of experience");
      } else if (currentText.includes("months of experience")) {
        element.innerText = currentText.replace("months of experience", 'mesi di esperienza');
      }

      if (currentText.includes('progetti completati')) {
        element.innerText = currentText.replace('progetti completati', "projects completed");
      } else if (currentText.includes("projects completed")) {
        element.innerText = currentText.replace("projects completed", 'progetti completati');
      }

      if (currentText.includes('Le mie')) {
        element.innerText = currentText.replace('Le mie', "My");
      } else if (currentText.includes("My")) {
        element.innerText = currentText.replace("My", 'Le mie');
      }

      if (currentText.includes('competenze')) {
        element.innerText = currentText.replace('competenze', "skills");
      } else if (currentText.includes("skills")) {
        element.innerText = currentText.replace("skills", 'competenze');
      }

      if (currentText.includes('qualifiche')) {
        element.innerText = currentText.replace('qualifiche', "qualifications");
      } else if (currentText.includes("qualifications")) {
        element.innerText = currentText.replace("qualifications", 'qualifiche');
      }

      if (currentText.includes('Sviluppatore Full-Stack')) {
        element.innerText = currentText.replace('Sviluppatore Full-Stack', "Full-Stack Developer");
      } else if (currentText.includes("Full-Stack Developer")) {
        element.innerText = currentText.replace("Full-Stack Developer", 'Full-Stack Developer');
      }

      if (currentText.includes('Certificato come Full-Stack Developer da Epicode, ho acquisito competenze sia nel front-end (HTML, CSS, JavaScript, TypeScript, Angular) che nel back-end (Java, Spring Boot, Spring Security, PostgreSQL). Esperienza nella gestione di progetti di sviluppo in team e nella collaborazione con altri sviluppatori.')) {
        element.innerText = currentText.replace('Certificato come Full-Stack Developer da Epicode, ho acquisito competenze sia nel front-end (HTML, CSS, JavaScript, TypeScript, Angular) che nel back-end (Java, Spring Boot, Spring Security, PostgreSQL). Esperienza nella gestione di progetti di sviluppo in team e nella collaborazione con altri sviluppatori.', "Certified as a Full-Stack Developer by Epicode, I have gained proficiency in both front-end (HTML, CSS, JavaScript, TypeScript, Angular) and back-end (Java, Spring Boot, Spring Security, PostgreSQL) technologies. I have experience in project management within a team and collaboration with other developers.");
      } else if (currentText.includes("Certified as a Full-Stack Developer by Epicode, I have gained proficiency in both front-end (HTML, CSS, JavaScript, TypeScript, Angular) and back-end (Java, Spring Boot, Spring Security, PostgreSQL) technologies. I have experience in project management within a team and collaboration with other developers.")) {
        element.innerText = currentText.replace("Certified as a Full-Stack Developer by Epicode, I have gained proficiency in both front-end (HTML, CSS, JavaScript, TypeScript, Angular) and back-end (Java, Spring Boot, Spring Security, PostgreSQL) technologies. I have experience in project management within a team and collaboration with other developers.", 'Certificato come Full-Stack Developer da Epicode, ho acquisito competenze sia nel front-end (HTML, CSS, JavaScript, TypeScript, Angular) che nel back-end (Java, Spring Boot, Spring Security, PostgreSQL). Esperienza nella gestione di progetti di sviluppo in team e nella collaborazione con altri sviluppatori.');
      }

      if (currentText.includes('Diploma in "Tecnico dei servizi turistici"')) {
        element.innerText = currentText.replace('Diploma in "Tecnico dei servizi turistici"', "BTECs in Tourism Services Technician");
      } else if (currentText.includes('BTECs in Tourism Services Technician"')) {
        element.innerText = currentText.replace('BTECs in Tourism Services Technician"', 'Diploma in "Tecnico dei servizi turistici"');
      }

      if (currentText.includes("Certificato come Tecnico dei Servizi Turistici dall'Istituto Alberghiero 'Virgilio Titone'. Competenze acquisite in organizzazione turistica, gestione di strutture ricettive e eventi correlati. Esperienza pratica significativa nel settore.")) {
        element.innerText = currentText.replace("Certificato come Tecnico dei Servizi Turistici dall'Istituto Alberghiero 'Virgilio Titone'. Competenze acquisite in organizzazione turistica, gestione di strutture ricettive e eventi correlati. Esperienza pratica significativa nel settore.", "Certified as a Technician in Tourism Services from the 'Virgilio Titone' Hotel Management Institute. Skills acquired in tourism organization, management of accommodation facilities, and related events. Significant practical experience in the field.");
      } else if (currentText.includes("Certified as a Technician in Tourism Services from the 'Virgilio Titone' Hotel Management Institute. Skills acquired in tourism organization, management of accommodation facilities, and related events. Significant practical experience in the field.")) {
        element.innerText = currentText.replace("Certified as a Technician in Tourism Services from the 'Virgilio Titone' Hotel Management Institute. Skills acquired in tourism organization, management of accommodation facilities, and related events. Significant practical experience in the field.", "Certificato come Tecnico dei Servizi Turistici dall'Istituto Alberghiero 'Virgilio Titone'. Competenze acquisite in organizzazione turistica, gestione di strutture ricettive e eventi correlati. Esperienza pratica significativa nel settore.");
      }

      if (currentText.includes('Responsabile Punto Vendita')) {
        element.innerText = currentText.replace('Responsabile Punto Vendita', "Store Manager");
      } else if (currentText.includes('Store Manager')) {
        element.innerText = currentText.replace('Store Manager', 'Responsabile Punto Vendita');
      }

      if (currentText.includes("Guidato da Basone Srl, ho supervisionato le operazioni quotidiane del punto vendita di termoidraulica all'ingrosso. Gestendo le vendite, coordinando il personale e garantendo un servizio clienti di alta qualità, ho contribuito al successo e alla crescita del negozio.")) {
        element.innerText = currentText.replace("Guidato da Basone Srl, ho supervisionato le operazioni quotidiane del punto vendita di termoidraulica all'ingrosso. Gestendo le vendite, coordinando il personale e garantendo un servizio clienti di alta qualità, ho contribuito al successo e alla crescita del negozio." , "Led by Basone Srl, I supervised the daily operations of the wholesale plumbing and heating store. By managing sales, coordinating staff, and ensuring high-quality customer service, I contributed to the success and growth of the store.");
      } else if (currentText.includes("Led by Basone Srl, I supervised the daily operations of the wholesale plumbing and heating store. By managing sales, coordinating staff, and ensuring high-quality customer service, I contributed to the success and growth of the store.")) {
        element.innerText = currentText.replace("Led by Basone Srl, I supervised the daily operations of the wholesale plumbing and heating store. By managing sales, coordinating staff, and ensuring high-quality customer service, I contributed to the success and growth of the store.", "Guidato da Basone Srl, ho supervisionato le operazioni quotidiane del punto vendita di termoidraulica all'ingrosso. Gestendo le vendite, coordinando il personale e garantendo un servizio clienti di alta qualità, ho contribuito al successo e alla crescita del negozio.");
      }

      if (currentText.includes('Ruoli nella ristorazione')) {
        element.innerText = currentText.replace('Ruoli nella ristorazione', "Roles in the restaurant industry");
      } else if (currentText.includes('Roles in the restaurant industry')) {
        element.innerText = currentText.replace('Roles in the restaurant industry', 'Ruoli nella ristorazione');
      }

      if (currentText.includes('Con sei anni di esperienza nel settore della ristorazione, ho lavorato come cameriere e barista in diversi locali. La mia competenza nella preparazione di bevande e la mia attenzione ai dettagli hanno contribuito al successo degli esercizi in cui ho lavorato.')) {
        element.innerText = currentText.replace('Con sei anni di esperienza nel settore della ristorazione, ho lavorato come cameriere e barista in diversi locali. La mia competenza nella preparazione di bevande e la mia attenzione ai dettagli hanno contribuito al successo degli esercizi in cui ho lavorato.', "With six years of experience in the restaurant industry, I have worked as a waiter and barista in various establishments. My expertise in beverage preparation and attention to detail have contributed to the success of the places I have worked.");
      } else if (currentText.includes('With six years of experience in the restaurant industry, I have worked as a waiter and barista in various establishments. My expertise in beverage preparation and attention to detail have contributed to the success of the places I have worked.')) {
        element.innerText = currentText.replace('With six years of experience in the restaurant industry, I have worked as a waiter and barista in various establishments. My expertise in beverage preparation and attention to detail have contributed to the success of the places I have worked.', 'Con sei anni di esperienza nel settore della ristorazione, ho lavorato come cameriere e barista in diversi locali. La mia competenza nella preparazione di bevande e la mia attenzione ai dettagli hanno contribuito al successo degli esercizi in cui ho lavorato.');
      }

      if (currentText.includes('I miei')) {
        element.innerText = currentText.replace('I miei', "My");
      } else if (currentText.includes('My')) {
        element.innerText = currentText.replace('My', 'I miei');
      }

      if (currentText.includes('servizi')) {
        element.innerText = currentText.replace('servizi', "services");
      } else if (currentText.includes('services')) {
        element.innerText = currentText.replace('services', 'servizi');
      }

      if (currentText.includes('Progettazione Web')) {
        element.innerText = currentText.replace('Progettazione Web', "Web Design");
      } else if (currentText.includes('Web Design')) {
        element.innerText = currentText.replace('Web Design', 'Progettazione Web');
      }

      if (currentText.includes('Dalla concezione al design, creiamo esperienze digitali straordinarie')) {
        element.innerText = currentText.replace('Dalla concezione al design, creiamo esperienze digitali straordinarie', "We craft exceptional digital experiences from concept to design.");
      } else if (currentText.includes('We craft exceptional digital experiences from concept to design.')) {
        element.innerText = currentText.replace('We craft exceptional digital experiences from concept to design.', 'Dalla concezione al design, creiamo esperienze digitali straordinarie');
      }

      if (currentText.includes('Gestione Database')) {
        element.innerText = currentText.replace('Gestione Database', "Database Management");
      } else if (currentText.includes('Database Management')) {
        element.innerText = currentText.replace('Database Management', 'Gestione Database');
      }

      if (currentText.includes("Ottimizzazione & gestione dei dati per garantire prestazioni eccellenti")) {
        element.innerText = currentText.replace("Ottimizzazione & gestione dei dati per garantire prestazioni eccellenti","Data optimization & management for ensuring excellent performance");
      } else if (currentText.includes('Data optimization & management for ensuring excellent performance')) {
        element.innerText = currentText.replace('Data optimization & management for ensuring excellent performance', "Ottimizzazione & gestione dei dati per garantire prestazioni eccellenti");
      }

      if (currentText.includes('Integrazione API')) {
        element.innerText = currentText.replace('Integrazione API', "API Integration");
      } else if (currentText.includes('API Integration')) {
        element.innerText = currentText.replace('API Integration', 'Integrazione API');
      }

      if (currentText.includes('Connettiamo il tuo sistema con servizi esterni essenziali.')) {
        element.innerText = currentText.replace('Connettiamo il tuo sistema con servizi esterni essenziali.', "We connect your system to essential external services.");
      } else if (currentText.includes('We connect your system to essential external services.')) {
        element.innerText = currentText.replace('We connect your system to essential external services.', 'Connettiamo il tuo sistema con servizi esterni essenziali.');
      }

      if (currentText.includes('Sicurezza & Autenticazione')) {
        element.innerText = currentText.replace('Sicurezza & Autenticazione', "Security & Authentication");
      } else if (currentText.includes('Security & Authentication')) {
        element.innerText = currentText.replace('Security & Authentication', 'Sicurezza & Autenticazione');
      }

      if (currentText.includes("Protezione dei dati & gestione dell'accesso.")) {
        element.innerText = currentText.replace("Protezione dei dati & gestione dell'accesso.","Data protection & access management");
      } else if (currentText.includes('Data protection & access management')) {
        element.innerText = currentText.replace('Data protection & access management', "Protezione dei dati & gestione dell'accesso.");
      }

      if (currentText.includes("Applicazioni Mobili")) {
        element.innerText = currentText.replace("Applicazioni Mobili","App Mobile");
      } else if (currentText.includes('App Mobile')) {
        element.innerText = currentText.replace('App Mobile', "Applicazioni Mobili");
      }

      if (currentText.includes("Sviluppo di applicazioni mobili Multi-Piattaforma")) {
        element.innerText = currentText.replace("Sviluppo di applicazioni mobili Multi-Piattaforma","Cross-Platform mobile app development");
      } else if (currentText.includes('Cross-Platform mobile app development')) {
        element.innerText = currentText.replace('Cross-Platform mobile app development', "Sviluppo di applicazioni mobili Multi-Piattaforma");
      }

      if (currentText.includes("progetti")) {
        element.innerText = currentText.replace("progetti","projects");
      } else if (currentText.includes('projects')) {
        element.innerText = currentText.replace('projects', "progetti");
      }

      if (currentText.includes("giugno")) {
        element.innerText = currentText.replace("giugno","june");
      } else if (currentText.includes('june')) {
        element.innerText = currentText.replace('june', "giugno");
      }

      if (currentText.includes("da Luca")) {
        element.innerText = currentText.replace("da Luca","by Luke");
      } else if (currentText.includes('by Luke')) {
        element.innerText = currentText.replace('by Luke', "da Luca");
      }

      if (currentText.includes("Clone di Netflix")) {
        element.innerText = currentText.replace("Clone di Netflix","Netflix Clone");
      } else if (currentText.includes('Netflix Clone')) {
        element.innerText = currentText.replace('Netflix Clone', "Clone di Netflix");
      }

      if (currentText.includes("Questo è un grandioso progetto fatto in Angular con l'ausilio di Bootstrap e JsonServer e replica l'interfaccia e alcune funzionalità di Netflix.")) {
        element.innerText = currentText.replace("Questo è un grandioso progetto fatto in Angular con l'ausilio di Bootstrap e JsonServer e replica l'interfaccia e alcune funzionalità di Netflix.","This is a project built in Angular with the help of Bootstrap and Json Server, which replicates the interface and some functionalities of Netflix.");
      } else if (currentText.includes('This is a project built in Angular with the help of Bootstrap and Json Server, which replicates the interface and some functionalities of Netflix.')) {
        element.innerText = currentText.replace('This is a project built in Angular with the help of Bootstrap and Json Server, which replicates the interface and some functionalities of Netflix.', "Questo è un grandioso progetto fatto in Angular con l'ausilio di Bootstrap e JsonServer e replica l'interfaccia e alcune funzionalità di Netflix.");
      }

      if (currentText.includes("leggi di più")) {
        element.innerText = currentText.replace("leggi di più","read more");
      } else if (currentText.includes('read more')) {
        element.innerText = currentText.replace('read more', "leggi di più");
      }

      if (currentText.includes("maggio")) {
        element.innerText = currentText.replace("maggio","may");
      } else if (currentText.includes('may')) {
        element.innerText = currentText.replace('may', "maggio");
      }

      if (currentText.includes("Clone di Spotify")) {
        element.innerText = currentText.replace("Clone di Spotify","Spotify Clone");
      } else if (currentText.includes('Spotify Clone')) {
        element.innerText = currentText.replace('Spotify Clone', "Clone di Spotify");
      }

      if (currentText.includes("Questo è clone di Spotify creato utilizzando HTML, CSS, Bootstrap e JavaScript. L'obiettivo è ricreare l'esperienza di Spotify in modo piacevole")) {
        element.innerText = currentText.replace("Questo è clone di Spotify creato utilizzando HTML, CSS, Bootstrap e JavaScript. L'obiettivo è ricreare l'esperienza di Spotify in modo piacevole","This is a Spotify clone created using HTML, CSS, Bootstrap, and JavaScript. The goal is to recreate the Spotify experience in an enjoyable way");
      } else if (currentText.includes('This is a Spotify clone created using HTML, CSS, Bootstrap, and JavaScript. The goal is to recreate the Spotify experience in an enjoyable way')) {
        element.innerText = currentText.replace('This is a Spotify clone created using HTML, CSS, Bootstrap, and JavaScript. The goal is to recreate the Spotify experience in an enjoyable way', "Questo è clone di Spotify creato utilizzando HTML, CSS, Bootstrap e JavaScript. L'obiettivo è ricreare l'esperienza di Spotify in modo piacevole");
      }

      if (currentText.includes("ottobre")) {
        element.innerText = currentText.replace("ottobre","october");
      } else if (currentText.includes('october')) {
        element.innerText = currentText.replace('october', "ottobre");
      }

      if (currentText.includes("Cibo di strada per Palermo")) {
        element.innerText = currentText.replace("Cibo di strada per Palermo","Street Food Palermo");
      } else if (currentText.includes('Street Food Palermo')) {
        element.innerText = currentText.replace('Street Food Palermo', "Cibo di strada per Palermo");
      }

      if (currentText.includes("Questo sito offre informazioni dettagliate sullo street food palermitano, portandoti in un viaggio culinario attraverso le strade di Palermo.")) {
        element.innerText = currentText.replace("Questo sito offre informazioni dettagliate sullo street food palermitano, portandoti in un viaggio culinario attraverso le strade di Palermo.","This website provides detailed information about Palermo's street food, taking you on a culinary journey through the streets of Palermo.");
      } else if (currentText.includes("This website provides detailed information about Palermo's street food, taking you on a culinary journey through the streets of Palermo.")) {
        element.innerText = currentText.replace("This website provides detailed information about Palermo's street food, taking you on a culinary journey through the streets of Palermo.", "Questo sito offre informazioni dettagliate sullo street food palermitano, portandoti in un viaggio culinario attraverso le strade di Palermo.");
      }

      if (currentText.includes("Studenti nel Web")) {
        element.innerText = currentText.replace("Studenti nel Web","Web Students");
      } else if (currentText.includes('Web Students')) {
        element.innerText = currentText.replace('Web Students', "Studenti nel Web");
      }

      if (currentText.includes("Benvenuti nel progetto Web Students! Questa è una pagina statica che fornisce informazioni sugli studenti e i corsi relativi alle diverse tecnologie.")) {
        element.innerText = currentText.replace("Benvenuti nel progetto Web Students! Questa è una pagina statica che fornisce informazioni sugli studenti e i corsi relativi alle diverse tecnologie.","Welcome to the Web Students project! This is a static page that provides information about students and courses related to various technologies.");
      } else if (currentText.includes('Welcome to the Web Students project! This is a static page that provides information about students and courses related to various technologies.')) {
        element.innerText = currentText.replace('Welcome to the Web Students project! This is a static page that provides information about students and courses related to various technologies.', "Benvenuti nel progetto Web Students! Questa è una pagina statica che fornisce informazioni sugli studenti e i corsi relativi alle diverse tecnologie.");
      }

      if (currentText.includes("Clone di Medium")) {
        element.innerText = currentText.replace("Clone di Medium","Medium Clone");
      } else if (currentText.includes('Medium Clone')) {
        element.innerText = currentText.replace('Medium Clone', "Clone di Medium");
      }

      if (currentText.includes("Benvenuti nel progetto Medium Clone! Questo progetto è un clone semplificato del famoso sito di pubblicazione di contenuti Medium.")) {
        element.innerText = currentText.replace("Benvenuti nel progetto Medium Clone! Questo progetto è un clone semplificato del famoso sito di pubblicazione di contenuti Medium.","Welcome to the Medium Clone project! This project is a simplified clone of the popular content publishing site Medium.");
      } else if (currentText.includes('Welcome to the Medium Clone project! This project is a simplified clone of the popular content publishing site Medium.')) {
        element.innerText = currentText.replace('Welcome to the Medium Clone project! This project is a simplified clone of the popular content publishing site Medium.', "Benvenuti nel progetto Medium Clone! Questo progetto è un clone semplificato del famoso sito di pubblicazione di contenuti Medium.");
      }

      if (currentText.includes("contatti")) {
        element.innerText = currentText.replace("contatti","contacts");
      } else if (currentText.includes('contacts')) {
        element.innerText = currentText.replace('contacts', "contatti");
      }

      if (currentText.includes("Cellulare")) {
        element.innerText = currentText.replace("Cellulare","Phone");
      } else if (currentText.includes('Phone')) {
        element.innerText = currentText.replace('Phone', "Cellulare");
      }

      if (currentText.includes("Il tuo nome")) {
        element.innerText = currentText.replace("Il tuo nome","Your name");
      } else if (currentText.includes('Il tuo nome')) {
        element.innerText = currentText.replace('Il tuo nome', "Your name");
      }

      if (currentText.includes("La tua email")) {
        element.innerText = currentText.replace("La tua email","Your email");
      } else if (currentText.includes('Your email')) {
        element.innerText = currentText.replace('Your email', "La tua email");
      }

      if (currentText.includes("Oggetto")) {
        element.innerText = currentText.replace("Oggetto","Object");
      } else if (currentText.includes('Object')) {
        element.innerText = currentText.replace('Object', "Oggetto");
      }

      if (currentText.includes("Il tuo messaggio")) {
        element.innerText = currentText.replace("Il tuo messaggio","Your message");
      } else if (currentText.includes('Your message')) {
        element.innerText = currentText.replace('Your message', "Il tuo messaggio");
      }

      if (currentText.includes("Invia")) {
        element.innerText = currentText.replace("Invia","Send");
      } else if (currentText.includes('Send')) {
        element.innerText = currentText.replace('Send', "Invia");
      }

    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let isItalian = true;
  let typed;

  const toggleLanguageButton = document.getElementById('toggle-language');

  function startTyped(strings) {
    const typedElement = document.querySelector('.typing-text');

    typedElement.innerHTML = ""; // Resetta il contenuto dell'elemento

    typed = new Typed('.typing-text', {
      strings: strings,
      typeSpeed: 120,
      loop: true,
      showCursor: true // Aggiunto cursore per migliorare la leggibilità
    });
  }

  toggleLanguageButton.addEventListener('click', function() {
    isItalian = !isItalian;
    const strings = isItalian ? italianStrings : englishStrings;
    if (typed) {
      typed.destroy(); // Interrompiamo Typed.js se è già in esecuzione
    }
    startTyped(strings);
  });

  const italianStrings = ["Io sono uno sviluppatore web 💻", "Io amo Angular ♥", "Io amo Java ♥", "Io amo Spring Boot ♥"];
  const englishStrings = ["I am a web developer 💻", "I love Angular ♥", "I love Java ♥", "I love Spring Boot ♥"];

  startTyped(italianStrings);
});

