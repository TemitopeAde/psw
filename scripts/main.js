var img = document.getElementById('image');
var width = window.innerWidth;

// if (width => 830) {
//     // img.style.display = 'block';
//     img.src = "/images/new.png";
// }

if (width => 1024) {
    img.src = "/images/new.png";
}


if (width <= 830) {
    img.style.display = 'block';
    img.src = "/images/Layer 27 (6).png"
} 