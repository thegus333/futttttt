// assets/js/engine.js

// O 'GameState' guarda todas as informações da carreira atual. É o nosso "save".
let GameState = {};

/**
 * Encontra um time pelo seu ID em qualquer liga.
 * @param {string} timeId - O ID do time (ex: "gremio").
 * @returns {object|null} O objeto completo do time ou null se não for encontrado.
 */
function encontrarTimePorId(timeId) {
    for (const idLiga in TIMES) {
        const time = TIMES[idLiga].find(t => t.id === timeId);
        if (time) return time;
    }
    return null; // Retorna null se não encontrar em nenhuma liga
}

/**
 * Encontra os dados de uma liga com base no ID de um time.
 * @param {string} timeId - O ID do time.
 * @returns {object|null} O objeto da liga ou null.
 */
function encontrarLigaPorTimeId(timeId) {
    for (const idLiga in TIMES) {
        const time = TIMES[idLiga].find(t => t.id === timeId);
        if (time) return LIGAS[idLiga];
    }
    return null;
}

/**
 * Inicia uma nova carreira, populando o GameState com dados iniciais.
 * @param {string} clubeId - O ID do clube escolhido.
 * @param {string} managerName - O nome do manager.
 * @param {string} managerProfile - O perfil do manager.
 */
function iniciarNovaCarreira(clubeId, managerName, managerProfile) {
    const timeEscolhido = encontrarTimePorId(clubeId);
    const ligaDoTime = encontrarLigaPorTimeId(clubeId);

    if (!timeEscolhido || !ligaDoTime) {
        alert("Erro ao iniciar carreira: time ou liga não encontrados!");
        return;
    }

    GameState = {
        manager: { nome: managerName, perfil: managerProfile },
        clube: { ...timeEscolhido }, // Copia todos os dados do time
        liga: { ...ligaDoTime },     // Copia todos os dados da liga
        dataAtual: new Date('2025-01-01'),
        calendario: [],
        tabela: [],
        noticias: []
    };

    console.log("Nova Carreira Iniciada:", GameState);
}

/**
 * O motor de simulação de partida, agora usando a função de busca correta.
 * @param {string} timeCasaId - O ID do time da casa.
 * @param {string} timeForaId - O ID do time de fora.
 * @returns {object} Um objeto com o placar final.
 */
function simularPartida(timeCasaId, timeForaId) {
    // CORREÇÃO: Usa a função de busca que procura em todas as ligas.
    const timeCasa = encontrarTimePorId(timeCasaId);
    const timeFora = encontrarTimePorId(timeForaId);

    if (!timeCasa || !timeFora) {
        console.error("Erro na simulação: um dos times não foi encontrado.", timeCasaId, timeForaId);
        return { golsCasa: 0, golsFora: 0 }; // Retorna um resultado padrão em caso de erro
    }
    
    // Calcula o overall médio de cada time (considerando a falta de 'overall' nos seus dados)
    const overallCasa = timeCasa.jogadores.length > 0 ? timeCasa.jogadores.reduce((acc, p) => acc + (p.overall || 70), 0) / timeCasa.jogadores.length : 70;
    const overallFora = timeFora.jogadores.length > 0 ? timeFora.jogadores.reduce((acc, p) => acc + (p.overall || 70), 0) / timeFora.jogadores.length : 70;
    
    let golsCasa = 0;
    let golsFora = 0;

    // Lógica de gols simples baseada no overall e um pouco de sorte
    const diferencaOverall = overallCasa - overallFora;
    const chanceBaseCasa = 1.5 + (diferencaOverall / 10); // Bônus/pênalti pela diferença de qualidade
    const chanceBaseFora = 1.5 - (diferencaOverall / 10);

    for (let i = 0; i < 5; i++) { // Menos "chances", placares mais realistas
        if (Math.random() < chanceBaseCasa / 5) golsCasa++;
        if (Math.random() < chanceBaseFora / 5) golsFora++;
    }

    console.log(`Resultado: ${timeCasa.nome} ${golsCasa} x ${golsFora} ${timeFora.nome}`);
    return { golsCasa, golsFora };
}

// As outras funções (avancarDia, gerarCalendario, etc.) podem ser construídas a partir daqui,
// usando esta base corrigida e funcional.