fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {
            var card = document.createElement("div");
            card.className = "card text-white bg-dark mb-3 text-center";

            var content = `<img class="card-img-top" src="CountryFlag" alt="Card image">
                <div class="card-body">
                <h4 class="card-title">CountryName</h4>
                <p class="card-text">CountryInfo</p>
                <a href="CountryLink" class="btn btn-danger">Learn More</a>
                </div>`;
            
            if (json[i].name != json[i].nativeName) {
                content = content.replace("CountryName", json[i].name + ", " + json[i].nativeName);
            }
            else {
                content = content.replace("CountryName", json[i].name);
            }
            content = content.replace("CountryFlag", json[i].flag);
            content = content.replace("CountryInfo", "Capital: " + json[i].capital + "</br>" +
                "Population: " + json[i].population + "</br>" + "Area: " + json[i].area);
            content = content.replace("CountryLink", "http://www.wikipedia.com/wiki/" + json[i].name);
            
            card.innerHTML = content;

            if(i%3==0){
                var deck = document.createElement("div");
                deck.className = "card-deck";
                deck.id = "deck" + i;
                document.getElementById("main").appendChild(deck);

                document.getElementById("deck" + i).appendChild(card); 
            }

            if(i%3==1){
                document.getElementById("deck" + (i - 1)).appendChild(card);
            }

            if(i%3==2){
                document.getElementById("deck" + (i - 2)).appendChild(card);
            }
        }
    })

// fetch('https://restcountries.eu/rest/v2/all')
//     .then(response => response.json())
//     .then(json => {
//         for (let i = 0; i < json.length; i++) {
//             var x = document.createElement("div");

//             var content = `<img class="card-img-top" src="CountryFlag" alt="Card image">
//             <div class="card-body">
//             <h4 class="card-title">CountryName</h4>
//             <p class="card-text">CountryInfo</p>
//             <a href="CountryLink" class="btn btn-success">Learn More</a>
//             </div>`;

//             if (json[i].name != json[i].nativeName) {
//                 content = content.replace("CountryName", json[i].name + ", " + json[i].nativeName);
//             }
//             else {
//                 content = content.replace("CountryName", json[i].name);
//             }
//             content = content.replace("CountryFlag", json[i].flag);
//             content = content.replace("CountryInfo", "Capital: " + json[i].capital + "</br>" +
//                 "Population: " + json[i].population + "</br>" + "Area: " + json[i].area);
//             content = content.replace("CountryLink", "http://www.wikipedia.com/wiki/" + json[i].name);
//             x.className = "card";
//             x.innerHTML = content;
//             document.getElementById("countries").appendChild(x);
//         }
//     })