export const incremented = () => {
    return {
        type: 'counter/incremented',
    }
}

export const incrementedBy5 = () => {
    return {
        type: 'counter/incrementedBy5',
    }
}

export const decremented = () => {
    return {
        type: 'counter/decremented',
    }
}

export const decrementedBy5 = () => {
    return {
        type: 'counter/decrementedBy5',
    }
}

export const resetCounter = () => {
    return {
        type: 'counter/reset',
    }
}

export const add2IfOdd = () => {
    return {
        type: 'counter/add2IfOdd',
    }
}

export const subtract2IfEven = () => {
    return {
        type: 'counter/subtract2IfEven',
    }
}

export const previousBurger = () => {
    return {
        type: 'burger/previousBurger',
    }
}
export const nextBurger = () => {
    return {
        type: 'burger/nextBurger',
    }
}
