// assets/js/script-jogo.js
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SETUP INICIAL ---
    const urlParams = new URLSearchParams(window.location.search);
    const timeId = urlParams.get('time');
    const managerName = localStorage.getItem('futtycoon_manager_name') || "Manager";
    const managerProfile = localStorage.getItem('futtycoon_manager_profile');

    let clubeData, ligaData, adversario;

    function carregarDados() {
        for (const idLiga in TIMES) {
            const time = TIMES[idLiga].find(t => t.id === timeId);
            if (time) {
                clubeData = time;
                ligaData = LIGAS[idLiga];
                adversario = TIMES[idLiga].find(t => t.id !== timeId) || { nome: "Adversário" };
                return true;
            }
        }
        return false;
    }

    // --- 2. FUNÇÕES PARA POPULAR A TELA ---
    function popularCabecalho() {
        document.getElementById('manager-name').textContent = managerName;
        document.getElementById('club-name').textContent = clubeData.nome;
        document.getElementById('current-date').textContent = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    function popularPainelAcao() {
        document.getElementById('next-match-home').textContent = clubeData.nome;
        document.getElementById('next-match-away').textContent = adversario.nome;
        document.getElementById('next-match-league').textContent = ligaData.nome;
        document.getElementById('next-match-date').textContent = "Domingo, 16 de Julho"; // Exemplo
    }

    function popularWidgets() {
        // Tabela
        const tabelaEl = document.getElementById('mini-league-table');
        tabelaEl.innerHTML = `
            <thead><tr><th>Pos</th><th>Clube</th><th>Pts</th></tr></thead>
            <tbody>
                <tr><td>1</td><td>${clubeData.nome}</td><td>10</td></tr>
                <tr><td>2</td><td>Palmeiras</td><td>9</td></tr>
                <tr><td>3</td><td>Corinthians</td><td>7</td></tr>
            </tbody>`;

        // Finanças
        document.getElementById('finance-balance').textContent = `R$ ${clubeData.orcamento.toLocaleString('pt-BR')}`;

        // Barras de Status
        document.getElementById('morale-bar').style.width = '85%';
        document.getElementById('fitness-bar').style.width = '90%';
    }

    function popularFeed() {
        const feedList = document.getElementById('feed-list');
        feedList.innerHTML = ''; // Limpa o feed

        // Adiciona mensagem de boas-vindas da diretoria
        let bonusMessage = `Bem-vindo ao comando do ${clubeData.nome}! A diretoria espera que você cumpra os objetivos.`;
        feedList.innerHTML += `
            <li class="feed-item">
                <p class="feed-source fonte-rg">[DIRETORIA]</p>
                <h4 class="feed-title">Contrato Assinado</h4>
                <p class="feed-body">${bonusMessage}</p>
            </li>`;
        
        // Adiciona uma notícia de exemplo
        feedList.innerHTML += `
            <li class="feed-item">
                <p class="feed-source fonte-chorume">[CHORUME DO GRÊMIO]</p>
                <h4 class="feed-title">Expectativa para a temporada!</h4>
                <p class="feed-body">Com ${managerName} no comando, a torcida espera que o time finalmente brigue por títulos novamente. A pressão é grande!</p>
            </li>`;
    }

    // --- 3. INICIALIZAÇÃO ---
    if (carregarDados()) {
        popularCabecalho();
        popularPainelAcao();
        popularWidgets();
        popularFeed();
    } else {
        alert("Erro ao carregar dados do jogo!");
        window.location.href = 'index.html';
    }
});