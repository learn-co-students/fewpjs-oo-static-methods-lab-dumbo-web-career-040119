class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    string = string.replace(/[^a-z0-9áéíóúñü \.,_'-]/gim,"");
    return string.trim();
  }

  static titleize(string){
    let titleizeWord = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        result = [],
        exceptions = ["of", "the", "and", "a", "an", "but", "for", "at", "from", "by"]
    string.split(" ").forEach(function(w) {
        if ((w === string[0]) && (w === "a")){
          result.push("A")
        } else if (exceptions.includes(w) ){
          result.push(w)
        } else {
        result.push(titleizeWord(w));
      }
    });
    return result.join(" ");
  }
}
