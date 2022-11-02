"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  }
  if (d === 0) {
    // arr = [];
    arr.push(-b / (2 * a));
  } else {
    //  arr = [];
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let per = parseInt(percent) / 100 / 12; //процентная ставка
  let con = parseInt(contribution); //начальный взнос
  let am = parseInt(amount); //общая стоимость
  if (Number.isNaN(per) || per < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (Number.isNaN(con) || con < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (Number.isNaN(am) || am < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let cur = new Date();
    if (cur.getFullYear() > date.getFullYear()) {
      return `Параметр "Срок ипотеки" содержит неправильное значение "${date}"`;
    }
    let s = am - con; //тело кредита
    let n =
      date.getMonth() -
      cur.getMonth() +
      12 * (date.getFullYear() - cur.getFullYear()); //срок
    let pay = s * (per + per / ((1 + per) ** n - 1)); //ежемесячная оплата
    let totalAmount = (pay * n).toFixed(2); //строка
    console.log(totalAmount); //выведена строка
    return +totalAmount; //дб числовой
  }
  return +totalAmount;
}