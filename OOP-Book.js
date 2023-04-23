function Book(){
    var book={}
    book.library=[],
    book.makeBook=makeBook,
    book.addBook=addBook,
    book.displayBook=displayBook
    return book  
}

var makeBook=function(author,title,readingStatus){

return {
    author:author,
    titile:title,
    readingStatus:readingStatus
}
}

var addBook=function(){
    return this.library.push(this.book)
}


var displayBook=function(){

return  this.book.title + ", by" + this.book.author + " has reading status  " + this.makeBook.readingStatus
    }
    

