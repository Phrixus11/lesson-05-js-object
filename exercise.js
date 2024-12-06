const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine(...rest) {
    resultObj = {isEmpty: 0}
    let isIssue = false;
    for (const el of rest) { 
        for (const key1 in el) {
            isIssue = false
            for (const key2 in resultObj) { 
                if (key1 !== key2) {
                    isIssue = true
                } else {
                    resultObj[key2] += el[key1]
                    isIssue = false
                    break
                }
            }
            if (isIssue) {
                resultObj[key1] = el[key1]
            }
        }
    }
    delete resultObj.isEmpty
    return resultObj
}

combine({}, {}, {} )