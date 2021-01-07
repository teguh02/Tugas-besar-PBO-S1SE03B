module.exports = (data) => {
    for (let i = 0; i < data.length; i++) {
        console.log("");
        console.log("Code : " + data[i].code);
        console.log("Name : " + data[i].name);
        console.log("Number Phone : " + data[i].phone);
    }
}