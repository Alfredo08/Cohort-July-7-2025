

const book = {
    title: "Title of Book 1",
    authors: ["Author A", "Author B", "Author C"],
    numOfPages: 350,
    isPublished: true,
    printInfo: function(){
        console.log("Info will be displayed soon.");
    },
    printHello: function(name){
        console.log("Hello there", name);
    },
    volumeInfo: {
        datePublished: "10-20-2024",
        numOfPrintedCopies: 10000
    }
}

book.printInfo();
book.printHello("Alex");



/*

console.log(book);

console.log(book["title"]);
console.log(book.title);

book.numOfPages = 355;

console.log(book);


book.volumeInfo = {
    datePublished: "10-20-2024",
    numOfPrintedCopies: 10000
}

console.log(book);

console.log(book.volumeInfo.datePublished);

for(let i = 0; i < book.authors.length; i ++){
    console.log(book.authors[i], i);
}
*/