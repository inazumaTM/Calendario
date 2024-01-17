const calendar = document.querySelector('.calendar')
const asideTime = document.querySelector('.asideTime')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const days = document.querySelector('.days')
const today = new Date()
const currentDay = today.getDate()
const currentMonth = today.getMonth()
const currentYear = new Date().getFullYear()
const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
const timeDay = document.querySelector('.time span:nth-child(1)')
const timeHour = document.querySelector('.time span:nth-child(2)')

function currentDate() {
    let currentMonthNumber = new Date().getMonth()
    let dayOfWeek = monthStart.getDay();
    let stringMonth = ''
    currentMonthNumber++
    dayOfWeek++
    year.textContent = currentYear
    
    switch(currentMonthNumber){
        case 1:
            stringMonth = 'Janeiro'
            month.textContent = stringMonth
        break
        case 2:
            stringMonth = 'Fevereiro'
            month.textContent = stringMonth
        break
        case 3:
            stringMonth = 'Março'
            month.textContent = stringMonth
        break
        case 4:
            stringMonth = 'Abril'
            month.textContent = stringMonth
        break
        case 5:
            stringMonth = 'Maio'
            month.textContent = stringMonth
        break
        case 6:
            stringMonth = 'Junho'
            month.textContent = stringMonth
        break
        case 7:
            stringMonth = 'Julho'
            month.textContent = stringMonth
        break
        case 8:
            stringMonth = 'Agosto'
            month.textContent = stringMonth
        break
        case 9:
            stringMonth = 'Setembro'
            month.textContent = stringMonth
        break
        case 10:
            stringMonth = 'Outubro'
            month.textContent = stringMonth
        break
        case 11:
            stringMonth = 'Novembro'
            month.textContent = stringMonth
        break
        case 12:
            stringMonth = 'Dezembro'
            month.textContent = stringMonth
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
    todayFunction(currentDay)
}
function ehBissexto(ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
  }
  function todayFunction(day){
    let todayNumber = document.querySelector(`.n${day}`)
    todayNumber.classList.add('today')
  }
function timeATT(){
    let currentToday = new Date()
    todayFunction(currentToday.getDate())
    if(currentToday.getDate() < 10 && currentToday.getMonth()+1 < 10){
        timeDay.textContent = `0${currentToday.getDate()}/0${currentToday.getMonth()+1}/${currentToday.getFullYear()}`
    }
    else if(currentToday.getDate() >= 10 && currentToday.getMonth()+1 <10){
        timeDay.textContent = `${currentToday.getDate()}/0${currentToday.getMonth()+1}/${currentToday.getFullYear()}`
    }
    else if(currentToday.getDate() < 10 && currentToday.getMonth()+1 >= 10){
        timeDay.textContent = `0${currentToday.getDate()}/${currentToday.getMonth()+1}/${currentToday.getFullYear()}`
    }
    else if(currentToday.getDate() >= 10 && currentToday.getMonth()+1 >= 10){
        timeDay.textContent = `${currentToday.getDate()}/${currentToday.getMonth()+1}/${currentToday.getFullYear()}`
    }
    if(currentToday.getHours() < 10 && currentToday.getMinutes() < 10 && currentToday.getSeconds() < 10){
        timeHour.textContent = `0${currentToday.getHours()}:0${currentToday.getMinutes()}:0${currentToday.getSeconds()}`
      } 
      else if(currentToday.getHours() < 10 && currentToday.getMinutes() < 10 && currentToday.getSeconds() >= 10){
        timeHour.textContent = `0${currentToday.getHours()}:0${currentToday.getMinutes()}:${currentToday.getSeconds()}`
      }
      else if(currentToday.getHours() < 10 && currentToday.getMinutes() >= 10 && currentToday.getSeconds() < 10){
        timeHour.textContent = `0${currentToday.getHours()}:${currentToday.getMinutes()}:0${currentToday.getSeconds()}`
      }
      else if(currentToday.getHours() < 10 && currentToday.getMinutes() >= 10 && currentToday.getSeconds() >= 10){
        timeHour.textContent = `0${currentToday.getHours()}:${currentToday.getMinutes()}:${currentToday.getSeconds()}`
      }
      else if(currentToday.getHours() >= 10 && currentToday.getMinutes() < 10 && currentToday.getSeconds() < 10){
        timeHour.textContent = `${currentToday.getHours()}:0${currentToday.getMinutes()}:0${currentToday.getSeconds()}`
      }
      else if(currentToday.getHours() >= 10 && currentToday.getMinutes() < 10 && currentToday.getSeconds() >= 10){
        timeHour.textContent = `${currentToday.getHours()}:0${currentToday.getMinutes()}:${currentToday.getSeconds()}`
      }
      else if(currentToday.getHours() >= 10 && currentToday.getMinutes() >= 10 && currentToday.getSeconds() < 10){
        timeHour.textContent = `${currentToday.getHours()}:${currentToday.getMinutes()}:0${currentToday.getSeconds()}`
      }
      else if(currentToday.getHours() >= 10 && currentToday.getMinutes() >= 10 && currentToday.getSeconds() >= 10){
        timeHour.textContent = `${currentToday.getHours()}:${currentToday.getMinutes()}:${currentToday.getSeconds()}`
      }
}

setTimeout(setInterval(timeATT,100), 1)

window.onload(currentDate())