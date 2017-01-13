function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.getFullName = function () {
		return this.firstName +" "+ this.lastName;
	};
	this.getInfo = function () {
		return "My names are "+this.getFullName();
	};
}
function Andela(firstName, lastName, department) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.department = department;
	
	Andela.prototype.getInfo = function () {
		return "My names are "+this.getFullName()+ " an Andela fellow " +this.department + " department";
	};

}
function Employee(firstName, lastName, job, salary) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.job = job;
	this.salary = salary;
	
	Employee.prototype.getInfo = function () {
		return "My names are "+this.getFullName()+" and am " + this.job +" and on a salary of "+this.salary;
	};
}

Andela.prototype = new Person();
Employee.prototype = new Person();


var andelaFellow = new Andela("Ijege", "Precious","Software Developing");
console.log(andelaFellow.getInfo());

var employee = new Employee("Anna", "turan","Programmer", 100000);
console.log(employee.getInfo());



