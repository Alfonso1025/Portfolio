//use an async functionality in order to call the API.

"use strict"


        const key = "ceac3276-b187-4407-86f7-b10e62b7f3d0";

        const url= "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",

            qString="?CMC_PRO_API_KEY=" + key + "&start=1&limit=5&convert=USD ";


        fetch(url + qString)
              .then(function(res){
                return res.json();
              })
              .then(function(data){
               let arrayData = data.data;
               let width=screen.width;
               console.log(arrayData)
               console.log(width);
                if(width>700){
               appenData(arrayData);
               
                }
                else{
                  appenresponsive(arrayData);
                  
                }
                 
              })




              function appenData(array){
                  for(var i=0; i<array.length; i++){

                    var tbodyContent= document.getElementById('tbody');
                    var tr= document.createElement("tr");
                    
                    tr.innerHTML= tr.innerHTML+ `<td>${array[i].name}</td>
                                                <td>${array[i].quote.USD.price}</td>
                                                <td>${array[i].quote.USD.market_cap}</td>
                                                 <td>${array[i].circulating_supply}</td>`;
                  
                    tbodyContent.appendChild(tr);
                    
                
                }
                 }

                 function appenresponsive(array){
                  for(var i=0; i<array.length; i++){

                    var tbodyContent= document.getElementById('tbody');
                    var tr= document.createElement("tr");
                    
                    tr.innerHTML= tr.innerHTML+ `<td>${array[i].name}</td>
                                                <td>${array[i].quote.USD.price}</td>`;
                  
                    tbodyContent.appendChild(tr);
                    
                
                }
                 }

                 
