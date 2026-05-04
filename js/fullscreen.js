const img = document.querySelectorAll(".bild").forEach(img => 
    img.addEventListener('click', () => {
        if (img.requestFullscreen) {
    img.requestFullscreen();
    };
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}));
