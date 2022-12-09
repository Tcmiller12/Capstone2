function displayCards (){
    nationalParksArray.forEach(park => {
        let title = park.LocationName
        let text = `${park.City},${park.State},${park.Address}${park.ZipCode}`
        let cardTemplate = `  <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${text}</p>
        </div>
        </div>`
        var parkCards = document.getElementById("parkCards")
        parkCards.insertAdjacentHTML ("beforeend",cardTemplate)
    })
    }

  window.onload = () =>{displayCards()} 

  function statesList() {
    var statesList = document.getElementById("states"); 
    // document.getElementById("parksInfo").value = statesList.options[statesList.selectedIndex].text;
    let parksByLocation = nationalParksArray.filter(park => park.State == statesList.value);
  }
