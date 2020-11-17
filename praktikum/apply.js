var person = {
    fullName: function(birth, city) {
        return this.firstName + " " + this.lastName + "," + birth + "," + city
    }
}

var person1 = {
    firstName: "Teguh",
    lastName: "Rijanandi"
}

// menggunakan apply
var result = person.fullName.apply(person1, ["Purwokerto", "Februari"])
console.log(result);