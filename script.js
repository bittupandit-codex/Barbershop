// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value;


    if (name === "" || phone === "" || service === "") {

        alert("Please fill all required fields.");

        return;

    }


    // WhatsApp number
    const whatsappNumber = "919876543210";


    const whatsappMessage =
        `Hello DESIGER MENS PARLOUR,%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Service: ${service}%0A` +
        `Message: ${message}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );


    contactForm.reset();

});


// ================= SCROLL ANIMATION =================

const cards =
    document.querySelectorAll(
        ".service-card, .gallery-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all .6s ease";

    observer.observe(card);

});