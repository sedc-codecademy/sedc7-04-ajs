$.ajax({
    url: 'API_URL',
    type: 'METHOD', //GET, POST, PUT, DELETE = CRUD
    data: 'username=user1',
    contentType: "application/json", //MIME type
    dataType: 'jsonp', //html, text, json, jsonp
    success: function(data) {
      //what to happen when success
    },
    error: function(e) {
      //called when there is an error 
    }
  });
  