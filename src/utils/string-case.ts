export default {
  toTitleCase(inputString: string): string {
    return inputString.split(' ').map(stringPart => {
      const lowercasedString = stringPart.toLowerCase()
      return `${lowercasedString.substring(0, 1).toUpperCase()}${lowercasedString.substring(1)}`
    }).join('')
  },
}
