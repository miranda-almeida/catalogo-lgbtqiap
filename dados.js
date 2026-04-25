// dados.js - Lista completa de artistas e todas as funcionalidades

const artistas = [
    { nome: "Alla Brites Soüb", categoria: "ARTES PLÁSTICAS" },
    { nome: "Ana Quintas", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Andy do Futuro", categoria: "ARTES CÊNICAS" },
    { nome: "Ànna Moura", categoria: "MÚSICA" },
    { nome: "Ava Scherdien", categoria: "ARTES CÊNICAS" },
    { nome: "Cinthia Santos", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Débora Zimmer", categoria: "MÚSICA" },
    { nome: "Deni Moreira", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Denis Camargo", categoria: "ARTES CÊNICAS" },
    { nome: "Elisa Carneiro", categoria: "ARTES CÊNICAS" },
    { nome: "Conceitinho", categoria: "MÚSICA" },
    { nome: "Elmo Férrer", categoria: "ARTES CÊNICAS" },
    { nome: "Emanuel Lavor", categoria: "ARTES CÊNICAS" },
    { nome: "Eva Moura", categoria: "MÚSICA" },
    { nome: "Fernanda Alpino", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Flor Furação", categoria: "MÚSICA" },
    { nome: "Iago Gabriel", categoria: "DANÇA" },
    { nome: "Ísis Zavlyn", categoria: "MÚSICA" },
    { nome: "Jesso Alves", categoria: "ARTES PLÁSTICAS" },
    { nome: "João Ricken", categoria: "ARTES CÊNICAS" },
    { nome: "Jonathan Andrade", categoria: "ARTES CÊNICAS" },
    { nome: "Jordana Mascarenhas", categoria: "ARTES CÊNICAS" },
    { nome: "Josias Silva", categoria: "ARTES CÊNICAS (IN MEMORIAN)" },
    { nome: "Kael Studart", categoria: "ARTES CÊNICAS" },
    { nome: "Kaled Hassan", categoria: "DANÇA" },
    { nome: "Kika Ribeiro", categoria: "MÚSICA" },
    { nome: "Kika Sena", categoria: "ARTES CÊNICAS" },
    { nome: "Letícia Fialho", categoria: "MÚSICA" },
    { nome: "Lu Matias", categoria: "DANÇA" },
    { nome: "Lui L'Abbate", categoria: "ARTES CÊNICAS" },
    { nome: "Luiza Garonce", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Mar Nóbrega", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Marcia Regina", categoria: "DANÇA" },
    { nome: "Maria Eugênia Matricardi", categoria: "ARTES PLÁSTICAS" },
    { nome: "Maria Léo Araruna", categoria: "ARTES CÊNICAS" },
    { nome: "Maria Victória Carballar", categoria: "MÚSICA" },
    { nome: "Mickael Veloso", categoria: "DANÇA" },
    { nome: "Nine Ribeiro", categoria: "ARTES CÊNICAS" },
    { nome: "Quartinho", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Rafael da Escóssia", categoria: "ARTES PLÁSTICAS" },
    { nome: "Rafael Reis", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Raio de Sol", categoria: "DANÇA" },
    { nome: "Renato Fernandes", categoria: "DANÇA" },
    { nome: "Romulo Barros", categoria: "ARTES PLÁSTICAS" },
    { nome: "Ruth Venceremos", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Sintra Rodrigues", categoria: "DANÇA" },
    { nome: "Soulivier", categoria: "ARTES PLÁSTICAS" },
    { nome: "Tatiana Nascimento", categoria: "MÚSICA" },
    { nome: "Tauana Barros", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Tita Maravilha", categoria: "ARTES CÊNICAS" },
    { nome: "Úrsula Zion", categoria: "MÚSICA" },
];

const coresCategorias = {
    "ARTES PLÁSTICAS": "#9b59b6",
    "PRODUÇÃO CULTURAL E TÉCNICA": "#3498db",
    "ARTES CÊNICAS": "#e74c3c",
    "MÚSICA": "#2ecc71",
    "DANÇA": "#f39c12"
};

// Função auxiliar para gerar slugs
function slugify(nome) {
    return nome.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

// Ajustar altura do placeholder para compensar o header fixo
function ajustarHeaderPlaceholder() {
    const headerAltura = document.querySelector('.header-fixo').offsetHeight;
    const placeholder = document.querySelector('.header-placeholder');
    if (placeholder) {
        placeholder.style.height = headerAltura + 'px';
    }
}

// Funções de navegação
function mostrarCategorias() {
    document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('ativa'));
    document.getElementById('secao-categorias').classList.add('ativa');
    document.getElementById('btn-voltar-container').style.display = 'block';
    renderizarAccordion();
}

function mostrarNomes() {
    document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('ativa'));
    document.getElementById('secao-nomes').classList.add('ativa');
    document.getElementById('btn-voltar-container').style.display = 'block';
    renderizarListaNomes();
}

function mostrarEquipe() {
    document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('ativa'));
    document.getElementById('secao-equipe').classList.add('ativa');
    document.getElementById('btn-voltar-container').style.display = 'block';
    renderizarEquipe();
}

function voltarParaHome() {
    document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('ativa'));
    document.getElementById('secao-principal').classList.add('ativa');
    document.getElementById('btn-voltar-container').style.display = 'none';
}

// Renderizar Accordion (sanfonado) por categoria
function renderizarAccordion() {
    const categorias = {};
    artistas.forEach(artista => {
        let cat = artista.categoria;
        if (cat.includes('IN MEMORIAN')) cat = 'ARTES CÊNICAS';
        if (!categorias[cat]) categorias[cat] = [];
        categorias[cat].push(artista);
    });
    
    const categoriasOrdenadas = Object.keys(categorias).sort();
    
    let html = '';
    categoriasOrdenadas.forEach(categoria => {
        const cor = coresCategorias[categoria] || '#95a5a6';
        const artistasOrdenados = categorias[categoria].sort((a,b) => a.nome.localeCompare(b.nome));
        
        let listaArtistas = '';
        artistasOrdenados.forEach(artista => {
            const slug = slugify(artista.nome);
            const ehInMemorian = artista.categoria.includes('IN MEMORIAN');
            const classeMemorian = ehInMemorian ? 'in-memorian' : '';
            const iconeMemorian = ehInMemorian ? '💞 ' : '🎙️ ';
            const nomeExibido = ehInMemorian ? artista.nome.replace(' (IN MEMORIAN)', '') : artista.nome;
            
            listaArtistas += `
                <a href="artistas/${slug}.html" class="link-artista ${classeMemorian}" style="border-left-color: ${cor}">
                    ${iconeMemorian} ${nomeExibido} ${ehInMemorian ? '<span style="font-size: 12px; background: #c0392b; color: white; padding: 2px 8px; border-radius: 20px; margin-left: 8px;">IN MEMORIAN</span>' : ''}
                </a>
            `;
        });
        
        html += `
            <div class="accordion-item">
                <button class="accordion-header" style="background: ${cor}" onclick="toggleAccordion(this)">
                    ${categoria} (${artistasOrdenados.length})
                </button>
                <div class="accordion-content">
                    <div class="lista-artistas-accordion">
                        ${listaArtistas}
                    </div>
                </div>
            </div>
        `;
    });
    
    document.getElementById('accordion-container').innerHTML = html;
}

// Função toggle para accordion
function toggleAccordion(btn) {
    const item = btn.closest('.accordion-item');
    if (item) {
        item.classList.toggle('active');
    }
}

// Renderizar lista completa de nomes com tags coloridas
function renderizarListaNomes() {
    const artistasOrdenados = [...artistas].sort((a,b) => a.nome.localeCompare(b.nome));
    
    let html = '<div class="lista-todos-artistas">';
    artistasOrdenados.forEach(artista => {
        let categoriaBase = artista.categoria;
        const isMemorian = categoriaBase.includes('IN MEMORIAN');
        if (isMemorian) categoriaBase = 'ARTES CÊNICAS';
        
        const cor = coresCategorias[categoriaBase] || '#95a5a6';
        const slug = slugify(artista.nome);
        const nomeExibido = isMemorian ? artista.nome.replace(' (IN MEMORIAN)', '') + ' 💞' : artista.nome;
        
        html += `
            <a href="artistas/${slug}.html" class="item-artista" ${isMemorian ? 'style="background: #fff3f3; border-left: 4px solid #c0392b;"' : ''}>
                <span class="nome-artista">${isMemorian ? '🕊️ ' : '🎙️ '} ${nomeExibido}</span>
                <span class="tag-categoria" style="background: ${cor}">${categoriaBase} ${isMemorian ? '• IN MEMORIAN' : ''}</span>
            </a>
        `;
    });
    html += '</div>';
    
    document.getElementById('lista-nomes-container').innerHTML = html;
}

// Renderizar equipe com grid otimizado
function renderizarEquipe() {
    const equipe = [
        { nome: "Ava Scherdien", funcao: "Coordenação Geral, Investigação Biográfica e Entrevista", descricao: "", imagem: "ava-scherdien.jpg" },
        { nome: "Bárbara Gontijo", funcao: "Transcrição", descricao: "", imagem: "barbara-gontijo.jpg" },
        { nome: "Bianca Ludgero", funcao: "Coordenação de Comunicação", descricao: "", imagem: "bianca-ludgero.jpg" },
        { nome: "Bruna Araújo", funcao: "Registros e Edições Fotográficas", descricao: "", imagem: "bruna-araujo.jpg" },
        { nome: "Bruno Kaire", funcao: "Assistente de Produção", descricao: "", imagem: "bruno-kaire.jpg" },
        { nome: "Célia Regina Scherdien", funcao: "Transcrição", descricao: "", imagem: "celia-regina-scherdien.jpg" },
        { nome: "Claudia Barbosa", funcao: "Contabilidade", descricao: "", imagem: "claudia-barbosa.jpg" },
        { nome: "Fernando Franq", funcao: "Assistente de Produção", descricao: "", imagem: "fernando-franq.jpg" },
        { nome: "Ilgner Boyek", funcao: "Assistente de Produção", descricao: "", imagem: "ilgner-boyek.jpg" },
        { nome: "Iris Marwell", funcao: "Design e Ilustração", descricao: "", imagem: "iris-marwell.jpg" },
        { nome: "Kaled Hassan", funcao: "Assistente de Produção", descricao: "", imagem: "kaled-hassan.jpg" },
        { nome: "Lê Reis", funcao: "Coordenação de Produção", descricao: "", imagem: "le-reis.jpg" },
        { nome: "Leticia Helena", funcao: "Produção Executiva e Investigação Biográfica", descricao: "", imagem: "leticia-helena.jpg" },
        { nome: "Lorena Cardoso", funcao: "Gestão de Redes Sociais", descricao: "", imagem: "lorena-cardoso.jpg" },
        { nome: "Luciano Gurgel", funcao: "Registros Fotográficos", descricao: "", imagem: "luciano-gurgel.jpg" },
        { nome: "Luiza Garonce", funcao: "Investigação Biográfica e Entrevista", descricao: "", imagem: "luiza-garonce.jpg" },
        { nome: "Miranda Almeida", funcao: "Diagramação", descricao: "", imagem: "miranda-almeida.jpg" },
        { nome: "Natan Gabriel", funcao: "Videomaker", descricao: "", imagem: "natan-gabriel.jpg" },
        { nome: "Nathália Calvet", funcao: "Assistente de Produção", descricao: "", imagem: "nathalia-calvet.jpg" },
        { nome: "Tábata Santana", funcao: "Maquiagem", descricao: "", imagem: "tabata-santana.jpg" },
        { nome: "Thamires Barreto", funcao: "Videomaker", descricao: "", imagem: "thamires-barreto.jpg" },
        { nome: "Yvã Santos", funcao: "Registros Fotográficos", descricao: "", imagem: "yva-santos.jpg" }
    ];
    
    let html = '<div class="equipe-grid">';
    
    equipe.forEach(membro => {
        const imagemPath = `imagens/equipe/${membro.imagem}`;
        
        html += `
            <div class="membro-card">
                <div class="membro-foto">
                    <img src="${imagemPath}" alt="${membro.nome}" onerror="this.src='https://placehold.co/600x600?text=${encodeURIComponent(membro.nome.charAt(0))}'">
                </div>
                <div class="membro-info">
                    <div class="membro-nome">${membro.nome}</div>
                    <div class="membro-funcao">${membro.funcao}</div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    document.getElementById('equipe-container').innerHTML = html;
}

// Abrir accordion específico via URL
function abrirCategoriaNaURL() {
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('categoria');
    if (categoria) {
        mostrarCategorias();
        setTimeout(() => {
            const items = document.querySelectorAll('.accordion-item');
            for (let item of items) {
                const header = item.querySelector('.accordion-header');
                if (header && header.textContent.startsWith(decodeURIComponent(categoria))) {
                    item.classList.add('active');
                    const content = item.querySelector('.accordion-content');
                    if (content) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                    header.scrollIntoView({ behavior: 'smooth' });
                    break;
                }
            }
        }, 100);
    }
}

// Inicialização quando a página carregar
window.addEventListener('load', () => {
    ajustarHeaderPlaceholder();
    abrirCategoriaNaURL();
});

// Garantir que o placeholder seja ajustado ao redimensionar
window.addEventListener('resize', ajustarHeaderPlaceholder);
