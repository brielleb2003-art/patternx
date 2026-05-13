document.addEventListener("DOMContentLoaded", () => {
    console.log("PATTERNX system initialized.");

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});
