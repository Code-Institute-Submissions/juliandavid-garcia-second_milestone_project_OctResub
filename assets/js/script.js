
$(document).ready(function(){
  $(".dropdown-item").on({
      click: function(){
        $(".dropdown-item").removeClass("active");
          $(this).addClass("active");
      }
  });//active class hamburguer menu
  $(".nav-link").on({
    click: function(){
      $(".nav-link").removeClass("activee");
        $(this).addClass("activee");
    }
  });//activee class extended menu
  //amenities alert description
  
  $("#wifi").click(function(){
    if($(window).width() <= 768){
    alert("Wifi 70MB");
  }
  });
  $("#tv").click(function(){
    if($(window).width() <= 768){
    alert("SmartTV connected to internet");
  }
  });
  $("#blender").click(function(){
    if($(window).width() <= 768){
    alert("Blender for juices or smoothies");
  }
  });
  $("#microwave").click(function(){
    if($(window).width() <= 768){
    alert("Microwave to warm up your food");
  }
  });
  $("#local_laundry_service").click(function(){
    if($(window).width() <= 768){
    alert("Washing Machine 18kg capacity");
  }
  });
  $("#flatware").click(function(){
    if($(window).width() <= 768){
    alert("The apartment is equipped with cutlery for cooking");
  }
  });
  $("#iron").click(function(){
    if($(window).width() <= 768){
    alert("There is an iron just in case you might need it");
  }
  });
  $("#shower").click(function(){
    if($(window).width() <= 768){
    alert("Shower with warm and cold water");
  }
  });
  $("#elevator").click(function(){
    if($(window).width() <= 768){
    alert("Panoramic lift to enjoy the views");
  }
  });
  $("#not_interested").click(function(){
    if($(window).width() <= 768){
    alert("NO parking for cars, only for motorcycles");
  }
  });
});


//Google maps section
function initMap(){
  //map options
  var options ={
    zoom:15,
    center: {lat:4.5744359,lng:-75.64480}
  };
  //new map
  var map = new 
  google.maps.Map(document.getElementById("map"), options);

  //Array of markers
  var markers = [ 
{
coords:{lat:4.574413,lng:-75.64477},
iconImage:"https://img.icons8.com/color/48/000000/order-delivered.png",
content:"<h6>Flats Armenia</h6>"
},//Flats Armenia
{
coords:{lat:4.5403,lng:-75.7706},
iconImage:"https://img.icons8.com/clouds/100/000000/theme-park.png",
content:"<h6>parque del Cafe</h6>"
},//Coffe Park
{
coords:{lat:4.6078,lng:-75.8208},
iconImage:"https://img.icons8.com/color/48/000000/animal-shelter.png",
content:"<h6>Panaca</h6>"
},//Panaca
{
coords:{lat:4.6377,lng:-75.4891},
iconImage:"https://img.icons8.com/plumpy/24/000000/palm-tree.png",
content:"<h6>Cocora valley</h6>"
},//Cocora valley
{
coords:{lat:4.5748000,lng:-75.645177},
iconImage:"https://img.icons8.com/fluent/48/000000/parking.png",
content:"<h6>parking</h6><p>this parking on the street</p>"
},//parking-1
{
coords:{lat:4.574413,lng:-75.644197},
iconImage:"https://img.icons8.com/fluent/48/000000/parking.png",
content:"<h6>parking</h6><p>pay the porter to park your car inside</p>"
},//parking-2
{
coords:{lat:4.573253,lng:-75.6467303},
iconImage:"https://img.icons8.com/cute-clipart/64/000000/shopping-cart-loaded.png",
content:"<h6>supermarket D1</h6>"
},//supermarkt
{
coords:{lat:4.559613,lng:-75.65493},
iconImage:"https://img.icons8.com/bubbles/50/000000/bank.png",
content:"<h6>Bancolombia sucursal</h6>"
},//bnk bancolombia corresponsal 
{
coords:{lat:4.559031,lng:-75.655528},
iconImage:"https://img.icons8.com/bubbles/50/000000/bank.png",
content:"<h6>Davivienda</h6>"
},// Davivienda
{
coords:{lat:4.557978,lng:-75.656148},
iconImage:"https://img.icons8.com/bubbles/50/000000/bank.png",
content:"<h6>Bancolombia</h6>"
},//bank*/bancolombia
{
coords:{lat:4.5712990,lng:-75.6483749},
iconImage:"https://img.icons8.com/emoji/48/000000/atm-sign-emoji.png",
content:"<h6>ATM cajero</h6>"
},//atm
{
coords:{lat:4.5687962,lng:-75.6512214},
iconImage:"https://img.icons8.com/emoji/48/000000/atm-sign-emoji.png",
content:"<h6>ATM cajero</h6>"
},//atm2
{
coords:{lat:4.5689061,lng:-75.6515758},
iconImage:"https://img.icons8.com/color/48/000000/tableware.png",
content:"<h6>Food plaza Interplaza</h6>"
},//Restaurants super inter
{
coords:{lat:4.574950,lng:-75.644800},
iconImage:"https://img.icons8.com/color/48/000000/tableware.png",
content:"<h6>Food plaza Oronegro</h6>"
},//Restaurants oro negro mall
{
coords:{lat:4.574383,lng:-75.645865},
iconImage:"https://img.icons8.com/fluent/48/000000/bus.png",
content:"<h6>Bus station</h6><li>Bus 1</li><li>Bus 8</li><li>Bus 12</li><li>Bus 14</li><li>Bus 18</li>"
},//bus stop
{
coords:{lat:4.5762272,lng:-75.644762},
iconImage:"https://img.icons8.com/cute-clipart/64/000000/gas-station.png",
content:"<h6>Flats Armenia</h6>"
}//Gas station})
  ];

//Loop through Markers
for(var i = 0;i < markers.length;i++){
  addMarker(markers[i]);
}
 
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


// sendEmail.js
function sendMail(contactForm) {
  emailjs.send("service_ymcl8ma","template_fdrf9de", { 
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
  .then(
      function(response) {
            //console.log("SUCCESS", response);
          alert("Email sent successfully!");
          location.reload();
        },
      function(error) {
           //console.log("FAILED", error);
          alert("FAILED!"+error);
        }
    );
    return false;  // To block from loading a new page
}

 






