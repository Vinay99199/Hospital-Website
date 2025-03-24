// ============================
// Full JavaScript Code for Hospital Website
// ============================

document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // 1. Smart Search Scroll to Section
  // ============================
  const searchInput = document.getElementById("searchInput");
  const searchIcon = document.getElementById("searchBtn"); // Updated ID if button is used

  const sectionsMap = {
    "home": "home",
    "welcome": "home",
    "department": "departments",
    "departments": "departments",
    "doctor": "doctors",
    "doctors": "doctors",
    "physician": "doctors",
    "service": "services",
    "services": "services",
    "shop": "shop",
    "product": "shop",
    "products": "shop",
    "medicine": "shop",
    "medicines": "shop",
    "article": "blog",
    "blog": "blog",
    "contact": "contact",
    "support": "contact",
    "help": "contact"
  };

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    let matchedSectionId = null;

    for (let keyword in sectionsMap) {
      if (query.includes(keyword)) {
        matchedSectionId = sectionsMap[keyword];
        break;
      }
    }

    if (matchedSectionId && document.getElementById(matchedSectionId)) {
      document.getElementById(matchedSectionId).scrollIntoView({ behavior: "smooth" });
    } else {
      alert("No matching section found!");
    }
  }

  // Event: Click on search icon
  if (searchIcon) {
    searchIcon.addEventListener("click", handleSearch);
  }

  // Event: Enter key on search input
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    });
  }

  // ============================
  // 2. Add to Cart Functionality
  // ============================
  const cartButtons = document.querySelectorAll('.product-card button');

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product-card').querySelector('h4')?.textContent || 'Product';
      alert(`${product} added to cart!`);
    });
  });

  // ============================
  // 3. Appointment Form Submission
  // ============================
  const appointmentForm = document.querySelector('.appointment form');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Appointment submitted successfully! Our team will contact you shortly.');
      appointmentForm.reset();
    });
  }

  // ============================
  // 4. Footer Email Subscription
  // ============================
  const subscribeBtn = document.querySelector('.footer-col .btn');
  const subscribeInput = document.querySelector('.footer-col input[type="email"]');

  if (subscribeBtn && subscribeInput) {
    subscribeBtn.addEventListener('click', () => {
      const email = subscribeInput.value.trim();
      if (email !== '') {
        alert(`Subscribed successfully with email: ${email}`);
        subscribeInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  // ============================
  // 5. Scroll to Top Button
  // ============================
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      if (scrollTopBtn) scrollTopBtn.style.display = 'block';
    } else {
      if (scrollTopBtn) scrollTopBtn.style.display = 'none';
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
