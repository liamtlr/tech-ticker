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
        // console.log(this.newsStories[i])
      };
      htmlOutput += "</ul>"

    }
    return htmlOutput;
  };

  triggerActionOnClick()

  function triggerActionOnClick() {
    window.addEventListener("hashchange", getArticleIndex);
  };
  
  function getArticleIndex(){
    var index = window.location.hash.split("#")[1];
    getArticleUrl(index)
  }

  function getArticleUrl(index){
    console.log(this.newsStories[index].webUrl)
  }

  function testFunction(){
    console.log("It has worked");
  };

  HeadlineListView.prototype.getArticleURL = function(article_number){
    return this.newsStories[article_number].webUrl;
  }

  exports.HeadlineListView = HeadlineListView;

})(this);
