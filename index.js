
var xhr = new XMLHttpRequest();
xhr.open('GET', "http://content.guardianapis.com/technology?api-key=test", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var newsList = new NewsList(response);
    var newsController = new NewsController(newsList);
    document.getElementById('news').innerHTML = newsList.toSummaryHtml();
  }
}
