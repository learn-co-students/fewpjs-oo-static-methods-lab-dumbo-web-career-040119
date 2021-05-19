class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);   
  }

  static sanitize(string){
      // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
      return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
      let avoid = ['a', 'the', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from','always']
      console.log(string);
      let newString = "";
      let splitTheString = string.split(" ");
      newString += this.capitalize(splitTheString[0])
      splitTheString.shift();
      splitTheString.forEach(word => {
        if (!avoid.includes(word)){
          // this.capitalize(word);
          newString += ` ${this.capitalize(word)}`;
        }
        else{
          newString += ` ${word}`;
        }
      })
      return newString;
  }
}