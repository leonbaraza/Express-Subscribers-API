# Subscribers REST API

## Concepts Covered:

- Setting up an Express server
- Configuring MongoDB with Mongoose
- Creating a model in Mongoose
- How to create RESTful API routes
- Returning JSON from a Node.js API
- How to handle API errors and validation
- How to properly use and return HTTP status codes

## ROUTES

1. All Subscribers.
```javascript
GET /subscribers
```
⋅⋅⋅Returns a list json objects of all subscribers and error with status 500 if something goes wrong

2. One Subscribers.
```javascript
GET /subscribers/:id
```
⋅⋅⋅Returns a json object of a single subscriber based on the id or error with status of 400 if no such id and 500 if something goes wrong

3. Creating a Subscribers.
```javascript
POST /subscribers
```
⋅⋅⋅Returns status code of 201 and a json object of the subscriber created or error with status code of 400 if no such id and 500 if something goes wrong

4. Updating a subscriber
```javascript
PATCH /subscribers/:id
```
⋅⋅⋅Returns a json object of the subscriber updated or error with status code of 400 if no such id and 500 if something goes wrong

4. Deleting a subscriber
```javascript
DELETE /subscribers/:id
```
⋅⋅⋅Returns a json message of deletion successful or error with status code of 400 if no such id and 500 if something goes wrong
