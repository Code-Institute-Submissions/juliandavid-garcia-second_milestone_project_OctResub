function initMap(){
    //map options
    var options ={
      zoom:15,
      center: {lat:4.5744359,lng:-75.64480}
    }
    //new map
    var map = new 
    google.maps.Map(document.getElementById("map"), options);

    
   
   addMarker({coords:{lat:4.574413,lng:-75.64477},
  iconImage:"https://img.icons8.com/color/48/000000/order-delivered.png",
content:"<h6>Flats Armenia</h6>"});//Flats Armenia
addMarker({coords:{lat:4.5403,lng:-75.7706},
  iconImage:"https://img.icons8.com/clouds/100/000000/theme-park.png",
content:"<h6>parque del Cafe</h6>"});//Coffe Park
addMarker({coords:{lat:4.6078,lng:-75.8208},
  iconImage:"https://img.icons8.com/color/48/000000/animal-shelter.png",
content:"<h6>Panaca</h6>"});//Panaca
addMarker({coords:{lat:4.6377,lng:-75.4891},
  iconImage:"https://img.icons8.com/plumpy/24/000000/palm-tree.png",
content:"<h6>Cocora valley</h6>"});//Cocora valley
   addMarker({coords:{lat:4.5748000,lng:-75.645177},
  iconImage:"https://img.icons8.com/fluent/48/000000/parking.png",
content:"<h6>parking</h6><p>this parking on the street</p>"});//parking-1
addMarker({coords:{lat:4.574413,lng:-75.644197},
  iconImage:"https://img.icons8.com/fluent/48/000000/parking.png",
content:"<h6>parking</h6><p>pay the porter to park your car inside</p>"});//parking-2
addMarker({coords:{lat:4.573253,lng:-75.6467303},
  iconImage:"https://img.icons8.com/cute-clipart/64/000000/shopping-cart-loaded.png",
content:"<h6>supermarket D1</h6>"});//supermarkt
addMarker({coords:{lat:5.5744500,lng:-75.646162},
  iconImage:"https://img.icons8.com/cute-clipart/64/000000/shopping-cart-loaded.png",
content:"<h6>Supermarket Superinter</h6>"});//supermarkt
addMarker({coords:{lat:4.559613,lng:-75.65493},
  iconImage:"https://img.icons8.com/bubbles/50/000000/bank.png",
content:"<h6>Bancolombia sucursal</h6>"});//bnk bancolombia corresponsal 
addMarker({coords:{lat:4.559031,lng:-75.655528},
  iconImage:"https://img.icons8.com/bubbles/50/000000/bank.png",
content:"<h6>Davivienda</h6>"});// Davivienda
addMarker({coords:{lat:4.557978,lng:-75.656148},
  iconImage:"https://img.icons8.com/bubbles/50/000000/bank.png",
content:"<h6>Bancolombia</h6>"});//bank*/bancolombia 24.557978,-75.653831
addMarker({coords:{lat:4.5712990,lng:-75.6483749},
  iconImage:"https://img.icons8.com/emoji/48/000000/atm-sign-emoji.png",
content:"<h6>ATM cajero</h6>"});//atm
addMarker({coords:{lat:4.5687962,lng:-75.6512214},
  iconImage:"https://img.icons8.com/emoji/48/000000/atm-sign-emoji.png",
content:"<h6>ATM cajero</h6>"});//atm2
addMarker({coords:{lat:4.5689061,lng:-75.6515758},
  iconImage:"https://img.icons8.com/color/48/000000/tableware.png",
content:"<h6>Food plaza Interplaza</h6>"});//Restaurants super inter 
addMarker({coords:{lat:4.574950,lng:-75.644800},
  iconImage:"https://img.icons8.com/color/48/000000/tableware.png",
content:"<h6>Food plaza Oronegro</h6>"});//Restaurants oro negro mall 
addMarker({coords:{lat:4.574383,lng:-75.645865},
  iconImage:"https://img.icons8.com/fluent/48/000000/bus.png",
content:"<h6>Bus station</h6><li>Bus 1</li><li>Bus 8</li><li>Bus 12</li><li>Bus 14</li><li>Bus 18</li>"});//bus stop
addMarker({coords:{lat:4.5762272,lng:-75.644762},
  iconImage:"https://img.icons8.com/cute-clipart/64/000000/gas-station.png",
content:"<h6>Flats Armenia</h6>"});//Gas station});
   //Add Marker function
   function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      icon:props.iconImage
    });
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
      content:props.content
    });
    
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
    }
   }
   
  }

  