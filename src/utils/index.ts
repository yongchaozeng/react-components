function _toString(type: any) {
    return Object.prototype.toString.call(type)
}

export const isNumber = (number: any) => {
    return _toString(number) === '[object Number]'
}
