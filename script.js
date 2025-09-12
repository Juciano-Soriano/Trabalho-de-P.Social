document.addEventListener('DOMContentLoaded', () => {
    // Lida com a navegação do menu hamburger para mobile
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Lida com a exibição dos tutoriais
    const tutorialLinks = document.querySelectorAll('.tutorial-item');
    const tutorialDetailSection = document.getElementById('tutorial-detalhe');
    const mainSections = document.querySelectorAll('section:not(#tutorial-detalhe)');
    const allTutorialPages = document.querySelectorAll('.tutorial-page');
    const voltarBtn = document.querySelector('.btn-voltar');

    tutorialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Esconde todas as seções principais
            mainSections.forEach(section => {
                section.style.display = 'none';
            });

            // Esconde todas as páginas de tutorial
            allTutorialPages.forEach(page => {
                page.style.display = 'none';
            });

            // Mostra a seção de tutoriais detalhados e o tutorial específico
            tutorialDetailSection.style.display = 'block';
            document.getElementById(targetId).style.display = 'block';

            // Rola a página para o topo da seção de detalhes
            tutorialDetailSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Lida com o botão de voltar para a lista de tutoriais
    voltarBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Esconde a seção de tutoriais detalhados
        tutorialDetailSection.style.display = 'none';

        // Mostra todas as seções principais novamente
        mainSections.forEach(section => {
            section.style.display = 'block';
        });

        // Rola a página para a seção de tutoriais
        document.getElementById('tutoriais').scrollIntoView({ behavior: 'smooth' });
    });
});