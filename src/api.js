class ApiCall{
  getData(userInput, displayData){
    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://rickandmortyapi.com/api/character`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(results){
      displayData(results)
      }, function(error) {
        return `something went wrong ${error.message}`;
      }
    });
  }
}

export { ApiCall };
