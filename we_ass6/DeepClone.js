/*
3. Implement a deep clone function in JavaScript that creates a copy of a nested object or array
without any reference to the original.
*/


function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        console.log(key);
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

const obj = {
    a: {
        Daksh: {
            Maru: "Surname"
        },
        Maru: {
            Daksh: "Name",
            Sameeksha: "Name"
        }
    },
    b: {
        c: [4, 5, 6],
        d: 3
    }
}

const clone = deepClone(obj);
console.log(clone);