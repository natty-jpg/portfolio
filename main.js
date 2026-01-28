 // Menu burger
        const burger = document.getElementById("burgerMenu");
        const navLinks = document.getElementById("navLinks");

        burger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });


        // Effet lumineux au survol des icônes
        const icons = document.querySelectorAll('.iconContact img');
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.filter = 'drop-shadow(0 0 10px #00B8DB) brightness(1.3)';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.filter = 'none';
            });
        });

       
    