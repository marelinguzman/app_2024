let lista_de_juegos =[
    {
        nombre: 'Memoria',
        icono: 'https://img.freepik.com/fotos-premium/bonita-imagen-rosa-roja-fondo-pantalla_228371-10.jpg',
        link: 'https://marelinguzman.github.io/Juego-de-memori-2024/'
    },
    {
        nombre: 'Memoria',
        icono: 'https://img.freepik.com/fotos-premium/bonita-imagen-rosa-roja-fondo-pantalla_228371-10.jpg',
        link: 'https://marelinguzman.github.io/Juego-de-memori-2024/'
    },
    {
        nombre: 'Memoria',
        icono: 'https://img.freepik.com/fotos-premium/bonita-imagen-rosa-roja-fondo-pantalla_228371-10.jpg',
        link: 'https://marelinguzman.github.io/Juego-de-memori-2024/'
    },
    {
        nombre: 'Memoria',
        icono: 'https://img.freepik.com/fotos-premium/bonita-imagen-rosa-roja-fondo-pantalla_228371-10.jpg',
        link: 'https://marelinguzman.github.io/Juego-de-memori-2024/'
    },
    {
        nombre: 'Memoria',
        icono: 'https://img.freepik.com/fotos-premium/bonita-imagen-rosa-roja-fondo-pantalla_228371-10.jpg',
        link: 'https://marelinguzman.github.io/Juego-de-memori-2024/'
    },
    {
        nombre: 'Memoria',
        icono: 'https://img.freepik.com/fotos-premium/bonita-imagen-rosa-roja-fondo-pantalla_228371-10.jpg',
        link: 'https://marelinguzman.github.io/Juego-de-memori-2024/'
    }
]

function desplegar_opciones(){

    let box_menu = document.querySelector(".menu");

    lista_de_juegos.forEach((cada_elemento)=>{

        let div = document.createElement("div");
        div.classList.add("div_item");

        div.innerHTML =`

            <a href="${cada_elemento.link}">
            <div class="box_img">
                <img src="${cada_elemento.icono}">
            </div>
            <span>
                ${cada_elemento.nombre}">
            </span>
            </a>
        `;

        box_menu.appendChild(div);
    });
}

desplegar_opciones();