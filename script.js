function getFormvalue() {
    //Write your code here
// let formid= document.getElementById("form1");
	let fname = document.getElementsByTagName("input")[0];
	let lname = document.getElementsByTagName("input")[1];
	// console.log(fname.value, lname.value); 
	alert(`${fname.value} ${lname.value}`);
	
}
