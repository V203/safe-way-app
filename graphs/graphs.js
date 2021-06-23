var disembarking_btn = document.querySelector(".getoff");
var boarding_btn = document.querySelector(".geton")
var add_btn = document.querySelector(".add_btn")
var nextD_btn = document.querySelector(".nextd_btn")


// const  bus = {


//     // 'Cape Town':8,
//     // 'wood stock':2,
//     // 'Salt river':0,
//     // 'Koeberg':0,
//     // 'Maitland':0,
//     // 'Pinelands':1,
//     // 'Ndabeni':0,
//     // "Langa":0
// }

var bus = [
  { name: "Cape Town", passengers: 1 },
  { name: "wood stock", passengers: 2 },
  { name: "Saltriver", passengers: 3 },
];
var townName = []
var temp = []

var tempUpdated = [];

for (let i = 0; i < bus.length; i++) {

  temp.push(bus[i].passengers)
  townName.push(bus[i].name)
  // console.log(bus[key]);

}


// disembarking_btn.addEventListener("click",function(){

//    temp = Object.keys(bus)



// })

boarding_btn.addEventListener("click", function (e) {

e.preventDefault()
  var objIndex = bus.findIndex(function (elem) {
    return elem.name == "Saltriver";

  });
  console.log(objIndex)

  bus[objIndex].passengers = bus[objIndex].passengers += 1
  // console.log(bus[objIndex])
  // console.log(bus)

  temp = []
  // for (let i = 0; i < bus.length; i++) {

  //   tempUpdated.push(bus[i].passengers)
  //   console.log(bus[i].passengers);
  // }

  //alert("hghg")
})

// add_btn.addEventListener("click",function(){
//  bus['wood stock']+=1

// })


// nextD_btn.addEventListener("click",function(){
//     alert()

// })

var data = {
  labels: townName,
  datasets: [{
    label: 'Bus No GA-4526',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 244)',
    data: temp,
  }]
};


var config = {
  type: 'bar',
  data
};


