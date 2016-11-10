(function(exports) {

  function HeadlineListView(list){
    this.newsStories = list;
  }

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

  HeadlineListView.prototype.triggerActionOnClick = function() {
    // console.log(headlineList.getArticleIndex)
    window.addEventListener("hashchange", headlineList.getArticleIndex);
  };

  HeadlineListView.prototype.getArticleIndex = function() {
    var index = window.location.hash.split("#")[1];
    getArticleUrl(index);
    // this.getArticleUrl(index)
  };


  exports.HeadlineListView = HeadlineListView;

})(this);
