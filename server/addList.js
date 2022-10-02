const models = require('./models/index')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
models.initDB()

const productList = [
    {
        "id": 0,
        "productName": "Product Name 1",
        "productPrice": 300,
        "productDescription": "This is a description",
        "productArtist": "Artist 1",
        "productPhoto": ".../images/testimage1.jpg",
        "productStock": 5,
        "metadata": [
            "Tags: White",
            "Sales: 0"
        ]
    },
    {
        "id": 1,
        "productName": "Product Name 2",
        "productPrice": 301,
        "productDescription": "This is a description",
        "productArtist": "Artist 2",
        "productPhoto": ".../images/testimage2.jpg",
        "productStock": 5,
        "metadata": [
            "Tags: White",
            "Sales: 0"
        ]
    },
    {
        "id": 2,
        "productName": "Product Name 3",
        "productPrice": 302,
        "productDescription": "This is a description",
        "productArtist": "Artist 3",
        "productPhoto": ".../images/testimage3.jpg",
        "productStock": 5,
        "metadata": [
            "Tags: White",
            "Sales: 0"
        ]
    },
    {
        "id": 3,
        "productName": "Product Name 4",
        "productPrice": 303,
        "productDescription": "This is a description",
        "productArtist": "Artist 4",
        "productPhoto": ".../images/testimage4.jpg",
        "productStock": 5,
        "metadata": [
            "Tags: White",
            "Sales: 0"
        ]
    },
]

const newList = productList.map(
    (product) => 
        new models.Product({
            productName:product.productName,
            productPrice:product.productPrice,
            productDescription:product.productDescription,
            productArtist:product.productArtist,
            productPhoto:product.productPhoto,
            productStock:product.productStock,
            metadata:product.metadata
        })
        .save()
)

console.log(newList)
console.log("done")