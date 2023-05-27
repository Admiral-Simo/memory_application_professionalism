// memory application

const phones = {
    mama: "0680097455",
    baba: "0666595608",
    soukayna: "0628016749",
    toufik1: "0667997604",
    driss: "0626804320",
    massar: "l133278644",
}

function refreshMemory() {
    var result = Object.keys(phones).map((key) => [key, phones[key]]);

    while (true) {
        // i is a random number between 0 and length - 1 included
        const i = getRandomNumber(result.length)
        let value = prompt(`Please enter your the value you remember of ${result[i][0]}: `);
        if (value === result[i][1]) {
            console.log("    correct")
        } else {
            const mistakes = countUnSimilarity(result[i][1], value);
            console.log(`    false, the correct value is ${result[i][1]} you got ${mistakes} mistakes`)
        }
    }
    
}

function countUnSimilarity(a, b) {
    let count = a.length;
    if (a.length === b.length) {
        for(let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                count--
            }
        }
    } else {
        return "length"
    }
    return count;
}

function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

refreshMemory()