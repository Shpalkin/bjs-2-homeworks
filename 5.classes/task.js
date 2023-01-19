class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    return state * 1.5;
  }
  set state(number) {
    if (number < 0) {
      number = 0;
    } else if (number > 100) {
      number = 100;
    }
    return number;
  }
  get state() {
    const sherlock = new PrintEditionItem(
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    );

    console.log(sherlock.releaseDate); //2019
    console.log(sherlock.state); //100
    sherlock.fix();
    console.log(sherlock.state); //100
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = magazine;
  }
}
class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = book;
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount) {
    this.type = novel;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
}
class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount) {
    this.type = fantastic;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
}
class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount) {
    this.type = detective;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
}
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (state > 30);
    this.books.push(book);
  }
  findBookBy(type, value) {}
  giveBookByName(bookName) {}
