'use strict';

class Order {

	constructor(frst, lst, email, typ, clr, sze, nte){
		this.frst = frst;
		this.lst = lst;
		this.email = email;
		this.typ = typ;
		this.clr = clr;
		this.sze = sze;
		this.nte = nte;


	}


}

class Subject {

    constructor() {
        this.handlers = []
    }

    subscribe(fn) {
            this.handlers.push(fn);
        }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(order) {
                if (order !== fn) {
                    return order;
                }
            }
        );
    }

    publish(msg, someobj) {
        var scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope, msg)
        }
    }
}

class Recipt extends Subject{

	constructor(){
		super();
		this.newOrders = [];
		this.oldOrders = [];
	}

	addOrder(ord) {
		this.newOrders.push(ord);
		this.publish('neworder', this);	

	}



}