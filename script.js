const month = document.querySelector('.month')
const year = document.querySelector('.year')
const days = document.querySelector('.days')

function currentDate() {
    const currentYear = new Date().getFullYear()
    let currentMonthNumber = new Date().getMonth()
    const today = new Date()
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    let dayOfWeek = monthStart.getDay();
    let currentMonth = ''
    currentMonthNumber++
    dayOfWeek++
    year.textContent = currentYear
    
    switch(currentMonthNumber){
        case 1:
            currentMonth = 'Janeiro'
            month.textContent = currentMonth
        break
        case 2:
            currentMonth = 'Fevereiro'
            month.textContent = currentMonth
        break
        case 3:
            currentMonth = 'Março'
            month.textContent = currentMonth
        break
        case 4:
            currentMonth = 'Abril'
            month.textContent = currentMonth
        break
        case 5:
            currentMonth = 'Maio'
            month.textContent = currentMonth
        break
        case 6:
            currentMonth = 'Junho'
            month.textContent = currentMonth
        break
        case 7:
            currentMonth = 'Julho'
            month.textContent = currentMonth
        break
        case 8:
            currentMonth = 'Agosto'
            month.textContent = currentMonth
        break
        case 9:
            currentMonth = 'Setembro'
            month.textContent = currentMonth
        break
        case 10:
            currentMonth = 'Outubro'
            month.textContent = currentMonth
        break
        case 11:
            currentMonth = 'Novembro'
            month.textContent = currentMonth
        break
        case 12:
            currentMonth = 'Dezembro'
            month.textContent = currentMonth
        break
    }
    switch(currentMonthNumber){
        case 4: case 6: case 9: case 11:
            for(let i = 30; i>=1; i--){
                let newSpan = document.createElement('span')
                newSpan.textContent = i
                newSpan.classList.add('daysNumber', `n${i}`)
                days.insertAdjacentElement("beforebegin", newSpan)
            }
            switch(dayOfWeek){
                case 2: 
                    let span = document.createElement('span')
                    span.textContent = ''
                    days.insertAdjacentElement("afterbegin", span)
                break
                case 3:
                    for(let i = 0; i<=2; i++){
                            let span = document.createElement('span')
                            span.textContent = ''
                       days.insertAdjacentElement("afterbegin", span) 
                    }
                break
                case 4:
                    for(let i = 0; i<=3; i++){
                            let span = document.createElement('span')
                            span.textContent = ''
                        days.insertAdjacentElement("afterbegin", span)
                    }
                break
                case 5:
                    for(let i = 0; i<=4; i++){
                            let span = document.createElement('span')
                            span.textContent = ''
                        days.insertAdjacentElement("afterbegin", span)
                    }
                break
                case 6:
                    for(let i = 0; i<=5; i++){
                            let span = document.createElement('span')
                            span.textContent = ''
                        days.insertAdjacentElement("afterbegin", span)
                    }
                break
                case 7:
                    for(let i = 0; i<=6; i++){
                            let span = document.createElement('span')
                            span.textContent = ''
                        days.insertAdjacentElement("afterbegin", span)
                    }
            }
        break
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            for(let i = 31; i>=1; i--){
                let newSpan = document.createElement('span')
                newSpan.textContent = i
                newSpan.classList.add('daysNumber', `n${i}`)
                days.insertAdjacentElement("afterbegin", newSpan)
            }
            switch(dayOfWeek){
                case 2: 
                    days.insertAdjacentElement("afterbegin", document.createElement('span'))
                break
                case 3:
                    for(let i = 0; i<=2; i++){
                        days.insertAdjacentElement("afterbegin", document.createElement('span'))
                    }
                break
                case 4:
                    for(let i = 0; i<=3; i++){
                        days.insertAdjacentElement("afterbegin", document.createElement('span'))
                    }
                break
                case 5:
                    for(let i = 0; i<=4; i++){
                        days.insertAdjacentElement("afterbegin", document.createElement('span'))
                    }
                break
                case 6:
                    for(let i = 0; i<=5; i++){
                        days.insertAdjacentElement("afterbegin", document.createElement('span'))
                    }
                break
                case 7:
                    for(let i = 0; i<=6; i++){
                        days.insertAdjacentElement("afterbegin", document.createElement('span'))
                    }
            }
        break
        case 2:
            const bissexto = ehBissexto(currentYear)
            if(bissexto){
                for(let i = 29; i>=1; i--){
                    let newSpan = document.createElement('span')
                    newSpan.textContent = i
                    newSpan.classList.add('daysNumber', `n${i}`)
                    days.insertAdjacentElement("beforebegin", newSpan)
                }
                switch(dayOfWeek){
                    case 2: 
                        days.insertAdjacentElement("afterbegin", document.createElement('span'))
                    break
                    case 3:
                        for(let i = 0; i<=2; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 4:
                        for(let i = 0; i<=3; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 5:
                        for(let i = 0; i<=4; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 6:
                        for(let i = 0; i<=5; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 7:
                        for(let i = 0; i<=6; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                }
            } else{
                for(let i = 28; i>=1; i--){
                    let newSpan = document.createElement('span')
                    newSpan.textContent = i
                    newSpan.classList.add('daysNumber', `n${i}`)
                    days.insertAdjacentElement("beforebegin", newSpan)
                }
                switch(dayOfWeek){
                    case 2: 
                        days.insertAdjacentElement("afterbegin", document.createElement('span'))
                    break
                    case 3:
                        for(let i = 0; i<=2; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 4:
                        for(let i = 0; i<=3; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 5:
                        for(let i = 0; i<=4; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 6:
                        for(let i = 0; i<=5; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                    break
                    case 7:
                        for(let i = 0; i<=6; i++){
                            days.insertAdjacentElement("afterbegin", document.createElement('span'))
                        }
                }
            }
    }
    todayFunction(today.getDate())
}
function ehBissexto(ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
  }
  function todayFunction(day){
    let todayNumber = document.querySelector(`.n${day}`)
    todayNumber.classList.add('today')
  }
window.onload(currentDate())