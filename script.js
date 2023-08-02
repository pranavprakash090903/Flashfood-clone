console.log("Welcome to my clone website");
const button = document.getElementById('myButton');
button.addEventListener('mouseover', () => {
    button.style.transform = 'translate(20px, 20px)';

});
button.addEventListener('mouseout', () => {
    button.style.transform = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
function jumpToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}
