document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchInput = document.querySelector(".search__input");
    const searchButton = document.getElementById("search-button");
    const searchIcon = document.querySelector(".search__icon");
    const closeIcon = document.querySelector(".search__close");

    searchButton.addEventListener("click", function () {
        if (searchBar.classList.contains("active")) {
            // Collapse search bar
            searchBar.classList.remove("active");
            searchInput.style.opacity = "0";
            searchInput.style.pointerEvents = "none";
            closeIcon.style.opacity = "0";
            searchIcon.style.opacity = "1";
            searchInput.value = ""; // Clear input
        } else {
            // Expand search bar to the left
            searchBar.classList.add("active");
            searchInput.style.opacity = "1";
            searchInput.style.pointerEvents = "auto";
            closeIcon.style.opacity = "1";
            searchIcon.style.opacity = "0";
            searchInput.focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && searchBar.classList.contains("active")) {
            searchBar.classList.remove("active");
            searchInput.style.opacity = "0";
            searchInput.style.pointerEvents = "none";
            closeIcon.style.opacity = "0";
            searchIcon.style.opacity = "1";
            searchInput.value = "";
        }
});


    // Close search when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && searchBar.classList.contains("active")) {
            searchBar.classList.remove("active");
            searchInput.style.opacity = "0";
            searchInput.style.pointerEvents = "none";
            closeIcon.style.opacity = "0";
            searchIcon.style.opacity = "1";
            searchBar.style.width = "40px";
            searchInput.value = "";
        }
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.querySelector('.close'); // Ensure correct selector

    if (bar) { 
        bar.addEventListener('click', () => {
            if (nav) {
                nav.classList.toggle('active');
            }
        });
    }

    if (close) { 
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});
