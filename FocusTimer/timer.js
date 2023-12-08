import state from './state.js'
import * as actions from './actions.js'
import * as el from './elements.js'

export function countdown() {
    clearTimeout(state.countdownId)
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--

    if(seconds < 0 ){
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        return
    }

    if(state.isRunning == false){
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay (minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    
    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")

    
}