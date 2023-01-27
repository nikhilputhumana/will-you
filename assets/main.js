const nbutton = document.getElementById('no-btn');
const ybutton = document.getElementById('y-btn');

nbutton.addEventListener('mouseover', function () {
    nbutton.style.left = `${Math.ceil(Math.random() * 90)}%`;
    nbutton.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

ybutton.addEventListener('click', function () {
    alert('   😍 I knew it! Love you too 😘  ');
})