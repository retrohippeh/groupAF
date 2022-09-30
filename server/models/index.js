const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    //I believe IDs are created by MongoDB itself
    productName: String,
    productPrice: Number, //Floats aren't directly supported by mongoose, will revise later
    productDescription: String, 
    productArtist: String, //Could be tied to users and sessions at a later point
    productPhoto: String, //URL, presumably from a cloud service or just relative/local URLS
    productStock: Number, 
    metadata: Array
})

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = document._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product = mongoose.model('Product', productSchema)

//TODO: userSchema, purchaseSchema, userProductSchema, cartSchema, cartProductSchema, sessionsSchema



const initDB = async () => {
    await mongoose
        .connect(config.mongoDBUrl)
        .catch((error) => {    
            console.log('error connecting to MongoDB:', error.message)  
        })
    }

module.exports = { Product, initDB }