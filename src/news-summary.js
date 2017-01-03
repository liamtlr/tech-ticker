(function(exports){
  function NewsSummary(newsItem){
    this.loadSummary(newsItem);
  }

  NewsSummary.prototype.loadSummary = function(newsItem){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${newsItem.url()}`, true);
    xhr.send();

    xhr.onreadystatechange = processRequest;

    function processRequest() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var joinedResponse = response.sentences.join(' ');
        document.getElementById('news-summary').innerHTML = joinedResponse;
      }
    }
  }

  exports.NewsSummary = NewsSummary;

})(this)
