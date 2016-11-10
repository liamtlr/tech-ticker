// var headlinesObject = {webTitle: "Trump wins :("}
// var headlinesArray = []
// headlinesArray.push(headlineObject)

function testHeadlineListViewFormatsHeadlines(){
  var headlinesObject = {webTitle: "Trump wins :("}
  var headlinesArray = []
  headlinesArray.push(headlinesObject)
  var headlineListView = new HeadlineListView(headlinesArray)
  assert.isTrue(headlineListView.getHTML() === "<ul><li><div>Trump wins :(</div></li></ul>")
}

testHeadlineListViewFormatsHeadlines()
