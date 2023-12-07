document.addEventListener("DOMContentLoaded", function() {
    
    const cards = document.querySelectorAll('.card');

    
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            
            anime({
                targets: this,
                translateY: '-3.9%',
                boxShadow: '5px 5px 20px rgba(0,0,0,0.4)',
                duration: 800,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseout', function() {
            
            anime({
                targets: this,
                translateY: '0',
                boxShadow: '0px 1px 10px rgba(0,0,0,0.2)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});