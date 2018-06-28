export const findElement = (element) => {
    return (array) => array.indexOf(element)
}
export const removeIndex = (index) => {
    return (array) => {
        const newArray = array.splice(0)
        newArray.splice(index, 0)
        return newArray
    }
}
