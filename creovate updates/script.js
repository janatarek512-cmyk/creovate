// Mobile navigation toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Filter selected works by category
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Project quick-view modal
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalRole = document.getElementById('modalRole');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');
const modalAction = document.getElementById('modalAction');

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.getAttribute('data-title');
    modalRole.textContent = card.getAttribute('data-role').toUpperCase();
    modalDesc.textContent = card.getAttribute('data-desc');
    modal.classList.add('open');
  });
});

if (closeModal) {
  closeModal.addEventListener('click', () => modal.classList.remove('open'));
}
if (modalAction) {
  modalAction.addEventListener('click', () => modal.classList.remove('open'));
}
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const scope = document.getElementById('scope').value;
    const brief = document.getElementById('message').value.trim();
    const message = [
      'Hello CREOVATE, I would like to discuss a project.',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project scope: ${scope}`,
      `Project brief: ${brief}`,
    ].join('\n');

    window.open(`https://wa.me/201226626840?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}

