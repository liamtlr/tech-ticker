describe('NewsList', function(){

  var response = {
    response:{
    results: [
      { webTitle: "Google to European commission: Android is key to mobile competition",
        webUrl: "https://www.theguardian.com/technology/2016/nov/10/google-european-commission-android"
      },
      { webTitle: "VR firms make a play for the mainstream with video arcades",
        webUrl: "https://www.theguardian.com/technology/2016/nov/11/virtual-reality-firms-make-play-for-mainstream-with-video-arcades"
      }]
    }
  };

  var newsList = new NewsList(response);
  var results = response.response.results;

  it('creates a newsItems array from a response', function(){
    var newsItems = newsList.items();
    expect(newsItems[0].title()).toEqual(results[0].webTitle);
    expect(newsItems[0].url()).toEqual(results[0].webUrl);
    expect(newsItems[0].id()).toEqual(0);
    expect(newsItems[1].title()).toEqual(results[1].webTitle);
    expect(newsItems[1].url()).toEqual(results[1].webUrl);
    expect(newsItems[1].id()).toEqual(1);

  });

  it('contains a list of headlines and URLs', function(){
    expect(newsList.toHtml()).toEqual(`<ul><li><a href="${results[0].webUrl}">${results[0].webTitle}</a></li><li><a href="${results[1].webUrl}">${results[1].webTitle}</a></li></ul>`)
  });

});
