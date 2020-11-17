var person = {
    fullname: function() {
        return this.firstName + " " + this.lastName
    }
}

var person1 = {
    firstName: "Teguh",
    lastName: "Rijanandi"
}

var person2 = {
    firstName: "Rifqi",
    lastName: "Alfinnur"
}

// memanggil method dengan method call()
var result = person.fullname.call(person2)

console.log(result);