const  bus = {
    // locations:[ 'Cape Town', 'wood stock','Salt river','Koeberg','Maitland','Pinelands','Ndabeni',"Langa"],
    
    'Cape Town':0,
    'wood stock':0,
    'Salt river':0,
    'Koeberg':0,
    'Maitland':0,
    'Pinelands':0,
    'Ndabeni':0,
    "Langa":0
}


const data = {
  labels: Object.keys(bus) ,
  datasets: [{
    label: 'Bus No GA-4526',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 244)',
    data: Object.values(bus),
  }]
};


const config = {
    type: 'line',
    data,
    options: {}
  };