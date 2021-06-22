const  bus = {
    locations:[ ],
    capacity:0
}

const locations = [
  'Cape Town',
  'wood stock',
  'Salt river',
  'Koeberg',
  'Maitland',
  'pinelands',
  'Ndabeni',
  "Langa"

];


const data = {
  labels: locations,
  datasets: [{
    label: 'Bus No GA-4526',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 244)',
    data: [0, 2, 4, 6, 8, 10, 12],
  }]
};


const config = {
    type: 'line',
    data,
    options: {}
  };