//Require Intern  
const Intern = require("../lib/Intern");

describe('Intern',() => {
	test('Inter class contains name, id, email, school', () => {
	const obj = new Intern();

	expect('name'in obj).toEqual(true);
	expect('id'in obj).toEqual(true);
	expect('email'in obj).toEqual(true);
	expect('school'in obj).toEqual(true);
	})

	test('Intern class contains name, id, email, school', ()=> {
	//test to see if you can set school using our constructor
	const test = 'teststring'
	const obj = new Intern('name','id','email',test);

	expect(obj.school).toEqual(test);
	})

// 	test('Intern class contains name, id, email, school', ()=> {
// 	//test to see if getRole() returns "Intern"
// 	const obj = new Intern();

// 	expect(obj.constructor.name()).toEqual('Intern');
// 	})
	test('should return Intern school when call getSchool', ()=> {
		//test to see if you can set school using our constructor
		const test = 'University ofj'
		const obj = new Intern('name','id','email',test);

		expect(obj.getSchool()).toEqual(test);
	})
//test to see if getGithub() returns role
test('should return Intern role when cal getRole()', ()=> {
	const obj = new Intern();

	expect(obj.getRole()).toEqual('Intern');
	})






	});
