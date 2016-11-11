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

  NewsItem.prototype.toHtml = function(){
    return `<a href="${this.url()}">${this.title()}</a>`;
  }

  exports.NewsItem = NewsItem;

})(this)
