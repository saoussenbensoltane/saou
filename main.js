constCLEFAPI='e96a4cbef9eb6caf993f5e444df2ab14';
let resultatsAPI;
const temps==document.querySelector('.temps');
const temperature==document.querySelector('.temperature');
const localisation==document.querySelector('.localisation');
const heure==document.querySelector('.heure-nom-prevision');
const tempspourH==document.querySelector('.heure-prevision-valeur');
if (navigator.geolocalion){

navigator.geolocalion.getCurrentPosition(position=>{
//console.log(position);
let long=position.coords.longitude;
let lat=position.coords.latitude;
AppelAPI(long,lat);
},()=> {
 alert('vous avez refuser la geolocalisation,l app ne peut pas travailler ')
 })
}
function AppelAPI(long,lat){
	fetch('https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&long=${lon}&exclude=minutely&units=metric&long=fr&appid=${CLEFAPI}')
	.then((reponse)=>{ return reponse.json();})
	.then((data) =>{ 
	//console.log(data);
	
	
	resultatsAPI=data;
	temps.innerText=resultatsAPI.current.weather[0].description
	temperature.innerText='${Math.trunc(resultatsAPI.current.temp)}°'
	localisation.innerText=resultatsAPI.timezone;
	letheureActuelle=new Date().getHours();
for (let i=0; i<	heure.length;i++){
let  heureIncr=heureActuelle+i*1;
heure[i].innerText='${heureIncr} h'; 	
	
	})
	
