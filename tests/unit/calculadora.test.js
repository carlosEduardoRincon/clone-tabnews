const calculadora = require("../../models/calculadora.js");

test("Sum test 2+3 is 5", () => {
  expect(calculadora.somar(2, 3)).toBe(5);
});

test("Sum test 5+100 is 105", () => {
  expect(calculadora.somar(5, 100)).toBe(105);
});

test("Sum test curso+100 is Error", () => {
  expect(calculadora.somar("curso", 100)).toBe("Erro");
});

test("Sum test 100+curso is Error", () => {
  expect(calculadora.somar(100, "curso")).toBe("Erro");
});

test('Sum test ""+curso is Error', () => {
  expect(calculadora.somar("", "curso")).toBe("Erro");
});
