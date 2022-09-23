

const pause = () => {

    let pauseGame = false

    

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (pauseGame == false) {
                pauseGame = true
                pauseMove(pauseGame)
            } else {
                pauseGame = false
                pauseMove(pauseGame)
            }
        }
    })

}

export default pause