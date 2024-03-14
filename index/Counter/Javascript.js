let add = document.getElementById('Økning');
let remove = document.getElementById('Forminskelse');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function () {
    integer += 1;
    int.innerHTML = integer;
})

remove.addEventListener('click', function () {
    integer -= 1;
    int.innerHTML = integer;
})

/**/