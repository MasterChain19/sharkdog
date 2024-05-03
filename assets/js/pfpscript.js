const images = [];

for (let i = 1; i <= 666; i++) {
    images.push(`assets/pfp/${i}.png`);
}

function loadRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById('randomImage').src = images[randomIndex];
}