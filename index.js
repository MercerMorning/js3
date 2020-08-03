let allNumbers = [1, 2, 4, 5, 6, 7, 8];
let someNumbers =  [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8];

function isNumber(source, count)
{
    return typeof source[count] == 'number';
}

// function isAllTrue (source, filterFn)
// {
//     return source.every(filterFn)
// }
//
// function isSomeTrue (source, filterFn)
// {
//     return source.some(filterFn)
// }

// С помощью функций js
// console.log(isAllTrue(allNumbers, isNumber));
// console.log(isSomeTrue(someNumbers, isNumber));

function isAllTrue (source, filterFn)
{
    function check(source, count)
    {
        if (count < source.length) {
            let result = filterFn(source, count++);
            if (result === false) {
                return false
            }
            return check(source, count)
        }
        return true
    }
    return check(source,  0)
}

function isSomeTrue (source, filterFn)
{
    function check(source, count)
    {
        if (count < source.length) {
            let result = filterFn(source, count++);
            if (result === true) {
                return true
            }
            return check(source, count)
        }
        return false
    }
    return check(source,  0)
}

console.log(isAllTrue(allNumbers, isNumber));
console.log(isAllTrue(someNumbers, isNumber));
console.log(isSomeTrue(allNumbers, isNumber));
console.log(isSomeTrue(someNumbers, isNumber));