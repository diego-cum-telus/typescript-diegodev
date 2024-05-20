// yolo any getArray function
function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


function getArrayGeneric<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
let numberArray2 = getArrayGeneric<number>([5, 10, 15, 20]);
numberArray2.push(25);                      // OK
// numberArray2.push('This is not a number');  // Generates a compile time type check error

let stringArray2 = getArrayGeneric<string>(['Cats', 'Dogs', 'Birds']);
stringArray2.push('Rabbits');               // OK
// stringArray2.push(30);                      // Generates a compile time type check error