function NewsList(response){
  this._newsItems = [];
  this.makeNewsItems(response);
}

// NewsList.prototype.toHtml = function () {
//
//   var html = '';
//
// };

NewsList.prototype.makeNewsItems = function (response) {
  var results = response.response.results;
  var i;
  for(i = 0; i < results.length; i += 1){
    var result = results[i];
    var newsItem = new NewsItem(result);
    this._newsItems.push(newsItem);
  }
};

NewsList.prototype.items = function () {
  return this._newsItems;
}
