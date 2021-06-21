export const validName = (value) => {
    if(value.login === value.login.toLowerCase()) {
        return true
    }
}

export const validTrimLogin = (value) => {
    return /\s/.test(value.login);
}

export const validTrimPassword = (value) => {
    return /\s/.test(value.password);
}