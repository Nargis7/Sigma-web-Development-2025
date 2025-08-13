async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
  const data = await response.json();
  console.log(data);
}
getData();

// scenario
//  prepare url /api endpoint ->sync
// fetch data -> network call async await
// process data -> sync

// https://jsonplaceholder.typicode.com/