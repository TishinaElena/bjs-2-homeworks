function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	this.subject = undefined;
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.marks) {
		//console.log("Невозможно добавить оценки: студент отчислен.");
		return;
	}

	for (const mark of marks) {
		this.marks.push(mark);
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0; // Возвращаем 0, если нет оценок или студент отчислен
	}

	const sum = this.marks.reduce((total, mark) => total + mark, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);