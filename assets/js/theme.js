var icon = document.getElementById('theme');
var font = document.querySelector('#font');
icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    // document.header.classList.toggle('dark-theme')
    // font.classList.toggle('fa fa-sun-o')
    if (document.body.classList.contains("dark-theme")) {
        icon.innerHTML = "<i class='fa fa-sun-o' id='font'></i>";
    } else {
        icon.innerHTML = "<i class='fa fa-moon-o' id='font'></i>";
    }

})