// GO!

// TASK 1 -- Show/Hide Nav

var button = document.querySelector('.answer-box button')
button.innerText = "hide nav";
button.addEventListener('click', function(e){
	var navItem = document.querySelector('.nav-menu');
    if (navItem.style.visibility === 'hidden') {
    	navItem.style.visibility = 'visible';
    	button.innerText = "hide nav";
    } else {
    	navItem.style.visibility = 'hidden';
    	button.innerText = "show nav";
    }

});



// TASK 2 -- Select an Icon
var iconSelected = document.querySelectorAll('.option');
iconSelected.forEach(function(item){
	item.addEventListener('click', function(e){
		console.log(e.currentTarget.className);
		if (e.currentTarget.className === "option") {
			e.currentTarget.className = 'option selected';
		} else {
			e.currentTarget.className = 'option';
		}
	});
});


// TASK 3 -- Move Item From List to List

var itemList = document.querySelectorAll('.point');
itemList.forEach(function(circle){
	circle.addEventListener('click', function(e){
		var number = parseInt(e.currentTarget.innerText);
		var numTarget = parseInt(document.querySelector('.total-points').innerText);
        document.querySelector('.total-points').innerText = numTarget + number;
	});
});

// TASK 4 -- Add Guest to List

var guestList = document.querySelectorAll('.answer-box li');
guestList.forEach(function(li){
	li.addEventListener('click', function(e){
		var itemList = e.currentTarget;
		var classOfItemList = e.currentTarget.parentNode.className;
		itemList.remove();
		if (classOfItemList === "good-standing-list") {
			document.querySelector('.probation-list').appendChild(itemList);
		} else {
			document.querySelector('.good-standing-list').appendChild(itemList);			
		}
	});
});



// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

var spanItems = document.querySelectorAll('.palette span');
spanItems.forEach(function(span){
	span.addEventListener('click', function(e){
		var spanName = e.currentTarget.className;
		var classColor = spanName.slice(3,spanName.length);
		document.querySelector('.msg').className = 'msg bg-' + classColor; 
	});
});






