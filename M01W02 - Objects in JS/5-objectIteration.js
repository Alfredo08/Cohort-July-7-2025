
const book = {
    title: "Title of Book 1",
    authors: ["Author A", "Author B", "Author C"],
    numOfPages: 350,
    isPublished: true
}


for(let property in book){
    console.log(property, book[property]);
}

console.log("------");
let keys = Object.keys(book);
let values = Object.values(book);

for(let i = 0; i < keys.length; i ++){
    const key = keys[i];
    const value = values[i];

    console.log(key, value);
}

//console.log(keys);
//console.log(values);
// console.log(book["title"])


/* 
let nums = [10, 20, 30, 40, 50];

for(let num of nums){
    console.log(num);
}

for(let i in nums){
    console.log(i, nums[i]);
}
*/