let isDarkMode = false;

function changeImage(imageSrc) {
    document.getElementById('largeImage').src = imageSrc;
}

function toggleDarkMode() {
    const largeImage = document.getElementById('largeImage');
    const button = document.getElementById('toggleButton');

    if (isDarkMode) {
        largeImage.style.filter = 'none';
        button.textContent = '变暗';
    } else {
        largeImage.style.filter = 'brightness(50%)';
        button.textContent = '变亮';
    }

    isDarkMode = !isDarkMode;
}
