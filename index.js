class Formatter {
  //add static methods here
  
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-\s]+/g, '')
  }

  static titleize(string) {
    const sentence = string.split(" ")
    const discard = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    Formatter.capitalize(sentence[0])
    const newSentence = sentence.map(function(word) {
      if (!discard.includes(word)) {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
    return Formatter.capitalize(newSentence[0]) + newSentence.slice(1)
  }

}//end of class Formatter
