function formatSeconds(remainingSeconds) {
    const days = Math.floor(remainingSeconds / 86400)
    remainingSeconds -= days * 86400
    const hours = Math.floor(remainingSeconds / 3600)
    remainingSeconds -= hours * 3600
    const minutes = Math.floor(remainingSeconds / 60)
    remainingSeconds -= minutes * 60
    const seconds = remainingSeconds

    let timeLeftInLevel = ""
    if (days > 0) {
        timeLeftInLevel += `${days}`
        timeLeftInLevel += ':' + `${hours}`.padStart(2, '0')
        timeLeftInLevel += ':' + `${minutes}`.padStart(2, '0')
        timeLeftInLevel += ':' + `${seconds}`.padStart(2, '0')
    }
    else if (hours > 0) {
        timeLeftInLevel += `${hours}`
        timeLeftInLevel += ':' + `${minutes}`.padStart(2, '0')
        timeLeftInLevel += ':' + `${seconds}`.padStart(2, '0')
    } else {
        timeLeftInLevel += `${minutes}`
        timeLeftInLevel += ':' + `${seconds}`.padStart(2, '0')
    }

    return timeLeftInLevel
}

module.exports = formatSeconds;