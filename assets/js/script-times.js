// assets/js/script-times.js
document.addEventListener('DOMContentLoaded', () => {
    // Pega o ID da liga da URL (ex: ?liga=bra-a)
    const urlParams = new URLSearchParams(window.location.search);
    const ligaId = urlParams.get('liga');

    // Se não encontrar o ID ou a liga no nosso 'banco de dados', volta para a página anterior
    if (!ligaId || !LIGAS[ligaId]) {
        alert('Liga não encontrada!');
        window.location.href = 'selecao-liga.html';
        return;
    }
// assets/js/script-times.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ligaId = urlParams.get('liga');

    if (!ligaId || !LIGAS[ligaId]) {
        alert('Liga não encontrada!');
        window.location.href = 'selecao-liga.html';
        return;
    }

    const ligaData = LIGAS[ligaId];
    document.getElementById('nome-liga').textContent = ligaData.nome;
    const timesGrid = document.getElementById('times-grid');

    ligaData.times.forEach(time => {
        const cardLink = document.createElement('a');
        cardLink.href = `jogo.html?time=${time.id}`;
        cardLink.className = 'card-link';

      

        cardLink.innerHTML = `
            <div class="card-time">
                <img src="assets/img/logos/${time.id}.png" alt="${time.nome}">
                <h3>${time.nome}</h3>
                <div class="card-forca">Força: ${time.forca}</div>
            </div>`;
        
        timesGrid.appendChild(cardLink);
    });
});
    // Pega os dados da liga correta
    const ligaData = LIGAS[ligaId];

    // Atualiza o subtítulo da página com o nome da liga
    document.getElementById('nome-liga').textContent = ligaData.nome;

    const timesGrid = document.getElementById('times-grid');

    // Cria um card para cada time da liga selecionada
    ligaData.times.forEach(time => {
        const cardLink = document.createElement('a');
        cardLink.href = `jogo.html?time=${time.id}`; // O link para iniciar o jogo
        cardLink.className = 'card-link';

        // Preenche o HTML do card com os dados do time
        cardLink.innerHTML = `
            <div class="card-time">
                <img src="assets/img/logos/${time.id}.png" alt="${time.nome}">
                <h3>${time.nome}</h3>
                <div class="card-forca">Força: ${time.forca}</div>
            </div>`;
        
        timesGrid.appendChild(cardLink);
    });
});