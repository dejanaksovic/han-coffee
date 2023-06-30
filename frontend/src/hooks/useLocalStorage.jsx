import { useEffect, useState } from "react"

const getSavedValue = (key, initValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key))

    if(savedValue)
        return savedValue
    return initValue
}

export const useLocalStorage = (key, startingValue) => {

    const [value, setValue] = useState( () => {
        return getSavedValue(key, startingValue)
    } )

    useEffect( () => {
        if(value)
            localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}