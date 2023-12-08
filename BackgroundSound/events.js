import * as sounds from './actions.js'
import { backgroundSound } from './elements.js'
import * as el from './elements.js'
import * as music from './sounds.js'


export function registerControls() {
    backgroundSound.addEventListener('click', (event) => {
        const sound = event.target.dataset.sound
        if(typeof sounds[sound] != 'function') {
            return
        }
        sounds[sound]()
    })
}

function none(){
    el.tree.classList.remove('click')
    el.cloud.classList.remove('click')
    el.store.classList.remove('click')
    el.flame.classList.remove('click')
    music.tree.pause()
    music.cloud.pause()
    music.store.pause()
    music.flame.pause()
}

let isMute = false
let select = null

export function togglemusic(musics){
    
    
    if(isMute == true && select == musics){
        none()
        isMute = false
        return
    }
    if(isMute == true && select != musics){
        none()
        isMute = false
    }
    if(isMute == false || select != musics){
        if(musics == "tree"){
            music.tree.play()
            el.tree.classList.add('click')
            isMute = true
            select = "tree"
        } 
        if(musics == "cloud"){
            music.cloud.play()
            el.cloud.classList.add('click')
            isMute = true
            select = "cloud"
        }
        if(musics == "store"){
            music.store.play()
            el.store.classList.add('click')
            isMute = true
            select = "store"
        }
        if(musics == "flame"){
            music.flame.play()
            el.flame.classList.add('click')
            isMute = true 
            select = "flame"
        }
       
    } 
}
