function toUSPhoneFormat(phoneString) {
    return phoneString
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, '+1 ($1) $2-$3')
}

module.exports = toUSPhoneFormat;