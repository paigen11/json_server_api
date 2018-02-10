const faker = require ('faker');

function generateTodos() {

    var todos = [];

    for(var id = 0; id < 50; id++) {
        var department = faker.commerce.department();
        var productName = faker.commerce.productName();
        var product = faker.commerce.product();

        todos.push({
            "id": id,
            "department": department,
            "product_name": productName,
            "product": product
        })
    }

    return { "todos": todos};

}

module.exports = generateTodos;
