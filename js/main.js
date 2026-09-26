const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const menuAbierto = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", menuAbierto);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll("#proyectos .project-card");
const projectCount = document.querySelector(".project-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleProjects = 0;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "todos" || categories.includes(filter);

      if (shouldShow) {
        card.classList.remove("is-hidden");
      } else {
        card.classList.add("is-hidden");
      }

      if (shouldShow) {
        visibleProjects += 1;
      }
    });

    if (projectCount) {
      projectCount.textContent = `0${visibleProjects} / 03`;
    }
  });
});

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#correo").value.trim();
    const subject = document.querySelector("#asunto").value.trim();
    const message = document.querySelector("#mensaje").value.trim();

    if (!name || !email || !subject || !message) {
      formStatus.textContent = "Completa todos los campos.";
      return;
    }

    if (/\d/.test(name)) {
      formStatus.textContent = "El nombre no debe contener numeros.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formStatus.textContent = "Escribe un correo valido.";
      return;
    }

    if (message.length < 20) {
      formStatus.textContent = "El mensaje debe tener al menos 20 caracteres.";
      return;
    }

    formStatus.textContent = "Mensaje registrado correctamente.";
    contactForm.reset();
  });
}

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("is-visible");
    } else {
      backToTopButton.classList.remove("is-visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
