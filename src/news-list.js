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

  NewsList.prototype.toHtml = function () {
    var html = '';
    if (this.items().length > 0){
      html += '<ul>';
      var i;
      for(i = 0; i < this.items().length; i+= 1){
        html += `<li>${this.items()[i].toHtml()}</li>`
      }
      html += '</ul>'
    }
    return html
  };

  exports.NewsList = NewsList;

})(this)
