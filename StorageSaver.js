"use strict"
class localStorageSaver {

    constructor(model,lsname) {
        this.lsname = lsname;
        let self = this
        model.subscribe(function(slist, msg) {
            self.saveAll(slist)
        })
        // now restore from localstorage
        
	
		let restore_list = JSON.parse(localStorage.getItem(self.lsname))

        if(!!restore_list){
		for(let vals of restore_list) {
            	let it = new Order(vals.frst, vals.lst , vals.email, vals.typ, vals.clr, vals.sze, vals.nte);
            	model.addOrder(it)
        	}
	}
    }
 
    saveAll(slist) {
        let ls_list = JSON.stringify(slist.newOrders)
        localStorage.setItem(this.lsname, ls_list)
    }
}