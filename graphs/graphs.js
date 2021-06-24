var embarkBtn = document.querySelector(".Boarding_btn")
var disEmbark = document.querySelector(".Disembarking_btn")
var townDrop = document.querySelector(".town")
var bus = {
  'Cape Town': 0,
  'Wood stock': 0,
  'Salt river': 0,
  'Koeberg': 0,
  'Maitland': 0,
  'Pinelands': 0,
  'Ndabeni': 0,
  "Langa": 0
}
var data = {
  labels: Object.keys(bus),
  datasets: [{
    label: 'Bus No GA-4526',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 244)',
    data_:data_  = Object.values(bus).reduce((elem , elemb)=> elem + elemb,0),
    data: bus_ = Object.values(bus).map(function (elem) { return elem }),
  }]
};
console.log(data_)
var config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y:{
        beginAtZero: true,
        display:true,
        text:["Number Of Passengers"]
      }
    }
  }
};
var myChart = new Chart(
  document.getElementById('myChart'),
  config
);
disEmbark.addEventListener("click", () => {
  if (townDrop.value === "Cape Town") {
    bus["Cape Town"]--
  } else if (townDrop.value === "Wood stock") {
    bus["Wood stock"]--
  } else if (townDrop.value === 'Salt river') {
    bus["Salt river"]--
  } else if (townDrop.value === "Koeberg") {
    bus["Koeberg"]--
  } else if (townDrop.value === "Maitland") {
    bus["Maitland"]--
  } else if (townDrop.value === "Pinelands") {
    bus["Pinelands"]--
  } else if (townDrop.value === "Ndabeni") {
    bus["Ndabeni"]--
  } else if (townDrop.value === "Langa") {
    bus["Langa"]--
  }
  data = {
    labels: Object.keys(bus),
    datasets: [{
      label: 'Bus No GA-4526',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 244)',
      data: bus_ = Object.values(bus).map(function (elem) { return elem }),
    }]
  };
  config = {
    type: 'line',
    data: data,
    data_:data_,
    options: {}
  };
  myChart.destroy();
  myChart = new Chart(
    document.getElementById('myChart'),
    config
    );
});
embarkBtn.addEventListener("click", () => {
  if (townDrop.value === "Cape Town") {
    bus["Cape Town"]++
  } else if (townDrop.value === "Wood stock") {
    bus["Wood stock"]++
  } else if (townDrop.value === 'Salt river') {
    bus["Salt river"]++
  } else if (townDrop.value === "Koeberg") {
    bus["Koeberg"]++
  } else if (townDrop.value === "Maitland") {
    bus["Maitland"]++
  } else if (townDrop.value === "Pinelands") {
    bus["Pinelands"]++
  } else if (townDrop.value === "Ndabeni") {
    bus["Ndabeni"]++
  } else if (townDrop.value === "Lanaga") {
    bus["Langa"]++
  }
  data = {
    labels: Object.keys(bus),
    datasets: [{
      label: 'Bus No GA-4526',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 244)',
      data: bus_ = Object.values(bus).map(function (elem) { return elem }),
    }]
  };
  config = {
    type: 'line',
    data: data,
    options: {}
  };
  myChart.destroy();
  myChart = new Chart(
    document.getElementById('myChart'),
    config
    );
  })
function addData(chart, labels, data) {
  chart.data.labels.push(labels);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}