// Example of adding a simple hover effect on services
document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseenter", function() {
            service.style.transform = "scale(1.05)";
            service.style.transition = "transform 0.3s ease";
        });

        service.addEventListener("mouseleave", function() {
            service.style.transform = "scale(1)";
        });
    });
});
