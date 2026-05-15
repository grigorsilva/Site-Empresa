/* ============================================================
   SISTEMA VITAL ELETRÔNICOS - JAVASCRIPT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MENU HAMBÚRGUER (MOBILE) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            // Abre/Fecha o menu adicionando a classe 'active'
            navList.classList.toggle('active');
            
            // Troca o ícone (Barras p/ X)
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // --- 2. ROLAGEM SUAVE E FECHAR MENU AO CLICAR ---
    // Resolve o problema do botão "Início" e demais links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Verifica se o link é uma âncora (começa com #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Fecha o menu mobile antes de rolar
                    if (navList) navList.classList.remove('active');
                    if (mobileMenu) {
                        const icon = mobileMenu.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-xmark');
                    }

                    // Rola suavemente
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Desconto do header fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. CONTROLE DOS SLIDERS (LOGÍSTICA E PROCESSO) ---
    function iniciarSlider(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const slides = container.querySelectorAll('.slide');
        const btnNext = container.querySelector('.next');
        const btnPrev = container.querySelector('.prev');
        let index = 0;

        function mostrarSlide(n) {
            slides[index].classList.remove('active');
            index = (n + slides.length) % slides.length;
            slides[index].classList.add('active');
        }

        if (btnNext) btnNext.addEventListener('click', () => mostrarSlide(index + 1));
        if (btnPrev) btnPrev.addEventListener('click', () => mostrarSlide(index - 1));

        // Autoplay: Troca a cada 5 segundos
        setInterval(() => mostrarSlide(index + 1), 5000);
    }

    iniciarSlider('slider-logistica');
    iniciarSlider('slider-processo');


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('mobile-menu');
    const menu = document.getElementById('nav-list');
    const links = document.querySelectorAll('#nav-list a');

    if (btn && menu) {
        // Abre e fecha o menu
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique "vaze" para o fundo
            menu.classList.toggle('active');
            btn.classList.toggle('is-active');
        });

        // Fecha o menu ao clicar em qualquer link (Início, Processo, etc)
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                btn.classList.remove('is-active');
            });
        });
    }

    // Fecha o menu se o usuário clicar fora dele
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== btn) {
            menu.classList.remove('active');
            btn.classList.remove('is-active');
        }
    });
});





});