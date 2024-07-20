const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click",() => {

    const body = document.body;

    body.classList.toggle('is-menu');
 
 });


const mainheader = document.querySelector('.main-header');


window.addEventListener("scroll",() => {


    if (window.scrollY > 100) {

        mainheader.classList.add('is-sticky');
    }

    else {

        mainheader.classList.remove('is-sticky');
    }
 
 });



document.querySelectorAll('.image-container a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId); 

        if (targetSection) {
            const offsetTop = targetSection.offsetTop; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});


function validateForm(e) {
        e.preventDefault();
    
        // Validation du champ firstname
        const firstname = document.contactForm.firstname.value.trim();
        const firstnameclass = document.querySelector('.firstname-class');
        const existingFirstnameError = firstnameclass.querySelector('.required');
    
        if (firstname.length === 0) {
            // Affiche un message d'erreur si le champ est vide
            if (!existingFirstnameError) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('required');
                newDiv.innerText = 'Ce champ est obligatoire.';
                firstnameclass.appendChild(newDiv);
            }
        } else {
            // Supprime le message d'erreur s'il existe
            if (existingFirstnameError) {
                existingFirstnameError.remove();
            }
        }
    
        // Validation du champ secondname
        const secondname = document.contactForm.secondname.value.trim();
        const secondnameclass = document.querySelector('.secondname-class');
        const existingSecondnameError = secondnameclass.querySelector('.required');
    
        if (secondname.length === 0) {
            // Affiche un message d'erreur si le champ est vide
            if (!existingSecondnameError) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('required');
                newDiv.innerText = 'Ce champ est obligatoire.';
                secondnameclass.appendChild(newDiv);
            }
        } else {
            // Supprime le message d'erreur s'il existe
            if (existingSecondnameError) {
                existingSecondnameError.remove();
            }
        }
    
        // Validation du champ message
        const message = document.contactForm.message.value.trim();
        const messageclass = document.querySelector('.message-class');
        const existingMessageError = messageclass.querySelector('.required');
    
        if (message.length === 0) {
            // Affiche un message d'erreur si le champ est vide
            if (!existingMessageError) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('required');
                newDiv.innerText = 'Ce champ est obligatoire.';
                messageclass.appendChild(newDiv);
            }
        } else {
            // Supprime le message d'erreur s'il existe
            if (existingMessageError) {
                existingMessageError.remove();
            }
        }
    
        // Validation du champ email
        const mail = document.contactForm.mail.value.trim(); // Récupère la valeur de l'email avec trim() pour enlever les espaces vides
        const emailclass = document.querySelector('.email-class');
        const existingEmailError = emailclass.querySelector('.required');
    
        if (mail.length === 0) {
            // Affiche un message d'erreur si le champ est vide
            if (!existingEmailError) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('required');
                newDiv.innerText = 'Ce champ est obligatoire.';
                emailclass.appendChild(newDiv);
            }
        } else if (!mail.includes('@')) {
            // Affiche un message d'erreur si l'email ne contient pas le symbole "@"
            const newDiv = document.createElement('div');
            newDiv.classList.add('required');
            newDiv.innerText = 'Veuillez saisir une adresse email valide.';
            
            // Supprime d'abord les messages d'erreur existants
            if (existingEmailError) {
                existingEmailError.remove();
            }
    
            emailclass.appendChild(newDiv);
        } else {
            // Supprime le message d'erreur s'il existe
            if (existingEmailError) {
                existingEmailError.remove();
            }
        }

         // Si tous les champs sont valides, affichez un message de succès
        if (firstname.length > 0 && secondname.length > 0 && message.length > 0 && mail.includes('@')) {
        const submitMessage = document.getElementById('submit-message');
        submitMessage.innerText = 'Le formulaire a été envoyé avec succès !';

        // Réinitialisez le formulaire si nécessaire
        document.contactForm.reset();
        }
    }