	//require Engineer
	const Engineer = require("../lib/Engineer");

	describe('Engineer',() => {
	test('Engineer class contains name, id, email, github', () => {
	//create test on Engineer class
	const obj = new Engineer();

	expect('name'in obj).toEqual(true);
	expect('id'in obj).toEqual(true);
	expect('email'in obj).toEqual(true);
	expect('github'in obj).toEqual(true);
	})

	test('Engineer class contains name, id, email, github', ()=> {
	//test to see if you can set github using our constructor
	const test = 'teststring'
	const obj = new Engineer('name','id','email',test);

	expect(obj.github).toEqual(test);
	})


	test('should return engineer github when call getGithub', ()=> {
		//test to see if you can set github using our constructor
		const username = 'cuillerethedjgithub'
		const obj = new Engineer('name','id','email',username);

		expect(obj.getGithub()).toEqual(username);
	})
//test to see if getGithub() returns github test value
test('should return engineer role when cal getRole()', ()=> {
	const obj = new Engineer();

	expect(obj.getRole()).toEqual('Engineer');
	})




	});




