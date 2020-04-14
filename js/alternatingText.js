const altText = [ 'Your mom', 'software engineer', 'web developer' ];
const counter = 0;
const textVar = $('#alternatingText');
const i = 0;
setInterval(change, 1000);

$(function change() {
	textVar.text(altText[counter]);
});
