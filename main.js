const questionField = document.getElementById('questionTxt')

const questionButton = document.getElementById('questionButton')

const answerShow = document.getElementById('response')

const answer = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não dizer agora.",
    "A meu ver , sim.",
    "Minha fontes dizem que não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que setImmediate."
]

questionField.focus()

questionButton.addEventListener('click', askAquestion)

function askAquestion() {
    if(questionField.value == "") {
        alert("Digite sua pergunta!")
        return
    }

    questionButton.setAttribute("disabled", true)
    
    const showQuestion = `<p>`+questionField.value+`</p>`
    
    const totalAnswer = answer.length
    const numberRandom = Math.floor(Math.random() * totalAnswer)
    
    answerShow.innerHTML = showQuestion + answer[numberRandom]
    
    answerShow.style.opacity = 1

    setTimeout(function() {
        answerShow.style.opacity = 0
        questionButton.removeAttribute("disabled")
    }, 3000)
}