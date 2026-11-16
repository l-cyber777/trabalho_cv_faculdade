const experiencias = [
    "Suporte Técnico em Redes e Monitoramento - Santos Brasil Segurança e Monitoramento (atual)",
    "Analista de Mídias Sociais"
]

const formacao = [
    "Análise e Desenvolvimento de Sistemas - Piaget (cursando, 2º semestre)"
]

const certificacoes = [
    "Google Cybersecurity Fundamentals",
    "TryHackMe - Pre Security Path",
    "Solyd - Offensive Security (em andamento)"
]

const habilidades = ["Cibersegurança", "Python", "Linux", "Redes de Computadores", "Shell Script"]
habilidades.push("Web Security")

const listaExperiencias = document.getElementById("experiencias")
const listaFormacao = document.getElementById("formacao")
const listaCertificacoes = document.getElementById("certificacoes")
const listaHabilidades = document.getElementById("habilidades")

for (let experiencia of experiencias) {
    listaExperiencias.innerHTML += `<li>${experiencia}</li>`
}

for (let curso of formacao) {
    listaFormacao.innerHTML += `<li>${curso}</li>`
}

for (let certificacao of certificacoes) {
    listaCertificacoes.innerHTML += `<li>${certificacao}</li>`
}

for (let habilidade of habilidades) {
    listaHabilidades.innerHTML += `<li>${habilidade}</li>`
}
