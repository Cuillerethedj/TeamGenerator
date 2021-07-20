//require Employee
const Employee = require("../lib/Employee");
const employee = require(`../lib/Employee`);

describe("Employee", () => {
	// create test for employee 
	test('should return an objest conatining "name ,id ,email" property when called with the "new" keyword', () => {
		const obj = new Employee();
		// employeeName, id, email
		expect("name" in obj).toEqual(true);
		expect("id" in obj).toEqual(true);
		expect("email" in obj).toEqual(true);
	})
	
	// // test if can set name via constructor
	test('should set emplyee name to 1st param', () => {
		const test = "Bob";
		const obj = new Employee(test);

		expect(obj.name).toEqual(test);

	})
	// // test if can set id via constructor
	test('should set employee id equal to 2nd param', () => {
		const test = "1234";
		const obj = new Employee('name', test);

		expect(obj.id).toEqual(test);
	})
	// // test if can set email via constructor
	test('should set emplyee emailequal to 3rd param', () => {
		const test = 'person@email.com'
		const obj = new Employee('email', 'id', test);

		expect(obj.email).toEqual(test);
	})
	// // test to see if class name returns "Employee"
	test('sgould become a object when use new employee', () => {
		const obj = new Employee('Spoon');

		expect(obj.getName()).toEqual('Spoon');
	})


});











