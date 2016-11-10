(function(exports){

  function NewsItem(title, url){
    this._title = title;
    this._url = url;
  }

  NewsItem.prototype.title = function(){
    return this._title;
  }

  NewsItem.prototype.url = function(){
    return this._url;
  }

  exports.NewsItem = NewsItem;

})(this)
