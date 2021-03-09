var map =  L.map('mapid', {
    center: [6, -75],
    zoom: 7
});

  
var base= L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',).addTo(map);


//añade el /los servicio WMS
var muni = L.tileLayer.wms("http://localhost:8080/geoserver/ICC/wms?service=WMS&", {
  layers: "ICC:div_muni_2011",
  tiled: true,
  format: 'image/png',
  transparent: true,
}).addTo(map); 




var datos = L.tileLayer.wms("http://localhost:8080/geoserver/ICC/wms?service=WMS&", {
	   layers: "ICC:tabla_con",
     tiled: true,
     format: 'image/png',
	   transparent: true,
	}).addTo(map);

 


// Añade la escala
L.control.scale({
    imperial: false
  }
  ).addTo(map);


//Añade sideBar

var right = '<h1>Bienvenido/a</h1>';

var content= "<br>  <p> Esta página esta construida llamando los datos desde un servicio WMS, los datos se despliegan siempre y cuando " +
"el servidor se encuentre corriendo (es decir, requiere anidarse en un servidor especializado que permita instalar postgres y " + 
"geoserver que permita tener los programas lanzados 24/7 para accederse en cualquier momento). Si estos no se despliegan,  " +
"es probable que el geoserver mediante el cual se suben los archivos no se encuentre activo. Por lo cual, debo volver a hacer "+
"enfasís en que estos datos solo se despliegan SI este se encuentra activo. Por esto es una opción interesante el uso de geojson "+
" combinado con plugins que agrupen los datos para su despliegue, tales como 'Markercluster' "+
" <br> Por favor, siga este <a href='Process.html'>enlace </a> para observar detalladamente el proceso de creación de las capas postgis "+
"hasta geoserver y la forma en que estan llamados acá. ";
content += "<h2>Metadatos </h2>"
content += "Epsg: 4686 <br>"
content += "Datum: Magna-Sirgas <br>"
content += "Elaborado por: Brayan Stiven Oviedo Yate"


var slide= L.control.slideMenu('', {position: 'topright', menuposition: 'topright', 
width: '30%', height: '400px', delay: '50', icon: "fas fa-bars"}).addTo(map);

slide.setContents(right + content);


                 
                
                
                
               
