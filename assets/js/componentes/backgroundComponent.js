export function iniciarFondo() {
    const fondo = document.getElementById('background');
    const datosCirculos = [];

    function crearCirculoSVG(x, y, radio) {
        const svgNS = "http://www.w3.org/2000/svg";
        const circulo = document.createElementNS(svgNS, "circle");
        circulo.setAttribute("cx", x);
        circulo.setAttribute("cy", y);
        circulo.setAttribute("r", radio);
        circulo.setAttribute("fill", "rgba(235, 229, 255, 1)");
        return circulo;
    }

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", window.innerWidth);
    svg.setAttribute("height", window.innerHeight);
    svg.setAttribute("class", "absolute inset-0");

    for (let i = 0; i < 30; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const radio = Math.random() * 40 + 10;
        const circulo = crearCirculoSVG(x, y, radio);

        const datosCirculo = {
            elemento: circulo,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        };

        datosCirculos.push(datosCirculo);
        svg.appendChild(circulo);
    }

    fondo.appendChild(svg);

    function animarCirculos() {
        datosCirculos.forEach((datos) => {
            const circulo = datos.elemento;
            let cx = parseFloat(circulo.getAttribute('cx'));
            let cy = parseFloat(circulo.getAttribute('cy'));

            cx += datos.dx;
            cy += datos.dy;

            if (cx <= 0 || cx >= window.innerWidth) datos.dx *= -1;
            if (cy <= 0 || cy >= window.innerHeight) datos.dy *= -1;

            circulo.setAttribute('cx', cx);
            circulo.setAttribute('cy', cy);
        });

        requestAnimationFrame(animarCirculos);
    }

    animarCirculos();

    window.addEventListener('resize', () => {
        svg.setAttribute("width", window.innerWidth);
        svg.setAttribute("height", window.innerHeight);
    });
}
