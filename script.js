    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll("nav ul li a");
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector("nav ul");

    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

    
      let current = "";
      document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });

    
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
      hamburger.classList.toggle("open");
    });

  
