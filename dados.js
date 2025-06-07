// dados.js

const ligas = [
    // --- CONMEBOL (América do Sul) ---
    {
        id: 'br_serie_a',
        nome: 'Brasil - Série A',
        pais: 'Brasil',
        continente: 'CONMEBOL',
        descricao: 'A elite do futebol brasileiro, com os maiores clubes do país.',
        imagem: './assets/logo_brasileirao.png',
        campeao_recente: 'Palmeiras',
        maior_campeao: 'Palmeiras (12 títulos)',
        curiosidade: 'É uma das ligas mais equilibradas do mundo, tendo tido 7 campeões diferentes nos últimos 10 anos.'
    },
    {
        id: 'br_serie_b',
        nome: 'Brasil - Série B',
        pais: 'Brasil',
        continente: 'CONMEBOL',
        descricao: 'A disputada divisão de acesso ao estrelato do futebol brasileiro.',
        imagem: './assets/logo_serie_b.png',
        campeao_recente: 'Vitória',
        maior_campeao: 'Coritiba (2 títulos)',
        curiosidade: 'Desde 2006, no formato de pontos corridos, mais de 15 clubes diferentes já foram campeões da Série B.'
    },
    {
        id: 'arg_liga',
        nome: 'Liga Argentina',
        pais: 'Argentina',
        continente: 'CONMEBOL',
        descricao: 'Rivalidade e paixão definem a principal liga da Argentina.',
        imagem: './assets/logo_afa.png',
        campeao_recente: 'River Plate',
        maior_campeao: 'River Plate (38 títulos)',
        curiosidade: 'O clássico "Superclásico" entre Boca Juniors e River Plate é considerado por muitos o maior dérbi do futebol mundial.'
    },
    {
        id: 'uru_liga',
        nome: 'Liga Uruguaia',
        pais: 'Uruguai',
        continente: 'CONMEBOL',
        descricao: 'Garra e tradição marcam o competitivo futebol uruguaio.',
        imagem: './assets/logo_auf.png',
        campeao_recente: 'Liverpool MVD',
        maior_campeao: 'Peñarol (51 títulos)',
        curiosidade: 'O Uruguai foi o país sede e o primeiro campeão da história da Copa do Mundo, em 1930.'
    },
    {
        id: 'chi_liga',
        nome: 'Liga Chilena',
        pais: 'Chile',
        continente: 'CONMEBOL',
        descricao: 'Técnica e velocidade nos gramados aos pés da Cordilheira dos Andes.',
        imagem: './assets/logo_anfp.png',
        campeao_recente: 'Huachipato',
        maior_campeao: 'Colo-Colo (33 títulos)',
        curiosidade: 'A seleção chilena é conhecida como "La Roja" e venceu a Copa América duas vezes seguidas, em 2015 e 2016.'
    },
    {
        id: 'col_liga',
        nome: 'Liga Colombiana',
        pais: 'Colômbia',
        continente: 'CONMEBOL',
        descricao: 'Futebol vibrante e talentoso, celeiro de grandes jogadores.',
        imagem: './assets/logo_dimayor.png',
        campeao_recente: 'Millonarios',
        maior_campeao: 'Atlético Nacional (17 títulos)',
        curiosidade: 'A Colômbia é famosa por seus goleiros artilheiros, como René Higuita e seus escorpiões, e Rogério Ceni do futebol colombiano, Faryd Mondragón.'
    },
    {
        id: 'ecu_liga',
        nome: 'Liga Equatoriana',
        pais: 'Equador',
        continente: 'CONMEBOL',
        descricao: 'Força física e altitude são os trunfos do futebol equatoriano.',
        imagem: './assets/logo_ligapro.png',
        campeao_recente: 'LDU Quito',
        maior_campeao: 'Barcelona SC (16 títulos)',
        curiosidade: 'Quito, casa de muitos clubes, está a 2.850 metros acima do nível do mar, dando uma grande vantagem aos times locais.'
    },
    // --- UEFA (Europa) ---
    {
        id: 'eng_pl',
        nome: 'Premier League',
        pais: 'Inglaterra',
        continente: 'UEFA',
        descricao: 'A liga mais rica e competitiva do mundo, cheia de estrelas globais.',
        imagem: './assets/logo_pl.png',
        campeao_recente: 'Manchester City',
        maior_campeao: 'Manchester United (20 títulos)',
        curiosidade: 'Apenas um time na história da Premier League conseguiu ser campeão invicto: o Arsenal na temporada 2003-04.'
    },
    {
        id: 'spa_liga',
        nome: 'La Liga',
        pais: 'Espanha',
        continente: 'UEFA',
        descricao: 'O palco dos gigantes Real Madrid e Barcelona, sinônimo de futebol arte.',
        imagem: './assets/logo_laliga.png',
        campeao_recente: 'Barcelona',
        maior_campeao: 'Real Madrid (36 títulos)',
        curiosidade: 'Lionel Messi é o maior artilheiro da história da La Liga, com mais de 470 gols, todos pelo Barcelona.'
    },
    {
        id: 'ita_serie_a',
        nome: 'Serie A',
        pais: 'Itália',
        continente: 'UEFA',
        descricao: 'Tradição, tática e defesa forte marcam o lendário futebol italiano.',
        imagem: './assets/logo_serie_a_ita.png',
        campeao_recente: 'Napoli',
        maior_campeao: 'Juventus (36 títulos)',
        curiosidade: 'O Milan (7) e a Inter de Milão (3) juntos somam 10 títulos da Champions League, fazendo de Milão uma das cidades mais vitoriosas da Europa.'
    },
    {
        id: 'ger_bundesliga',
        nome: 'Bundesliga',
        pais: 'Alemanha',
        continente: 'UEFA',
        descricao: 'Estádios cheios e futebol ofensivo caracterizam a principal liga alemã.',
        imagem: './assets/logo_bundesliga.png',
        campeao_recente: 'Bayer Leverkusen',
        maior_campeao: 'Bayern de Munique (33 títulos)',
        curiosidade: 'A Bundesliga tem a maior média de público por jogo do mundo, superando 43.000 espectadores por partida.'
    },
    {
        id: 'fra_ligue1',
        nome: 'Ligue 1',
        pais: 'França',
        continente: 'UEFA',
        descricao: 'A casa do PSG e uma liga conhecida por revelar jovens talentos.',
        imagem: './assets/logo_ligue1.png',
        campeao_recente: 'Paris Saint-Germain',
        maior_campeao: 'Paris Saint-Germain (12 títulos)',
        curiosidade: 'O recorde de gols em uma única temporada da Ligue 1 pertence a Josip Skoblar, que marcou 44 gols em 1970-71.'
    }
];

// Times serão usados em páginas futuras, mas podem ser mantidos aqui para organização
const times = {
    // ... você pode manter os objetos de times aqui se quiser ...
};