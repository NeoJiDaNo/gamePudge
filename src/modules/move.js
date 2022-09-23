import { animate } from './helpers'
import timer from './timer'
import pause from "./pause"

const move = () => {
    const playerBlock = document.querySelector('.player-block')
    const escapeScreen = document.querySelector('.escape-screen')
    let startBottom = 100
    let startLeft = 50

    timer()
    pause()

    const pauseMove = (pauseGame) => {
        if (pauseGame == true) {
            document.removeEventListener('keydown', movement)
            escapeScreen.style.display = "block"
        } else {
            document.addEventListener('keydown', movement)
            escapeScreen.style.display = "none"
        }
    }

    const movement = (e) => {
        if (e.key === "ArrowUp") {
            if (startBottom < (window.innerHeight - 180)) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.bottom = startBottom + progress * 10 + 'px';
                    }
                });
                startBottom = startBottom + 5
            }

            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowDown") {
            if (startBottom) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.bottom = startBottom - progress * 10 + 'px';
                    }
                  });
                startBottom = startBottom - 5
            }
            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowLeft") {
            playerBlock.style.transform='scale(1,1)'
            if (startLeft > 3) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.left = startLeft - progress * 0.5 + '%';
                    }
                  });
                startLeft = startLeft - 0.5
            }
            // playerBlock.style.left = `${startLeft}px`
        } else if (e.key === "ArrowRight") {
            playerBlock.style.transform='scale(-1,1)'
            if (startLeft < 95.5) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.left = startLeft + progress * 0.5 + '%';
                    }
                  });
                startLeft = startLeft + 0.5
            }
            // playerBlock.style.left = `${startLeft}px`
        }
    }

    document.addEventListener('keydown', movement)
}

export default move