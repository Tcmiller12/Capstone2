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

  function favTutorial() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }

    let parksByLocation = nationalParksArray.filter(park => park.State == selectedLocationValue);