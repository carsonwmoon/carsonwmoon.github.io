document.querySelectorAll('.toggle').forEach(toggle => {

    toggle.querySelectorAll('.toggleContent').forEach(toggleContent => {
        toggleContent.style.display = "none";
    });

    toggle.querySelectorAll('.triangle').forEach(triangle => {
        triangle.addEventListener('click', (e) => {
            toggle.querySelectorAll('.toggleContent').forEach(toggleContent => {
                if (toggleContent.style.display === "block") {
                    triangle.style.transform = "rotateZ(180deg)";
                    toggleContent.style.display = "none";
                } else {
                    triangle.style.transform = "rotateZ(0deg)";
                    toggleContent.style.display = "block";
                }
            });
        })
    });
});

