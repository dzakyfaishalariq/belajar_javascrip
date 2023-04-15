class add{
    constructor(...words){
        this.words = words;
    }
    print(){
        console.log("$"+this.words.join('$')+"$");
        return "$"+this.words.join('$')+"$";
    }
}
let a = new add('a','b','c');
let b = a.print()
console.log(b.split('$').join('-'))