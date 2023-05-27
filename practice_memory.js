const phones = {
    mama: "0680097455",
    baba: "0666595608",
    soukayna: "0628016749",
    toufik1: "0667997604",
    driss: "0626804320",
    massar: "l133278644",
  };
  
  function refreshMemory() {
    const result = Object.entries(phones);
  
    let score = 0;
    const startTime = Date.now();
  
    while (true) {
      const i = getRandomNumber(result.length);
      const [key, value] = result[i];
      const userAnswer = prompt(`Please enter the value you remember for ${key}: `);
  
      if (userAnswer === value) {
        console.log("    Correct!");
        score++;
      } else {
        const mistakes = countUnSimilarity(value, userAnswer);
        console.log(`    Incorrect. The correct value is ${value}. You made ${mistakes} mistake(s).`);
      }
  
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      if (elapsedTime >= 60) {
        console.log("Time's up!");
        break;
      }
    }
  
    console.log(`\nGame over! Your score is ${score} point(s).`);
  }
  
  function countUnSimilarity(a, b) {
    if (a.length !== b.length) {
      return "length";
    }
  
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count++;
      }
    }
  
    return count;
  }
  
  function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  
  refreshMemory();
  