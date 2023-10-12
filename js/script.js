class Memorama {
    
    constructor() {
        this.totalTarjetas = [];  //total targetas
        this.numeroTarjetas = 0;
        this.verificadorTarjetas = [];
        this.errores = 0;
        this.nivelDificultad = "";
        this.imagenesCorrectas = [];
        this.agregadorTarjetas = [];

        this.$contenedorGeneral = document.querySelector('.contenedor-general');
        this.$contenedorTarjetas = document.querySelector('.contenedor-tarjetas');
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
        this.totalTarjetas = data;
        if (this.totalTarjetas.length > 0) {
            this.totalTarjetas.sort(orden);
            function orden(a , b ) {
                return Math.random() - 0.5;
            }
        }
        this.numeroTarjetas = this.totalTarjetas.length;

        let html = '';
        this.totalTarjetas.forEach( card => {
            html += `<div class="tarjeta">
                        <img class="tarjeta-img" src=${card.src} alt="imagen memorama">
                    </div>`; 
        })
        this.$contenedorTarjetas.innerHTML = html;
        console.log(html)
    }
}

new Memorama();