function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const overlay = document.querySelector('.menu-overlay');
    
    if (navMenu && mobileBtn) {
        navMenu.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    }
    
    if (overlay) {
        overlay.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                menuItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

function updateQuantity(btn, change) {
    const quantitySpan = btn.parentElement.querySelector('span');
    let quantity = parseInt(quantitySpan.textContent);
    quantity += change;
    if (quantity < 0) quantity = 0;
    quantitySpan.textContent = quantity;
}

function selectPayment(element) {
    const options = document.querySelectorAll('.payment-option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
}

function submitOrder(event) {
    event.preventDefault();
    const successMessage = document.getElementById('orderSuccess');
    const form = document.getElementById('orderForm');
    
    if (successMessage && form) {
        successMessage.classList.add('show');
        form.reset();
        
        const quantities = document.querySelectorAll('.order-item-quantity span');
        quantities.forEach(q => q.textContent = '0');
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

function submitReservation(event) {
    event.preventDefault();
    const successMessage = document.getElementById('reservationSuccess');
    const form = document.getElementById('reservationForm');
    
    if (successMessage && form) {
        successMessage.classList.add('show');
        form.reset();
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

function submitContact(event) {
    event.preventDefault();
    const successMessage = document.getElementById('contactSuccess');
    const form = document.getElementById('contactForm');
    
    if (successMessage && form) {
        successMessage.classList.add('show');
        form.reset();
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

const dateInput = document.getElementById('resDate');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}
