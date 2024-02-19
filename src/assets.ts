const RandomArrayIndex = (prevColor, arrayLength) => {
    let newColor = prevColor
    while (newColor == prevColor) {
        newColor = (Math.floor(Math.random() * arrayLength))
    }
    return newColor
}

export default RandomArrayIndex