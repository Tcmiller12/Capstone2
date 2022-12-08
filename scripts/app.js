//  submitButton.addEventListener('click', async () => {

//  });
window.onload = () =>{displayCards()} 


function mountainTemplate(mountain) {
 let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
  let id = mountain.name.replace(" ", "").replace(".","")
  return `
    <div id = "${id}" class="mountain">
    <img class="mountain-photo" src="images/${mountain.img}">
    <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
    <h4 class="mountain-desc">${mountain.desc} </h4>
    <p><strong>Effort:</strong> ${mountain.effort}</p>
    <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
    <strong>Sunrise:</strong> ${mySunrise}
    </div>
    `;
}

document.getElementById("mountains").innerHTML = `
  <h1 class="app-title"> ${mountainsArray.length} Mountains to climb</h1>
  ${mountainsArray.map(mountainTemplate).join("")}
  <p class="footer">These ${mountainsArray.length} mountants were added recently. Check back soon for updates.</p>
`;  

async function getSunsetForMountain(lat, lng){
  //let response = await fetch(
  // `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  //let data = await response.json();
  //return data;
  }

  
    
 function loadData() {
     var down = document.getElementById('mountain');
            for (let i = 0; i < mountainsArray.length; i++) {
                var optn = mountainsArray[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                down.appendChild(el);
            }
            down.innerHTML = "Elements Added";
        }

        var myArray = new Array("Mt. Washington","Mt. Jefferson","Mt. Monroe","Mt. Madison","Mt. Lafayette","Mt. Lincoln",
        "South Twin","Carter Dome","Mt. Moosilauke","Mt. Eisenhower","North Twin","Mt. Carrigain","Mt. Bond","Middle Carter","West Bond",
        "Mt. Garfield","Mt. Liberty","South Carter","Wildcat Mountain","Mt. Hancock","South Kinsman","Mt. Field","Mt. Osceola","Mt. Flume",
        "South Hancock","Mt. Pierce","North Kinsman","Mt. Willey","Zealand Mountain","North Tripyramid","East Osceola","Middle Tripyramid",
        "Cannon Mountain","Wildcat D","Mt. Hale","Mt. Jackson","Mt. Tom","Mt. Moriah","Mt. Passaconaway","Owl's Head","Galehead Mountain",
        "Mt. Whiteface","Mt. Waumbek","Mt. Isolation","Mt. Tecumseh",
        );


// Get dropdown element from DOMttt
var dropdown = document.getElementById("selectMountain");

// Loop through the array
for (var i = 0; i < myArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
}

function listMountain() {
 let dropValue = document.getElementById("selectMountain").value;
 let id = dropValue.replace(" ", "").replace(".","")
 document.getElementById(id).scrollIntoView()
}

// Get the button:
let mybutton = document.getElementById("myBn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//let filteredLocation = locationsArray.filter(location => location == selectedValue);
//let selectedValue; //intializing variable
// ^ Code from mm


