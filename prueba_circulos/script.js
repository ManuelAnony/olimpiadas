const circles = document.querySelectorAll('.circle');

// Define el contenido único para cada círculo
const circleContents = [
    {
        title: 'NUMÉRICO',
        info: 'La comprensión del uso y de los significados de los números y de la numeración; la comprensión del sentido y significado de las operaciones y de las relaciones entre números, y el desarrollo de diferentes técnicas de cálculo y estimación.'
    },
    {
        title: 'ESPACIAL',
        info: 'El conjunto de los procesos cognitivos mediante los cuales se construyen y se manipulan las representaciones mentales de los objetos del espacio, las relaciones entre ellos, sus transformaciones, y sus diversas traducciones o representaciones materiales.'
    },
    {
        title: 'MÉTRICO O MEDIDA',
        info: 'La comprensión general que tiene una persona sobre las magnitudes y las cantidades, su medición y el uso flexible de los sistemas métricos o de medidas en diferentes situaciones.'
    },
    {
        title: 'PROBABILÍSTICO',
        info: 'La toma de decisiones en situaciones de incertidumbre, de azar, de riesgo o de ambigüedad por falta de información confiable, en las que no es posible predecir con seguridad lo que va a pasar. El pensamiento aleatorio se apoya directamente en conceptos y procedimientos de la teoría de probabilidades y de la estadística inferencial, e indirectamente en la estadística descriptiva y en la combinatoria.'
    },
    {
        title: 'VARIACIONAL',
        info: 'El reconocimiento, la percepción, la identificación y la caracterización de la variación y el cambio en diferentes contextos, así como con su descripción, modelación y representación en distintos sistemas o registros simbólicos, ya sean verbales, icónicos, gráficos o algebraicos.'
    }
];

circles.forEach((circle, index) => {
    let isOpen = false; // Estado para rastrear si se ha hecho clic

    // Mostrar el título al hacer clic
    circle.addEventListener('click', () => {
        if (!isOpen) {
            const titleBox = document.createElement('div');
            titleBox.classList.add('title-box');
            titleBox.textContent = circleContents[index].title;
            circle.appendChild(titleBox);

            isOpen = true; // Cambia el estado a "abierto"
        } else {
            // Al hacer clic nuevamente, muestra la información adicional
            const infoBox = document.createElement('div');
            infoBox.classList.add('info-box');
            infoBox.textContent = circleContents[index].info;
            circle.appendChild(infoBox);
        }
    });
});
