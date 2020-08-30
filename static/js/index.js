var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=83889b677c11b7a19256faaff5d76851')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";
  const cont = document.querySelector('.container');
  cont.style.display = 'inline';
  const inp = document.querySelector('.input');
  inp.style.display = 'none';

})

.catch(err => alert("Wrong city name!"));
})


const rld = document.querySelector('.rld');
rld.addEventListener('click', function(name){
  const cont = document.querySelector('.container');
  cont.style.display = 'none';
  const inp = document.querySelector('.input');
  inp.style.display = 'inline';
})
