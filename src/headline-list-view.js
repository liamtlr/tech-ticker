(function(exports) {

  function HeadlineListView(list = []){
    this.newsStories = list;
  }

  var me = this;

  HeadlineListView.prototype.getHTML = function () {
    var arrayLength = this.newsStories.length;
    if(arrayLength === 0) {
      var htmlOutput = ""
    } else {
      var htmlOutput = "<ul>"
      for (var i = 0; i < arrayLength; i++) {
        htmlOutput += "<li><div>" + '<a href="#' + i + '">' + this.newsStories[i].webTitle + "</a></div></li>"
      };
      htmlOutput += "</ul>"

    }
    return htmlOutput;
  };

  HeadlineListView.prototype.getArticleIndex = function () {
    console.log(me)
    var index = window.location.hash.split("#")[1];
    me.getArticleUrl(index)
  };

  HeadlineListView.prototype.getArticleUrl = function(index) {
    console.log('hi')
  };

  // HeadlineListView.prototype.getArticleURL = function(article_number){
  //   return this.newsStories[article_number].webUrl;
  // }

  exports.HeadlineListView = HeadlineListView;

})(this);
