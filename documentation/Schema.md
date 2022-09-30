# Data Schema.md

## product
ID
Name
price
saleprice
description
artist
photo
stock
meta(tags, sales)


## Users
id
avatar
username
cart
admin
purchaces

## purchaces
id
userProducts

## userProducts
id
products
    product
## Cart
id
user
cartProducts

## cartProduct
id
product
## Sessions
id
token

