const article = {
    title: 'Descomplicando call, apply e bind',
    language: 'JavaScript',
  };
  
  function print() {
    console.log(`${this.title} em ${this.language}.`);
  }
  
  print.call(article);

  function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}

sumNumbers.apply(4, [2, 3]) // 9