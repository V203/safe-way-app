var embarkBtn = document.querySelector(".Boarding_btn")
var disEmbark = document.querySelector(".Disembarking_btn")
var townDrop = document.querySelector(".town")
var  bus = {        
  'Cape Town':0,
  'wood stock':0,
  'Salt river':0,
  'Koeberg':0,
  'Maitland':7,
  'Pinelands':9,
  'Ndabeni':3,
  "Langa":9
}

var data = {
  labels: Object.keys(bus) ,
  datasets: [{
    label: 'Bus No GA-4526',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 244)',
    data: bus_ = Object.values(bus).map(function(elem){ return elem }) ,
  }]
};

const config = {
  type: 'line',
  data,
  options: {}
};

var myChart = new Chart(
  document.getElementById('myChart'),
  config
);



disEmbark.addEventListener("click",function(){
  
  if(townDrop.value === "Cape Town" ){
    bus["Cape Town"]= -1
  }else if(townDrop.value === "Wood stock"){
    bus["Wood stock"]= -1
  }else if(townDrop.value === 'Salt river'){
    bus["Salt river"]= -1
  }else if(townDrop.value === "Koeberg"){
    bus["Koeberg"]= -1
  }else if(townDrop.value === "Maitland"){
    bus["Maitland"]= -1
  }else if(townDrop.value === "Pinelands"){
    bus["Pinelands"]= -1
  }else if(townDrop.value === "Ndabeni"){
  bus["Ndabeni"]= -1    
  }else if(townDrop.value === "Lanaga"){
    bus["Langa"] = -1  
    }
    myChart.update()

    
});
embarkBtn.addEventListener("click",function(){
  myChart.update()
  if(townDrop.value === "Cape Town" ){
    bus["Cape Town"]++
  }else if(townDrop.value === "Wood stock"){
    bus["Wood stock"]++
  }else if(townDrop.value === 'Salt river'){
    bus["Salt river"]++
  }else if(townDrop.value === "Koeberg"){
    bus["Koeberg"]++
  }else if(townDrop.value === "Maitland"){
    bus["Maitland"]++
  }else if(townDrop.value === "Pinelands"){
    bus["Pinelands"]++
  }else if(townDrop.value === "Ndabeni"){
  bus["Ndabeni"]++    
  }else if(townDrop.value === "Lanaga"){
    bus["Langa"]++    
    }
})





