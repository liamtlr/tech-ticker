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
      htmlOutput += "<li><div>" + this.newsStories[i].webTitle + "</a></div></li>"
    };
    htmlOutput += "</ul>"
  }
  return htmlOutput;
 };

 exports.HeadlineListView = HeadlineListView;

})(this);
