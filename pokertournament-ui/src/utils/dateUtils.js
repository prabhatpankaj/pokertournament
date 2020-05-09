function toLocaleDateTime(dateString) {
    return new Date(dateString).toLocaleDateString() 
        + " " 
        + new Date(dateString).toLocaleTimeString()
}

export default toLocaleDateTime