var xhr = new XMLHttpRequest();
xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&q=politics?show-fields=body", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    var array = response.response.results;
    var headlineList = new HeadlineListView(array)
    console.log(headlineList.getArticleURL(5))
    document.getElementById('headlines').innerHTML = headlineList.getHTML();
  }
}


function getArticleSummary(article_link){
  var article = new XMLHttpRequest();
  article.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + article_link, true);
  article.send();
  article.onreadystatechange = processRequest;
  // console.log(article)
}
