class Memorama {
    
    constructor() {
        this.totalTargetas = [];  //total targetas
        this.numeroTargetas = 0;
        this.verificadorTargetas = [];
        this.errores = 0;
        this.nivelDificultad = "";
        this.imagenesCorrectas = [];
        this.agregadorTargetas = [];

        this.$contenedorGeneral = document.querySelector('.contenedor-general');
        this.$contenedorTargetas = document.querySelector('.contenedor-targetas');
        this.$pantallaBloqueada = document.querySelector('.pantalla-bloqueada')
        this.$mensaje = document.querySelector('h2.mensaje');
        //llamado a los eventos
        this.eventos()
    }
    eventos() {
        window.addEventListener('DOMContentLoaded', () => {
            this.cargaPantalla();
        })
    }

    //targetas en orden aleatorio
    async cargaPantalla() {
        const respuesta = await fetch('../memo.json')
        const data = await respuesta.json();
        this.totalTargetas = data;
        if (this.totalTargetas.length > 0) {
            this.totalTargetas.sort(orden);
            function orden(a , b ) {
                return Math.random() - 0.5;
            }
        }
        this.numeroTargetas = this.totalTargetas.length;

        let html = '';
        this.totalTargetas.forEach( card => {
            html += `<div class="targeta">
                        <img class="tarjeta-img" src=${card.src} alt="imagen memorama">
                    </div>`;
        })
        this.$contenedorTargetas.innerHTML = html
    }
}

new Memorama();