document.addEventListener("DOMContentLoaded", () => {
    const allBtn = document.querySelectorAll("button")
    const startBtn = allBtn[1]
    const appendBtn = allBtn[0]
    const input = document.querySelector("input")
    const hint = document.querySelector(".hint")
    const atteptDiv = document.querySelector(".attept")

    function getRandomNumber() {
        const mathRandomNumber = Math.random()
        const range = 10
        const randomRangeNumber = Math.floor(mathRandomNumber * range)
        return randomRangeNumber
    }

    let targetNumber = getRandomNumber()
    let attept = 3
    console.log(targetNumber)

    appendBtn.addEventListener("click", () => {
        const valueInput = input.value
        console.log(valueInput)

        if (Number(valueInput) === targetNumber) {
            hint.innerHTML = `<h2>You win. Your numbebr is ${valueInput}<h2>`
            appendBtn.disabled = true
        } else {
            attept = attept - 1
            atteptDiv.innerHTML = `<h2>You still have opportunities ${attept}<h2>`
            if (attept < 1) {
                appendBtn.disabled = true
                hint.innerHTML = `<h2>You loose.<h2>`
            } else {
                if (valueInput > targetNumber) {
                    hint.innerHTML = `<h2>Your number is more<h2>`
                } else {
                    hint.innerHTML = `<h2>Your number is less<h2>`
                }
            }
        }
    })
    startBtn.addEventListener("click", () => {
        attept = 3
        appendBtn.disabled = false
        targetNumber = getRandomNumber()
        input.value = ""
        hint.innerHTML = ``
        atteptDiv.innerHTML = ``
    })
})