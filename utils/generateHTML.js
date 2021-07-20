//create function that organizes information for the team and returns html for each type of team member inside a html template

//will need individual functions to take in team member and return the appropiate info

const generateHtml =  (teamArray) => {





const htmlCards = []


for (let i = 0; i < teamArray.length; i++) {

if(teamArray[i].getRole() === 'Manager') {
	var card = 
  `<div class="card border-dark mb-3" style="max-width: 18rem;">
	<div class="card-header">Manager</div>
	<div class="card-body text-dark">
	<h5 class="card-title">${teamArray[i].name}</h5>
	<p class="card-text">${teamArray[i].id}<br>${teamArray[i].email}<br>${teamArray[i].officeNumber}</p>
	</div>
</div>`
} else if(teamArray[i].getRole() === 'Intern') {
	var card = 
	`<div class="card border-dark mb-3" style="max-width: 18rem;">
	<div class="card-header">Intern</div>
	<div class="card-body text-dark">
	<h5 class="card-title">${teamArray[i].name}</h5>
	<p class="card-text">${teamArray[i].id}<br>${teamArray[i].email}<br>${teamArray[i].school}</p>
	</div>
</div>`
} else if(teamArray[i].getRole() === 'Engineer') {
	var card =
	`<div class="card border-dark mb-3" style="max-width: 18rem;">
	<div class="card-header">Engineer</div>
	<div class="card-body text-dark">
	<h5 class="card-title">${teamArray[i].name}</h5>
	<p class="card-text">${teamArray[i].id}<br>${teamArray[i].email}<br>${teamArray[i].github}</p>
	</div>
</div>`

}

htmlCards.push(card)	
}

const fakeHtml = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Employees</title>
</head>
<body>
    <section>
    ${htmlCards}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`
return fakeHtml;
}


module.exports = generateHtml
