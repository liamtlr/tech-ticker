var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("Test passed. Well done.");
    }
  }
};

var emptyArray = {
  isItEmpty: function(assertionToCheck) {
    if ( !assertionToCheck.length === 0 ) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passed. Well done.")
    }
  }
};
