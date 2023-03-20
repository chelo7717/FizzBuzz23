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
  it("deberia mostrarme el numero 4", () => {
    expect(fizzbuzz(4)).toEqual("4");
  });
  it("deberia mostrarme Buzz para el numero 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  it("deberia mostrarme Fizz para multiplos de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
  it("deberia mostrarme el numero 7", () => {
    expect(fizzbuzz(7)).toEqual("7");
  });
  it("deberia mostrarme el numero 8", () => {
    expect(fizzbuzz(8)).toEqual("8");
  });
  it("deberia mostrarme Fizz", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });
  it("deberia mostrarme Buzz para el multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
  it("deberia mostrarme FizzBuzz cuando es multiplo de 3 y 5 a la vez", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
  it("deberia mostrarme FizzBuzz cuando es multiplo de 3 y 5 a la vez", () => {
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });
});
