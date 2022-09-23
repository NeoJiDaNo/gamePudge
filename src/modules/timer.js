const timer = () => {
    
    const timerBlock = document.querySelector('#timer')

    let seconds = 0
    let minutes = 0
    let interval

    const render = (minutes, seconds) => {
        timerBlock.textContent = `${minutes}:${seconds}`
    }

    const timePlus = () => {
        let fullMinutes = '00'
        let fullSeconds = '00'
        seconds++

        if (seconds >= 60) {
            minutes++
            seconds = 0
        }

        if (minutes < 10) {
            fullMinutes = `0${minutes}`
        } else {
            fullMinutes = minutes
        }

        if (seconds < 10) {
            fullSeconds = `0${seconds}`
        } else {
            fullSeconds = seconds
        }

        render(minutes, seconds)
    }
    interval = setInterval(timePlus, 1000)
        

}

export default timer