const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada principalmente em desenvolvimento web, Navegação da internet e Documentações. É considerado um padrão oficial da internet pela World Wide Web Consortium (W3C). </p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web de modo em cascata. Em inglês a sigla significa Cascade Style Sheet (Folha de Estilos em Cascata em tradução livre). Esta é a linguagem de estilos mais utilizada no design de sites e aplicativos web atualmente.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação de alto nível e dinâmica. Juntamente com HTML e CSS, é uma das três principais tecnologias da web. </p> <br>',
                    '<p>PowerBI</p> <br> <p>PowerBi é uma ferramenta de relatórios interativos baseados em excel com visuais mais simples para rápida e fácil leitura.</p> <br>',
                    '<p>Azure DevOPS</p> <br> <p> O ADO dá suporte a uma cultura colaborativa e um conjunto de processos que reúnem colaboradores para desenvolver softwares. É Basicamente uma coletânea de ferramentas para versionamento, pipelines,testes, gráficos e acompanhamentos de tarefas. </p> <br>',
                    '<p>IELTS</p> <br> <p> O IELTS é o exame de proficiência em inglês mais popular e reflete o uso do idioma para estudar, trabalhar e viver em um ambiente onde se fala inglês. Dentro das notas do Ielts, tenho a certificação de proficiência com nota 7 ou nível C1 (avançado). </p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima dos ícones para ler a descrição da skill*/';
    } )
} );