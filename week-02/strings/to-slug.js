function toSlugWithReplaceAll(title) {
    return title.replaceAll(" ", "-").toLowerCase();
}

function toSlugWithSplitJoin(title) {
    return title.split(" ").filter(word => word !== "" ).join("-").toLowerCase();
}

console.log(toSlugWithReplaceAll("My First Blog Post"));
console.log(toSlugWithReplaceAll("Hello World"));
console.log(toSlugWithReplaceAll("Welcome"));
//Limitation: does not handle double spaces

console.log(toSlugWithSplitJoin("My First Blog Post"));
console.log(toSlugWithSplitJoin("Hello World"));
console.log(toSlugWithSplitJoin("Welcome"));
console.log(toSlugWithSplitJoin("Hello  World"));
//Easier to extend to handle double spaces as .filter can be used on the created array