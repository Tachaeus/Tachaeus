function practise(promise) {
    return promise((resolve) => {
        setTimeout(() => {
            console.log("Should do something...");
            resolve("http://localhost:3030/");
        }, 100);

    });
}
practise()

//Chaining
thing(function (result)  {
    otherThing(result, function (newResult) {
        finalThing(new result, function (lastResult) {
            console.log("Here, you shall get the last result: ${result}");
        }, failureCallback);
    },failureCallback);
}, failureCallback)
const promise = thing;
const Promise = promise.then(successcallback, failureCallback);