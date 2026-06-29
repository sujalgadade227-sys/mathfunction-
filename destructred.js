// destructred of array 

let arr1 = [10, [20, 30], [50, 60, [70, 80]]]; 


[a, [b, c], [d, e, [f, g]]] = arr1; 

console.log(g);


[a, [b, c], [d, e, [f, g]]] = arr1;







// destructred of object
const obj1 = {
               key1: "val1",
               key2: {
                        key3: "val3",
                         key4: "val4"
                    }
};  

const { key1: keya, key2: { key3: keyc, key4: keyd } } = obj1; 
console.log(keyd);


