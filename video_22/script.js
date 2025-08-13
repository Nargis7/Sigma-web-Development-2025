function fetchData(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      let success = true;
      if(success){
        resolve(100); // anything you want to display
      }else{
        reject("Error fetching data");
      }

    }, 3000);
  });
}

fetchData()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });