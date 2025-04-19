const Container = document.querySelector(".container");
const addButton = document.querySelector("#add");

// addButton.addEventListener('click',function(e){
	// const input = document.querySelector("#todo");
	// input.preventDefault;
	// input.value;

	// let div = document.createElement("div");
	// div.className = "inside";
	// Container.appendChild(div);
	
	// if(input.value){
		// let p = document.createElement("p")
		// p.textContent = `${input.value}`;
		// div.appendChild(p);		
	// }else{
		// alert("Please enter Something");
	// }
	
	// if(input.value){
		// let btn = document.createElement("button");
		// btn.textContent = "Remove";
		// div.appendChild(btn);
		// btn.addEventListener('click', function (e){
			// div.remove();
		// });
	// input.value = "";}
// });




addButton.addEventListener('click',function(e){
	const input = document.querySelector("#todo");
	input.preventDefault;
	input.value;

	let div = document.createElement("div");
	div.className = "inside";
	Container.appendChild(div);
	
	if(input.value){
		const p = document.createElement("p")
		const btn = document.createElement("button");
		// const checkboxes = document.createElement('input');
		// checkboxes.type = 'checkbox';
		p.textContent = `${input.value}`;
		btn.textContent = "Remove";
		// div.appendChild(checkboxes);
		div.appendChild(p);
		div.appendChild(btn);
		p.addEventListener('click', function (e){
			e.target.color = "blue";
			// p.textContent.color = "red";
			console.log(`p content ${p.textContent}`);
		})
		btn.addEventListener('click', function (e){
			div.remove();
		});
		input.value = "";
	}else{
		alert("Please enter Something");
	}
	
	// if(input.value){
		// let btn = document.createElement("button");
		// btn.textContent = "Remove";
		// div.appendChild(btn);
		// btn.addEventListener('click', function (e){
			// div.remove();
		// });
	// input.value = "";}
});

