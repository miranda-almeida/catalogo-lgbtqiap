// dados.js - Lista completa de artistas
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
    { nome: "Fernanda Jacob", categoria: "MÚSICA" },
    { nome: "Flor Furação", categoria: "MÚSICA" },
    { nome: "Gustavo Silvamaral", categoria: "ARTES PLÁSTICAS" },
    { nome: "Iago Gabriel", categoria: "DANÇA" },
    { nome: "Ísis Zavlyn", categoria: "MÚSICA" },
    { nome: "Jesso Alves", categoria: "ARTES PLÁSTICAS" },
    { nome: "João Ricken", categoria: "ARTES CÊNICAS" },
    { nome: "Jonathan Andrade", categoria: "ARTES CÊNICAS" },
    { nome: "Jordana Mascarenhas", categoria: "ARTES CÊNICAS" },
    { nome: "Josias (Vinicius Ávlis)", categoria: "ARTES CÊNICAS (IN MEMORIAN)" },
    { nome: "Kael Studart", categoria: "ARTES CÊNICAS" },
    { nome: "Kaled Hassan", categoria: "DANÇA" },
    { nome: "Kika Ribeiro", categoria: "MÚSICA" },
    { nome: "Kika Sena", categoria: "ARTES CÊNICAS" },
    { nome: "Letícia Fialho", categoria: "MÚSICA" },
    { nome: "Lu Matias", categoria: "DANÇA" },
    { nome: "Lui L'Abbate", categoria: "ARTES CÊNICAS" },
    { nome: "Luiza Garonce", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Mar Nobrega", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Marcia Regina", categoria: "DANÇA" },
    { nome: "Maria Eugênia Matricardi", categoria: "ARTES PLÁSTICAS" },
    { nome: "Maria Léo Araruna", categoria: "ARTES CÊNICAS" },
    { nome: "Maria Victória Carballar", categoria: "MÚSICA" },
    { nome: "Mikael Veloso", categoria: "DANÇA" },
    { nome: "Nine Ribeiro", categoria: "ARTES CÊNICAS" },
    { nome: "Pipa Sousa", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Quartinho", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Rafael da Escóssia", categoria: "ARTES PLÁSTICAS" },
    { nome: "Rafael Reis", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Rainer Cadete", categoria: "ARTES CÊNICAS" },
    { nome: "Raio de Sol", categoria: "DANÇA" },
    { nome: "Renato Fernandes", categoria: "DANÇA" },
    { nome: "Romulo Barros", categoria: "ARTES PLÁSTICAS" },
    { nome: "Ruth Venceremos", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Similião Aurélio", categoria: "ARTES PLÁSTICAS" },
    { nome: "Soulivier", categoria: "ARTES PLÁSTICAS" },
    { nome: "Tatiana Nascimento", categoria: "MÚSICA" },
    { nome: "Tauana Barros", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" },
    { nome: "Tita Maravilha", categoria: "ARTES CÊNICAS" },
    { nome: "Úrsula Zion", categoria: "MÚSICA" },
    { nome: "Zizi Antunes", categoria: "PRODUÇÃO CULTURAL E TÉCNICA" }
];

// Cores distintas para cada categoria
const coresCategorias = {
    "ARTES PLÁSTICAS": "#9b59b6",
    "PRODUÇÃO CULTURAL E TÉCNICA": "#3498db",
    "ARTES CÊNICAS": "#e74c3c",
    "MÚSICA": "#2ecc71",
    "DANÇA": "#f39c12"
};

function slugify(nome) {
    return nome.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}
