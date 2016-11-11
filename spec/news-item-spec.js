describe('NewsItem', function(){

  var response = {
    webTitle: "Google to European commission: Android is key to mobile competition",
    webUrl: "https://www.theguardian.com/technology/2016/nov/10/google-european-commission-android"
  };

  var summaryResponse = {
    sentences: [ "Google has dismissed the European commission’s charges that it abuses the market dominance of its Android operating system to prevent rivals from competing with alternative software and services.",
      "In its response to the EC today, Google objects to several of the commission’s premises, including the view that Google’s Android does not compete with Apple’s iOS operating system that runs iPhones and iPads.",
      "The company claims that its agreements with smartphone makers, which insist that a suite of Google apps be pre-installed on devices with some positioned on the homescreen when a device is first started, allow Google to distribute Android for free and continue investing in the development of the platform.",
      "Commenting on the EC’s case, Daniel Castro, vice president of tech policy think tank ITIF said: “If Google instead only sold Google-made devices, it would … control all aspects of the operating system plus the apps it includes on Android devices.",
      "The case against Android comes at a time when Google is also embroiled in a battle with the EC over its Shopping search engine feature and its AdSense text advertising service."
    ]
  };

  var newsItem = new NewsItem(response);
  newsItem.setId(0);

  it('can be created with a text and url', function(){
    expect(newsItem.title()).toEqual(response.webTitle);
    expect(newsItem.url()).toEqual(response.webUrl);
  });

  it('has linkHtml() method that returns a title with an html link', function(){
    expect(newsItem.linkHtml()).toEqual(`<a href="${newsItem.url()}">${newsItem.title()}</a>`);
  });

  it('has summaryLinkHtml() method that returns a link to a summary of the article', function(){
    expect(newsItem.summaryLinkHtml()).toEqual(`<a href="#newsItem/${0}">${newsItem.title()}</a>`);
  });

  it('has toSummaryHtml() method that returns a link to a summary of the article', function(){
    expect(newsItem.summaryHtml()).toEqual(`<div>${summaryResponse.ntences.join(' ')}</div>`);
  });

})
