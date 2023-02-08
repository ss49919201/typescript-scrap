const Mike = {
	name: 'Mike',
	age: 15
}

const main = () => {
	const {name: nameOfMike, age: ageOfMike} = Mike;
	console.log(nameOfMike, ageOfMike); // Mike 15
};

main();
