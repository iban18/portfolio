// Transition de page fluide
document.addEventListener('DOMContentLoaded', function() {
    // Réinitialiser le style au chargement
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '1';
    document.body.style.transform = 'translateY(0)';
});

// Intercepter les clics sur les liens internes
document.addEventListener('click', function(e) {
    // Récupérer le lien cliqué
    let link = e.target.closest('a');
    
    // Vérifier si c'est un lien interne (pas external, pas mailto, pas target="_blank")
    if (link && 
        link.href && 
        !link.href.includes('mailto:') && 
        !link.href.includes('tel:') &&
        !link.target &&
        link.hostname === window.location.hostname &&
        link.pathname !== window.location.pathname) {
        
        // Empêcher la navigation immédiate
        e.preventDefault();
        
        // Ajouter la transition de sortie
        document.body.style.transition = 'opacity 0.4s ease-in-out';
        document.body.style.opacity = '0';
        
        // Naviguer après la transition
        setTimeout(function() {
            window.location.href = link.href;
        }, 400);
    }
});
