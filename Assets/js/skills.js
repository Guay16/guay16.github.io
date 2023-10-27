const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>It is a markup language used mainly in web development, Internet navigation and Documentation. It is considered an official internet standard by the World Wide Web Consortium (W3C). </p> <br>',
                    '<p>CSS</p> <br> <p>It is a mechanism for adding style to a web document in a cascading manner. In English, the acronym stands for Cascade Style Sheet. This is the most used style language in website and web application design today.</p> <br>',
                    '<p>JavaScript</p> <br> <p>It is a high-level and dynamic programming language. Along with HTML and CSS, it is one of the three main web technologies. </p> <br>',
                    '<p>PowerBI</p> <br> <p>PowerBi is an Excel-based interactive reporting tool with simpler visuals for quick and easy reading.</p> <br>',
                    '<p>Azure DevOPS</p> <br> <p> ADO supports a collaborative culture and a set of processes that bring together collaborators to develop software. It is basically a collection of tools for versioning, pipelines, tests, graphs and task tracking. </p> <br>',
                    '<p>IELTS</p> <br> <p> IELTS is the most popular English proficiency exam and reflects the use of the language to study, work and live in an English-speaking environment. Within the Ielts scores, I have proficiency certification with a grade of 7 or level C1 (advanced). </p> <br>',
                    '<p>Git</p> <br> <p>It is a distributed version control system, mainly used in software development.</p> <br>',
                    '<p>Github</p> <br> <p>It is a source code and file hosting platform with version control using Git. </p> <br>'
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
        descricao.innerHTML = '/*   Mouse over the icons to see more */';
    } )
} );