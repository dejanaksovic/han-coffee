import { useEffect, useState } from "react"

const getSavedValue = (key, initValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key))

    //Provera inicijalne vrednosti i datuma isticanja
    if(savedValue && savedValue.expires > Date.now())
        return savedValue
    return initValue
}

const isValueValid = ( value ) => {
    if(!value)
        return false
    //Special case for array values
    if( Array.isArray(value) && value.length === 0)
        return false

    return true
}

export const useLocalStorage = (key, startingValue, expires) => {
    const [value, setValue] = useState( () => {
        return getSavedValue(key, startingValue)
    } )

    useEffect( () => {
        if(isValueValid(value))
            return localStorage.setItem(key, JSON.stringify({...value, expires}))
        localStorage.setItem(key, null)
    }, [value])

    return [value, setValue]
}