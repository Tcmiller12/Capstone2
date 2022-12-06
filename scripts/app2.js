function addOption(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function addOption_list(){
var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

for (var i=0; i < month.length;++i){
addOption(document.drop_list.Month_list, month[i], month[i]);
}

}
const countriesData = {
	"Australia": "",
	"Canada": "",
	"UK": "",
	"USA": ""
  }
  //Selecting the dropdown
  const countriesDropDown = document.getElementById("countriesDropDown");
  
  for (let key in countriesData) {
	let option = document.createElement("option");
	option.setAttribute('value', key);
  
	let optionText = document.createTextNode(key);
	option.appendChild(optionText);
  
	countriesDropDown.appendChild(option);
  }

  for (var i=0; i < locationsArray.length;++i){
	addOption(document.drop_list.Location_list, locationsArray[i], locationsArray[i]);
	}
	
	for (var i=0; i < parkTypesArray.length;++i){
		addOption(document.drop_list.park_list, parkTypesArray[i], parkTypesArray[i]);
		}
	
	
	addOption_list();
	
 