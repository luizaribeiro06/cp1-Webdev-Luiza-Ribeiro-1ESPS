function calcular() {
    let hIni = parseInt(document.getElementById("horaIni").value) || 0;
    let mIni = parseInt(document.getElementById("minIni").value) || 0;
    let hFim = parseInt(document.getElementById("horaFim").value) || 0;
    let mFim = parseInt(document.getElementById("minFim").value) || 0;

    //cálculo minutos
    let totalMinInicio = hIni * 60 + mIni;
    let totalMinFim = hFim * 60 + mFim;

    //se min final for menos que min inicial, tem que manejar para horas não ficar esquisito
    if (totalMinFim < totalMinInicio) {
        totalMinFim += 24 * 60; 
    }

    //cálculo duração
    let duracaoMin = totalMinFim - totalMinInicio;
    let hrs = Math.floor(duracaoMin / 60); //Math.floor = número decimal
    let mins = duracaoMin % 60;

    document.getElementById("horas").textContent = String(hrs).padStart(2, '0');
    document.getElementById("minutos").textContent = String(mins).padStart(2, '0'); //pad.start = usei para deixar o 0 aantes se for menor q 10, horas e min
}
