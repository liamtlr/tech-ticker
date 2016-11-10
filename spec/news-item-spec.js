describe('NewsItem', function(){

  var newsItem, response;

  response = {
    webTitle: "Google to European commission: Android is key to mobile competition",
    webUrl: "https://www.theguardian.com/technology/2016/nov/10/google-european-commission-android"
  };

  it('can be created with a text and url', function(){
    newsItem = new NewsItem(response.webTitle, response.webUrl);
    expect(newsItem.title()).toEqual(response.webTitle);
    expect(newsItem.url()).toEqual(response.webUrl);
  });

})
