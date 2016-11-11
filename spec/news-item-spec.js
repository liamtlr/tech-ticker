describe('NewsItem', function(){

  var response = {
    webTitle: "Google to European commission: Android is key to mobile competition",
    webUrl: "https://www.theguardian.com/technology/2016/nov/10/google-european-commission-android"
  };

  var newsItem = new NewsItem(response);

  it('can be created with a text and url', function(){
    expect(newsItem.title()).toEqual(response.webTitle);
    expect(newsItem.url()).toEqual(response.webUrl);
  });

  it('has toHtml() method that returns a title with an html link', function(){
    expect(newsItem.toHtml()).toEqual(`<a href="${newsItem.url()}">${newsItem.title()}</a>`);
  });

})
