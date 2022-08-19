import faker from "faker";

 const itemData = [
    {
        id: faker.datatype.uuid(),
        name: "TP-Link Wireless Router",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/51NOjinGjrL._SX679_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Apple MacBook Pro",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SX679_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Samsung Loading Washing Machine",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SX679_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Voltas  Split AC",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/71XKkmpD2FL._SX679_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Solo Microwave Oven",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/81hN9SfFWEL._SX679_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Cereals",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://st.depositphotos.com/3046013/4513/i/600/depositphotos_45133079-stock-photo-cereal.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Samsung Galaxy M31s",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SY879_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Mi TV 4A PRO 108 cm",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SX679_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
    {
        id: faker.datatype.uuid(),
        name: "Canon EOS M50 24.1MP Mirrorless Camera",
        price: faker.commerce.price(),
        // image: faker.random.image(),
        image:"https://images-na.ssl-images-amazon.com/images/I/813SEryW1SL._SX679_.jpg",
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    },
]

export default itemData;