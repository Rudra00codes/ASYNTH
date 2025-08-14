import '@splinetool/runtime';
import '../styles/main.css';

// Initialize menu functionality
const initMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    
    menuBtn?.addEventListener('click', () => {
        navbar?.classList.toggle('mobile-menu');
    });
};

// Initialize scroll to top functionality
const initScrollToTop = () => {
    const scrolltp = document.getElementById('scrolltp');
    window.addEventListener('scroll', () => {
        if (scrolltp) {
            if (window.scrollY > 500) {
                scrolltp.classList.add('show');
            } else {
                scrolltp.classList.remove('show');
            }
        }
    });
    
    scrolltp?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// Initialize cipher text animation
const initCipherAnimation = async () => {
    try {
        const { default: initCipher } = await import('./animations/cipher.js');
        const cipherElement = document.querySelector('.cipher');
        if (cipherElement && initCipher) {
            initCipher(cipherElement);
        }
    } catch (error) {
        console.error('Failed to load cipher animation:', error);
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initScrollToTop();
    initCipherAnimation();
});