class OrderView {

	constructor(model) {
        	// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
        	model.subscribe(this.redrawOrder.bind(this));
    	}

	redrawOrder(orderList, msg) {
		let tbl = document.getElementById("output");
		tbl.innerHTML = "";
		for (let order of orderList.newOrders) {
			this.addRow(order, tbl);
		}
		
	}

	addRow(order, parent){
		let row = document.createElement("tr");

		for (let val of ['frst', 'lst', 'email', 'typ', 'clr', 'sze', 'nte']) {
			let td = document.createElement("td");
			td.innerHTML = order[val];
			row.appendChild(td);
        	}
	
        	parent.appendChild(row);

	}	

}