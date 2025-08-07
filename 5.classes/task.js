class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100; // внутреннее свойство (используем _ для сеттера/геттера)
    this.type = null;
  }

  // Геттер для state
  get state() {
    return this._state;
  }

  // Сеттер для state с проверками
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  // Метод для "починки" издания
  fix() {
    this.state = this._state * 1.5; // используем сеттер для автоматической проверки
  }
}

 class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount); // Вызов конструктора родителя
    this.type = "magazine"; // Устанавливаем тип
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount); // Вызов конструктора родителя
    this.author = author;
    this.type = "book"; // Устанавливаем тип
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount, author); // Вызов конструктора родителя
    this.type = "novel"; // Устанавливаем тип
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount, author); // Вызов конструктора родителя
    this.type = "fantastic"; // Устанавливаем тип
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount, author); // Вызов конструктора родителя
    this.type = "detectiveBook"; // Устанавливаем тип
  }
}

class Library{
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30){
      this.books.push(book)
    }
  }

  findBookBy(type, value){
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex === -1) {
      return null; 
    }
    const givenBook = this.books.splice(bookIndex, 1); 
    return givenBook; 
  }
}

