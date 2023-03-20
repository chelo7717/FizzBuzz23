import fizzbuzz from "./FizzBuzz.js";

describe("fizzBuzz", () => {
  it("deberia mostrarme el 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
  it("deberia mostrarme el numero que quiera", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
  it("deberia mostrarme Fizz para el numero 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
});
