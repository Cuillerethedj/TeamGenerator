//Require Manger  
const Manger = require("../lib/Manager");

describe('Manager',() => {
	Test('Manager class contains name, id, email, officeNumber', () => {
	//create test on Manger class
	const obj = new Manger();

	expect('employeeName'in object) .toEqual(true);
	expect('id'in object) .toEqual(true);
	expect('email'in object) .toEqual(true);
	expect('school'in object) .toEqual(true);
	})

	test('Manager class contains name, id, email, officeNumber', ()=> {
	//test to see if you can set school using our constructor
	const test = 'teststring'
	const obj = new Manager('name','id','email',test);

	expect(obj.officeNumber()).toEqual(test);
	})

	test('Manager class contains name, id, email, officeNumber', ()=> {
	//test to see if getRole() returns "Manager"
	const obj = new Manager();

	expect(obj.constructor.name()).toEqual('Manager');
	})
	test('should return Manager school when call getOffice', ()=> {
		//test to see if you can set school using our constructor
		const test = '111'
		const obj = new Manager('name','id','email',test);

		expect(obj.getOffice()).toEqual(test);
	})
//test to see if getGithub() returns role
test('should return Manger role when cal getRole()', ()=> {
	const obj = new Manager();

	expect(obj.getRole()).toEqual('Manager');
	})






	});