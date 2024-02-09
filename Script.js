/*add while loop around everything based on a boolean that is reset to false at the end but made true onclick

savenow = function(){
	
	//boolean clicked = true;	
	
	var frst =  document.querySelector("#fname");
	var lst = document.querySelector("#lname");
	var mail =  document.querySelector("#mail");
	var clr =  document.querySelector("#clr");
	var typ = document.querySelector("#typ");
	var sze = document.querySelector("#sze");
	var note = document.querySelector("#nte");
	var sve =  document.querySelector("#sve");
	
	var outtbl =  document.querySelector("#outtbl");
	var order =  document.querySelector("#order");
	
	//console.log("pressed");

	newrow = document.createElement("tr");
	frst_td = document.createElement("td");
	frst_cont = document.createTextNode(frst.value);
	
	frst_td.appendChild(frst_cont);
	newrow.appendChild(frst_td);

	/*
	tsk = document.createElement("td");
	tsk.setAttribute("width", "65%");
	
	if(task.value!=""){
		tsk_cont = document.createTextNode(task.value);
	}else{
		alert("please enter something");
	}
	
	
	lst_td = document.createElement("td");
	lst_cont = document.createTextNode(lst.value);
	
	lst_td.appendChild(lst_cont);
	newrow.appendChild(lst_td);
	
	mail_td = document.createElement("td");
	mail_cont = document.createTextNode(mail.value);
	
	mail_td.appendChild(mail_cont);
	newrow.appendChild(mail_td);
	
	typ_td = document.createElement("td");
	typ_cont = document.createTextNode(typ.value);
	
	typ_td.appendChild(typ_cont);
	newrow.appendChild(typ_td);

	clr_td = document.createElement("td");
	clr_cont = document.createTextNode(clr.value);
	
	clr_td.appendChild(clr_cont);
	newrow.appendChild(clr_td);

	sze_td = document.createElement("td");
	sze_cont = document.createTextNode(sze.value);
	
	sze_td.appendChild(sze_cont);
	newrow.appendChild(sze_td);

	note_td = document.createElement("td");	

	if(Number(note.value)==0){		
		note_cont = document.createTextNode("N/A");
	}else{
		note_cont = document.createTextNode(note.value);
	}
	
	note_td.appendChild(note_cont);
	newrow.appendChild(note_td);
	
	if((Number(frst.value)==0) & (Number(lst.value)==0) & (Number(mail.value)==0)){
		alert("Please Fill Out the Required Fields");
	}else if((Number(frst.value)==0) || (Number(lst.value)==0)){
		alert("Please Enter Your First AND Last Name");
	}else if (Number(mail.value)==0){
		alert("Please Enter Your Email");
	}else{
		
		outtbl.appendChild(newrow);	
		frst.value = "";
		lst.value = "";
		mail.value = "";
		note.value = "";
	
	}
	
	
	/*
	for(let i=1; clicked==true; i++ ){
	
	}
	*/

	//console.log("pressed");
	//document.body.insertBefore(newrow, row);
	//document.row.appendChild(td);
	//document.tbl.appendChild(row);


