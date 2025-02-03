// // In JavaScript, try and catch are keywords used to
// implement error handling. Error handling is essential when
// writing code to gracefully handle unexpected errors and
// exceptions that may occur during program execution. The try
// and catch blocks work together to enable developers to catch
// and handle errors, preventing them from crashing the entire
// application.

function parseJSON(jsonString) {
    try {
        //good
        return JSON.parse(jsonString)//A valid JSON string.Converts a JavaScript Object Notation (JSON) string into an object.
    } catch (error) {
        //bad
        console.log("Error in json and it is not in the format in json ..please validate it..")
        return null
    }
}
const valid = '{"name":"sidhu","age":23}'
const result = parseJSON(valid)
console.log(result)
const notvalid = '{"name+:"sidhu","age":23}'
const result2 = parseJSON(notvalid)
console.log(result2)