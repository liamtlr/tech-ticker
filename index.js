var headlineList = new HeadlineListView("hello")
// headlineList.getArticleUrl(3)

var xhr = new XMLHttpRequest();
xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&q=politics?show-fields=body", true);
xhr.send();

xhr.onreadystatechange = processRequest;

function processRequest() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    var array = response.response.results
    headlineList.newsStories = array
    document.getElementById('headlines').innerHTML = headlineList.getHTML();
  }
}
headlineList.triggerActionOnClick()

function getArticleUrl(index){
  getArticleSummary(headlineList.newsStories[index].webUrl)
}



// headlineList.getArticleIndex();

function getArticleSummary(article_link){
  var article = new XMLHttpRequest();
  article.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + article_link, true);
  article.send();
  article.onreadystatechange = processRequest;
  document.getElementById('article').innerHTML = article.responseText[1];
  console.log(article)
  console.log(article.response.text)
  // console.log(article)
}
