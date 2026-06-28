# E-Commerce Backend API

## Project Description

A RESTful e-commerce backend API built with **Node.js**, **Express**, and **TypeScript**, using **MongoDB** (via Mongoose) for data persistence.
The API manages five core resources — **Users**, **Categories**, **Products**, **Orders**, and **Order Items** — supporting full CRUD operations with request
validation, centralized error handling, and paginated list endpoints. Relationships between collections
(e.g., a product belonging to a category, an order belonging to a user) are modeled using custom integer-based primary keys and references instead of 
default MongoDB ObjectIds, to mirror a relational-style data structure.

## Setup Instructions

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
3. Run the project in development mode:
   ```bash
   npm run dev
   ```
4. The server connects to the `e-commerce` database on startup and listens on the configured port.
5. Test endpoints using Postman or any REST client.

## API Endpoints List

### Users
| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/users` | Create a new user |
| GET | `/users` | Get all users (paginated) |
| GET | `/users/:id` | Get a user by ID |
| PUT | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |

### Category
| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/category` | Create a new category |
| GET | `/category` | Get all categories (paginated) |
| GET | `/category/:id` | Get a category by ID |
| PUT | `/category/:id` | Update a category |
| DELETE | `/category/:id` | Delete a category |

### Products
| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/products` | Create a new product |
| GET | `/products` | Get all products (paginated, with category populated) |
| GET | `/products/:id` | Get a product by ID |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

### Orders
| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/orders` | Create a new order |
| GET | `/orders` | Get all orders (paginated, with user populated) |
| GET | `/orders/:id` | Get an order by ID |
| PUT | `/orders/:id` | Update an order |
| DELETE | `/orders/:id` | Delete an order |

### Order Items
| Method | Endpoint | Description |
|--------|----------|--------------|
| POST | `/orderItems` | Create a new order item |
| GET | `/orderItems` | Get all order items (paginated, with order & product populated) |
| GET | `/orderItems/:id` | Get an order item by ID |
| PUT | `/orderItems/:id` | Update an order item |
| DELETE | `/orderItems/:id` | Delete an order item |

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: web framework for routing and middleware
- **TypeScript**: static typing for safer, more maintainable code
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for schema modeling and validation
- **Zod**: schema-based request validation
- **Postman**: API testing and documentation
