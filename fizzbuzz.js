const FizzBuzz = number => {
  const fizz = !(number % 3) ? "Fizz" : "";
  const buzz = !(number % 5) ? "Buzz" : "";
  const fizzbuzz = `${fizz}${buzz}`;
  console.log(fizzbuzz !== "" ? fizzbuzz : number);
}

for (let i = 1; i <= 100; i++) {
  FizzBuzz(i);
}
