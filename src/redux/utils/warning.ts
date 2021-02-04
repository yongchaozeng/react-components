const warning = (message: string): void => {

    if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(message)
    }

    try {
        throw Error(message)
    } catch (e) {

    }
}

export default warning