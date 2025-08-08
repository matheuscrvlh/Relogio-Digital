function pegarHorario() {
    const agora = new Date();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();

    const horario = `${hora}:${minuto}`;
    document.querySelector('.display').textContent = horario;
}

setInterval(pegarHorario, 1000);
pegarHorario();
