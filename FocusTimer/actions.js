import { seconds } from './elements.js'
import * as el from './elements.js'
import * as timer from './timer.js'
import state from './state.js'



export function running(){
    if( state.isRunning == false ) {
        state.isRunning = true
        timer.countdown()
    }
}

export function stop() {
    state.isRunning = false
}

export function moreSeconds(){
    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds = seconds + 5
    if(seconds > 59) {
        minutes++
        seconds = seconds - 60
    }

    state.isRunning = false
    timer.updateDisplay(minutes, seconds)
}

export function lessSeconds() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds = seconds - 5
    if(seconds < 0) {
        minutes--
        seconds = seconds + 60
    }
    
    state.isRunning = false
    timer.updateDisplay(minutes, seconds)
}