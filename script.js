document.getElementById('calculate-button').addEventListener('click', function() {
    const kills = parseInt(document.getElementById('kills').value);
    const deaths = parseInt(document.getElementById('deaths').value);
    const assists = parseInt(document.getElementById('assists').value);

    // Calculamos cuántos asesinatos adicionales se suman por las asistencias (5 asistencias = 1 asesinato)
    const extraKillsFromAssists = Math.floor(assists / 5);

    // Total de asesinatos, sumando los extra por asistencias
    const totalKills = kills + extraKillsFromAssists;

    // Cada 3 asesinatos reduce 1 muerte
    const reducedDeaths = Math.floor(totalKills / 3);

    // Muertes netas después de aplicar los asesinatos como descuento
    let netDeaths = deaths - reducedDeaths;

    // Asegurarse de que no sea negativo
    if (netDeaths < 0) {
        netDeaths = 0;
    }

    // Lista ampliada de castigos con descripciones
    const punishments = [
        { name: '10 flexiones', description: 'Apoya las manos y pies en el suelo, y baja el pecho hacia el suelo manteniendo el cuerpo recto, luego sube.' },
        { name: '15 segundos de plancha', description: 'Apoya antebrazos y puntas de los pies en el suelo, mantén el cuerpo recto y tenso.' },
        { name: '20 abdominales', description: 'Acuéstate boca arriba, flexiona las rodillas y eleva el torso hacia las rodillas.' },
        { name: '10 sentadillas', description: 'Párate con los pies separados a la anchura de los hombros, baja la cadera como si te sentaras y vuelve a subir.' },
        { name: '30 segundos de sentadilla contra la pared', description: 'Apoya la espalda en la pared y deslízate hasta que las piernas formen un ángulo de 90 grados.' },
        { name: '15 zancadas (alternando piernas)', description: 'Da un paso hacia adelante y baja la rodilla trasera hacia el suelo, alternando piernas.' },
        { name: '10 burpees', description: 'Desde de pie, baja a una sentadilla, haz una flexión y luego salta con los brazos arriba.' },
        { name: '30 segundos de saltos en estrella', description: 'Salta abriendo piernas y brazos, formando una estrella en el aire.' },
        { name: '20 abdominales bicicleta', description: 'Acuéstate y lleva los codos opuestos a las rodillas en movimiento de pedaleo.' },
        { name: '15 extensiones de cadera (por pierna)', description: 'Acuéstate de lado y levanta la pierna hacia arriba y hacia atrás, trabajando glúteos.' },
        { name: '30 segundos de escalador', description: 'En posición de plancha, lleva las rodillas al pecho alternadamente a alta velocidad.' },
        { name: '20 elevaciones de pierna', description: 'Acuéstate boca arriba y levanta ambas piernas juntas hacia el techo.' },
        { name: '15 segundos de superman', description: 'Acuéstate boca abajo y eleva piernas y brazos al mismo tiempo.' },
        { name: '20 giros rusos', description: 'Sentado en el suelo, inclina el torso y gira de lado a lado con las manos juntas.' },
        { name: '15 segundos de puente lateral (por lado)', description: 'Apoya un antebrazo en el suelo y mantén el cuerpo recto de lado, levantando la cadera.' },
        { name: '20 jumping jacks', description: 'Salta abriendo y cerrando piernas y brazos en cada salto.' },
        { name: '10 fondos de tríceps en el suelo', description: 'Sentado en el suelo, apoya las manos y levanta el cuerpo, luego baja y sube usando los tríceps.' },
        { name: '10 patadas de glúteo (por pierna)', description: 'A gatas, extiende una pierna hacia atrás y hacia arriba.' },
        { name: '20 segundos de tijeras', description: 'Acuéstate y alterna levantando y bajando las piernas en forma de tijera.' }
    ];

    // Seleccionar un castigo aleatorio de la lista
    const randomPunishment = punishments[Math.floor(Math.random() * punishments.length)];

    // Mostramos el resultado con la descripción del ejercicio
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Debes cumplir con ${netDeaths} castigo(s). <br> Castigo sugerido: ${randomPunishment.name}.<br>Descripción: ${randomPunishment.description}`;
});
