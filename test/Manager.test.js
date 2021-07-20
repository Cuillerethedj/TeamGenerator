//Require Manger  
const Manager = require("../lib/Manager");

describe('Manager',() => {
	test('Manager class contains name, id, email, officeNumber', () => {
	//create test on Manger class
	const obj = new Manager();

	expect('name'in obj).toEqual(true);
	expect('id'in obj).toEqual(true);
	expect('email'in obj).toEqual(true);
	expect('officeNumber'in obj).toEqual(true);
	})

	test('Manager class contains name, id, email, officeNumber', ()=> {
	//test to see if you can set school using our constructor
	const test = 'teststring'
	const obj = new Manager('name','id','email',test);

	expect(obj.officeNumber).toEqual(test);
	})

// 	test('Manager class contains name, id, email, officeNumber', ()=> {
// 	//test to see if getRole() returns "Manager"
// 	const obj = new Manager();

// 	expect(obj.constructor.name()).toEqual('Manager');
	
	test('should return Manager school when call getOffice', ()=> {
		//test to see if you can set school using our constructor
		const test = 111
		const obj = new Manager('name','id','email',test);

		expect(obj.getOfficeNumber()).toEqual(test);
	})
//test to see if getGithub() returns role
test('should return Manger role when cal getRole()', ()=> {
	const obj = new Manager();

	expect(obj.getRole()).toEqual('Manager');
	})






	})