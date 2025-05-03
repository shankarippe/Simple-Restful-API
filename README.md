# Simple-Restful-API
A simple RESTful API built with Node.js and Express for managing customer data. It supports CRUD (Create, Read, Update, Delete) operations, with input validation using Joi. This API can be easily tested using Postman and is ideal for learning REST API development.
# Customer Management API

## Project Description

A simple **RESTful API** built with **Node.js** and **Express** for managing customer data. It supports **CRUD (Create, Read, Update, Delete)** operations, with input validation using **Joi**. This API can be easily tested using **Postman** and is ideal for learning REST API development.

## Features

- **GET** `/api/customers` - Retrieve all customers.
- **GET** `/api/customers/:id` - Retrieve a customer by ID.
- **POST** `/api/customers` - Create a new customer.
- **PUT** `/api/customers/:id` - Update an existing customer.
- **DELETE** `/api/customers/:id` - Delete a customer.

## Prerequisites

Ensure that the following are installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

## Setup and Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repository-name.git
2. Navigate to the project directory:
bash
Copy
Edit
cd your-repository-name
3. Install dependencies:
bash
Copy
Edit
npm install
4. Start the server:
bash
Copy
Edit
npm start
The server will be running at http://localhost:8080.

API Endpoints
1. GET /api/customers
Retrieve the list of all customers.

Example Request:

http
Copy
Edit
GET http://localhost:8080/api/customers
Response:

json
Copy
Edit
[
  {"title": "shannu", "id": 1},
  {"title": "roshini", "id": 2},
  {"title": "pihu", "id": 3}
]
2. GET /api/customers/:id
Retrieve a customer by id.

Example Request:

http
Copy
Edit
GET http://localhost:8080/api/customers/1
Response:

json
Copy
Edit
{
  "title": "shannu",
  "id": 1
}
3. POST /api/customers
Create a new customer.

Example Request:

http
Copy
Edit
POST http://localhost:8080/api/customers
Request Body:

json
Copy
Edit
{
  "title": "new customer"
}
Response:

json
Copy
Edit
{
  "title": "new customer",
  "id": 7
}
4. PUT /api/customers/:id
Update an existing customer.

Example Request:

http
Copy
Edit
PUT http://localhost:8080/api/customers/1
Request Body:

json
Copy
Edit
{
  "title": "updated customer"
}
Response:

json
Copy
Edit
{
  "title": "updated customer",
  "id": 1
}
5. DELETE /api/customers/:id
Delete a customer by id.

Example Request:

http
Copy
Edit
DELETE http://localhost:8080/api/customers/1
Response:

json
Copy
Edit
{
  "title": "shannu",
  "id": 1
}
Testing with Postman
1. GET /api/customers
Open Postman.

Select GET method.

Enter the URL: http://localhost:8080/api/customers.

Click Send.

2. POST /api/customers
Open Postman.

Select POST method.

Enter the URL: http://localhost:8080/api/customers.

Go to Body tab and select raw (JSON).

Add the following JSON:

json
Copy
Edit
{
  "title": "new customer"
}
Click Send.

3. PUT /api/customers/:id
Open Postman.

Select PUT method.

Enter the URL: http://localhost:8080/api/customers/1 (replace 1 with the customer ID).

Go to Body tab and select raw (JSON).

Add the following JSON:

json
Copy
Edit
{
  "title": "updated customer"
}
Click Send.

4. DELETE /api/customers/:id
Open Postman.

Select DELETE method.

Enter the URL: http://localhost:8080/api/customers/1 (replace 1 with the customer ID).

Click Send.
