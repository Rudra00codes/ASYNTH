// Modern hero component with 3D animation integration
class Hero {
    constructor() {
        this.init();
    }

    init() {
        // Create hero section with modern glassmorphic design
        const heroSection = document.createElement('section');
        heroSection.className = 'hero glass-effect';
        heroSection.innerHTML = `
            <div class="hero-content">
                <h1 class="animate-text">ASYNTH</h1>
                <p>Transforming ideas into engaging web experiences</p>
                <button class="btn-primary">FOLLOW</button>
            </div>
            <div class="hero-3d">
                <spline-viewer
                    loading-anim-type="spinner-small-dark"
                    url="https://prod.spline.design/UbqFZEhUfu40PE4i/scene.splinecode">
                </spline-viewer>
            </div>
        `;

        // Add to DOM
        document.querySelector('.banner').appendChild(heroSection);

        // Initialize animations
        this.initAnimations();
    }

    initAnimations() {
        // Text animation with modern effect
        const text = document.querySelector('.animate-text');
        text.style.opacity = '0';
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.animation = 'fadeIn 1s ease-out forwards';
        }, 300);
    }
}

export default Hero;