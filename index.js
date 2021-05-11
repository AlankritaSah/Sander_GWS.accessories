const images = [
	"banner2.webp",
	"banner3.webp",
	"banner4.webp",
];

for(let i=0; i<3; i++) {
	// using JQuery
	$(".divproducts").append("<img src='" + images[i] + "' alt='product' />");
}
