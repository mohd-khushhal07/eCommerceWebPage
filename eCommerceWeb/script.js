const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-links");

if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("navlist-active");
        hamburger.classList.toggle("active");
    });
}

const blogBoxes = document.querySelectorAll(".blog-box");

blogBoxes.forEach((box) => {
    const content = box.querySelector(".blog-content");

    if (content) {
        box.addEventListener("mouseenter", () => {
            content.classList.add("active");
        });

        box.addEventListener("mouseleave", () => {
            content.classList.remove("active");
        });
    }
});

const cartBtns = document.querySelectorAll(".add-to-cart");
const cartCountEl = document.querySelector(".cart-count");
let cartCount = 0;

cartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        cartCount++;
        if (cartCountEl) cartCountEl.textContent = cartCount;

        btn.textContent = "Added!";
        btn.style.backgroundColor = "#333";

        setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.style.backgroundColor = "";
        }, 1500);
    });
});

const form = document.querySelector("form");
const emailInput = document.querySelector("#email");

if (form && emailInput) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            alert("Please enter your email!");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email!");
            return;
        }

        alert(`Thanks for subscribing, ${email}!`);
        emailInput.value = "";
    });
}
