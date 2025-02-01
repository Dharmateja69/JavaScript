//  A factory functon is a type of functon that is used to create and return objects. Its a design pattern that provides an alternative way to create objects comapred to using constructors and the new keyword.

// function name(params)
// {
//     return Object;
// }

//  why we need to create a factory function rether then simple creating a obj.
// function createPerson(firstname, lastname, pl) {
//     return {
//         firstname: firstname,
//         lastname: lastname,
//         pl: pl,
//         fullame: function () {
//             console.log(`Hello my name is ${this.firstname} ${this.lastname} and i love ${this.pl}`)
//         }
//     }
// }

// const jhon = createPerson("sidhu", "tejs", "sdijdhi")
// console.log(jhon)
// jhon.fullame()

// =================================================================================================
function vehiclestypes(type, brand, model, year) {
    return {
        // type: type,
        // brand: brand,
        // model: model,
        // year: year,
        //we can also write te above in the form of
        type,
        brand,
        model,
        year,

    }
}

const jhon = vehiclestypes("rx100", "aoosdas", "32234asd", "2332")
console.log(jhon)