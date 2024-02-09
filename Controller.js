var types = ['Short Sleeve', 'Long Sleeve', 'Jacket', 'Zip-Up Jacket', 'Hoodie'];
var colors = ['Black', 'Blue'];
var sizes = ['SM', 'MD', 'LG', 'XL'];

var reciptModel = new Recipt();
var myView = new OrderView(reciptModel);

var storageSaver = new localStorageSaver(reciptModel,'lsRecipt');

function clickedon() {
	let rowcolids = ['fname', 'lname', 'mail', 'typ', 'clr', 'sze', 'nte']; //names match ids from HTML file
	let vals ={};

	for (let cid of rowcolids) {
		vals[cid] = document.getElementById(cid).value;
	}

	let it = new Order(vals.fname, vals.lname , vals.mail, vals.typ, vals.clr, vals.sze, vals.nte);
	
	reciptModel.addOrder(it);

	document.getElementById('fname').value = "";
	document.getElementById('lname').value = "";
	document.getElementById('mail').value = "";
	document.getElementById('nte').value = "";
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList);
    for (let s of sList) {
        let opt = document.createElement("option");
        opt.value = s;
        opt.innerHTML = s;
        sel.appendChild(opt);
    }
}

/*
$(document).ready(function() {
	populateSelect('typ', types);
	populateSelect('clr', colors);
	populateSelect('sze', sizes);
});
*/