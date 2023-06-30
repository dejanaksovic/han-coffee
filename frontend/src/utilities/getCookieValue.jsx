export const getCookieValue = (key) => {
    const keyValuePairs = document.cookie.split(';')

    for( let i = 0; i < keyValuePairs.length; i ++ ) {
        const [keyString, valueString] = keyValuePairs[i].split('=')
        if( keyString.trim() === key ){
            return valueString.split('%').join('').trim()
        }
    }

    return null
}
