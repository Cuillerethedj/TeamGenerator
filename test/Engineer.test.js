	//require Engineer
	const Engineer = require("../lib/Engineer");

	describe('Engineer',() => {
	Test('Enginerr class contains name, id, email, github', () => {
	//create test on Engineer class
	const obj = new Engineer();

	expect('employeeName'in object) .toEqual(true);
	expect('id'in object) .toEqual(true);
	expect('email'in object) .toEqual(true);
	expect('githubUsername'in object) .toEqual(true);
	})

	test('Engineer class contains name, id, email, github', ()=> {
	//test to see if you can set github using our constructor
	const test = 'teststring'
	const obj = new Engineer('name','id','email',test);

	expect(obj.githubUsername()).toEqual(test);
	})

	test('Engineer class contains name, id, email, github', ()=> {
	//test to see if getRole() returns "Engineer"
	const obj = new Engineer();

	expect(obj.constructor.name()).toEqual('Engineer');
	})
	test('should return engineer github when call getGithub', ()=> {
		//test to see if you can set github using our constructor
		const test = 'cuillerethedjgithub'
		const obj = new Engineer('name','id','email',test);

		expect(obj.hitGithube()).toEqual(test);
	})
//test to see if getGithub() returns github test value
test('should return engineer role when cal getRole()', ()=> {
	const obj = new Engineer();

	expect(obj.getRole()).toEqual('Engineer');
	})






	});




