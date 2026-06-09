document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        e.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});
const text = "Welcome to Our Group Website!";
let index = 0;





