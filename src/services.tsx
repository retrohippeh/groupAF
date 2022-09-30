import axios from 'axios'

const url = 'api'

const getProducts = () => {
    return axios.get(url+'/product/')
    .then((response) => response.data)
}

const getProduct = (id: string) => {
    return axios.get(url + '/product/' + id)
    .then((response) => response.data)
}

const putProduct = (productInfo) => {
    const config = {headers:{product:productInfo}}
    return axios.put(url + '/product/', config)
    .then((response) => response.data)
}
const deleteProduct = (product) => {
    const config = {headers:{productId:product.id}}
    return axios.delete(url + '/product/', config)
    .then((response) => response.data)
}

const getCart =(user: object) => {
    const config = {headers:{user:user}}
    return axios.put(url + '/cart/', config)
    .then((response) => response.data)

}

const deleteCartItem =(user: object, cart, cartProductid) => {
    const config = {headers:{user:user,cart:cart, id:cartProductid}}
    return axios.put(url + '/cart/', config)
    .then((response) => response.data)

}

