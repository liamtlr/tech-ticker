(function(exports){

  function NewsItem(response){
    this._title = response.webTitle;
    this._url = response.webUrl;
  }

  NewsItem.prototype.title = function(){
    return this._title;
  }

  NewsItem.prototype.url = function(){
    return this._url;
  }

  NewsItem.prototype.toHtml = function(){
    return `<a href="${this.url()}">${this.title()}</a>`;
  }

  NewsItem.prototype.setId = function(index){
    this._id = index;
  }

  NewsItem.prototype.id = function(index){
    return this._id;
  }

  exports.NewsItem = NewsItem;

})(this)
