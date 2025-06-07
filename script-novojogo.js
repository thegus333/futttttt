// script-novojogo.js

// Espera todo o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. PEGAR OS ELEMENTOS DO HTML
    // Pega todos os cards que podem ser escolhidos
    const avatarCards = document.querySelectorAll('.avatar-card');
    // Pega o botão de confirmar/continuar
    const btnContinue = document.getElementById('btn-continue');
    
    let avatarSelecionadoId = null;

    // 2. ADICIONAR A LÓGICA DE CLIQUE AOS CARDS
    // Passa por cada um dos cards e adiciona um "ouvinte" de clique
    avatarCards.forEach(card => {
        card.addEventListener('click', () => {
            
            // Primeiro, remove a seleção de QUALQUER outro card que já esteja selecionado
            avatarCards.forEach(c => c.classList.remove('selected'));
            
            // Adiciona a classe 'selected' APENAS no card que foi clicado
            card.classList.add('selected');

            // Guarda o ID do avatar escolhido (vem do atributo 'data-avatar-id' no HTML)
            avatarSelecionadoId = card.dataset.avatarId;
            console.log('Perfil de Manager escolhido:', avatarSelecionadoId);

            // HABILITA o botão de "Confirmar Escolha"
            btnContinue.disabled = false;
        });
    });

    // 3. ADICIONAR A AÇÃO DE NAVEGAÇÃO AO BOTÃO
    // Adiciona um "ouvinte" de clique ao botão de confirmar
    btnContinue.addEventListener('click', () => {
        // Só continua se um avatar tiver sido realmente selecionado
        if (avatarSelecionadoId !== null) {
            console.log('Confirmando escolha e navegando para a seleção de ligas...');

            // A linha que te leva para a próxima tela!
            window.location.href = 'selecao-liga.html';
        }
    });

});