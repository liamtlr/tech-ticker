(function(exports){
  function NewsController(newsList){

    this.hashChangeListener(newsList, this.displaySummary);
  }

  NewsController.prototype.hashChangeListener = function(newsList, callback){
    window.addEventListener("hashchange", function(event){
      console.log(window.location.hash);
      var newsId = window.location.hash.replace('#newsItem/', '');
      var newsItem = newsList.items()[newsId];
      callback(newsItem);
    });
  }

  NewsController.prototype.displaySummary = function(newsItem){
    var newsSummary = new NewsSummary(newsItem);
  }

  exports.NewsController = NewsController;

})(this)
