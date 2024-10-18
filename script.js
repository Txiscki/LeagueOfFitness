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

    // Mostramos el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Debes cumplir con ${netDeaths} castigo(s).`;
});
