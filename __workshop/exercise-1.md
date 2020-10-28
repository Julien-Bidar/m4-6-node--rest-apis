# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint         | method   | Description                                 |
| ---------------- | -------- | ------------------------------------------- |
| `/customers`     | `GET`    | access all customers                        |
| `/customer/:id`  | `GET`    | access a customer based on her/his id       |
| `/customer/`     | `POST`   | create a new customer                       |
| `/customer/:id`  | `PATCH`  | update info on existing customer            |
| `/customer/:id`  | `DELETE` | deletes a customer                          |
| `/suppliers`     | `GET`    | get all suppliers                           |
| `/supplier/:id`  | `GET`    | access a supplier based on her/his id       |
| `/supplier/`     | `POST`   | create a new supplier                       |
| `/supplier/:id`  | `PATCH`  | update info on existing supplier            |
| `/supplier/:id`  | `DELETE` | deletes a supplier                          |
| `/products`      | `GET`    | Get all products available in coffee        |
| `/product/:id`   | `GET`    | respond with a product type based on its id |
| `/product/`      | `POST`   | create a new product type                   |
| `/product/:id`   | `PATCH`  | update info on existing product type        |
| `/product/:id`   | `DELETE` | deletes a product type                      |
| `/furniture`     | `GET`    | access all furniture                        |
| `/furniture/:id` | `GET`    | access a piece of furniture based on its id |
| `/furniture/`    | `POST`   | create a new piec of furniture              |
| `/furniture/:id` | `PATCH`  | update info on existing piece of furniture  |
| `/furniture/:id` | `DELETE` | deletes a piece of furniture                |
