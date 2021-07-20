//Require Intern  
const intern = require("../lib/Intern");

describe('Intern',() => {
	Test('Inter class contains name, id, email, school', () => {
	//create test on Intern class
	const obj = new Intern();

	expect('employeeName'in object) .toEqual(true);
	expect('id'in object) .toEqual(true);
	expect('email'in object) .toEqual(true);
	expect('school'in object) .toEqual(true);
	})

	test('Intern class contains name, id, email, school', ()=> {
	//test to see if you can set school using our constructor
	const test = 'teststring'
	const obj = new Intern('name','id','email',test);

	expect(obj.school()).toEqual(test);
	})

	test('Intern class contains name, id, email, school', ()=> {
	//test to see if getRole() returns "Intern"
	const obj = new Intern();

	expect(obj.constructor.name()).toEqual('Intern');
	})
	test('should return Intern school when call getSchool', ()=> {
		//test to see if you can set school using our constructor
		const test = 'University ofj'
		const obj = new Intern('name','id','email',test);

		expect(obj.getschool()).toEqual(test);
	})
//test to see if getGithub() returns role
test('should return Intern role when cal getRole()', ()=> {
	const obj = new Intern();

	expect(obj.getRole()).toEqual('Intern');
	})






	});
//create test on Intern class

//test to see if you can set school using our constructor

//test to see if getRole() returns "Intern"

//test to see if getSchool() returns school testvalue