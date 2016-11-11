(function(exports){


  function NewsList(response){
    this._newsItems = [];
    this.makeNewsItems(response);
  }

  NewsList.prototype.makeNewsItems = function (response) {
    var results = response.response.results;
    var i;
    for(i = 0; i < results.length; i += 1){
      var result = results[i];
      var newsItem = new NewsItem(result);
      newsItem.setId(i);
      this._newsItems.push(newsItem);
    }
  };

  NewsList.prototype.items = function () {
    return this._newsItems;
  };

  NewsList.prototype.toHtml = function(toSummary = false) {
    var html = '';
    if (this.items().length > 0){
      html += '<ul>';
      var i;
      for(i = 0; i < this.items().length; i+= 1){
        if(toSummary) {
          html += `<li>${this.items()[i].summaryLinkHtml()}</li>`
        } else {
          html += `<li>${this.items()[i].linkHtml()}</li>`
        }
      }
      html += '</ul>'
    }
    return html
  };

  NewsList.prototype.toSummaryHtml = function() {
    return this.toHtml(true);
  }

  exports.NewsList = NewsList;

})(this)
