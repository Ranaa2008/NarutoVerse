document.addEventListener("DOMContentLoaded", function () {
    const infoSection = document.querySelector(".info-container-div");

    function handleScroll() {
        const sectionPos = infoSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            infoSection.classList.add("show");
        } else {
            infoSection.classList.remove("show");
        }
    }

    window.addEventListener("scroll", handleScroll);
});