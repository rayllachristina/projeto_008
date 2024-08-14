function updateClock() {
    const now = new Date(); // Obtém a data e hora atual
    const hours = now.getHours().toString().padStart(2, '0'); // Formata as horas para sempre ter dois dígitos
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Formata os minutos para sempre ter dois dígitos
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Formata os segundos para sempre ter dois dígitos

    // Atualiza o conteúdo dos elementos HTML com os valores formatados
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Define um intervalo para atualizar o relógio a cada segundo (1000 milissegundos)
setInterval(updateClock, 1000);

// Chama a função imediatamente para garantir que o relógio seja atualizado assim que a página carregar
updateClock();
