function listNames(data) {
  let finalArray = [];

  for (let i = 0; i < data.length; i++) {

    if ((i < data.length - 1 && data[i].first === data[i + 1].first) || (i > 1 && data[i].first === data[i - 1].first)) {
      finalArray.push(data[i].first + " " + data[i].last);
    } else {
      finalArray.push(data[i].first);
    }
  }

  return finalArray;
}

let data = [
  {
    _id: '1',
    first: 'Jeb',
    last: 'Bush'
  }, {
    _id: '2',
    first: 'Jason',
    last: 'Bourne'
  }, {
    _id: '3',
    first: 'Jason',
    last: 'Bateman'
  }, {
    _id: '4',
    first: 'Mike',
    last: 'Myers'
  }, {
    _id: '5',
    first: 'Don',
    last: 'Quixote'
  }
];

console.log(listNames(data));
