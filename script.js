document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to my personal website, I hope you enjoy what you find here.";
    const textElement = document.getElementById("welcome-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Typing speed (adjust as needed)
        }
    }

    type();
});
