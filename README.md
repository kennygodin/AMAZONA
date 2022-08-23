# AMAZONA

# Lessons

1. Introduction
2. Install tools
3. Create React App
4. Create Git Repository
5. Adding featured products
6. Add routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create route for product screen
7. Create node.js server
   1. run npm init on root folder
   2. update package. json set type: module
   3. Add server.js to backend
   4. npm install express
   5. create server.js
   6. add start command as node backend/server .js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend.
   10. create routes for API products.
   11. return products
   12. run npm start
8. Fetch Products from backend (using axios)
   1. set proxy in package.json (in the frontend)
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage state by Reducer Hook (replacing state hook to reducer hook for managing complex states)
   1. Define reducer hook
   2. update fetch data
   3. get state from useReducer
10. Add Bootstrap UI framework
    a. npm install react-bootstrap bootstrap
    b. Update App.js
11. Create Product and Rating Component
    a. create rating component
    b. create product component
    c. use rating component in product component
12. Create product details screen
    a. Fetch products from backend
    b. create 3 columns for image, info and action
13. Create loading and message Component
    a. Create loading component
    b. use spinner component
    c. create mmessage component
    d. create utils.js to define getError function
14. Implement Add to Cart
    a. Create React Context
    b. define reducer
    c. create store provider
    d. implement add to cart button click handler
15. Complete Add to Cart
    a. check if item exist in cart
    b. check count in stock in backend.
16. Create Cart Screen
    a. create 2 columns
    b. display items list
    c. create action column
17. Complete cart screen
    a. click handler for increase and decrease item
    b. click handler for remove item
    c. click handler for checkout.
18. Create Signin Screen
    a. Create signin form
    b. add email and password
    c. add sign in button
19. Connect to MongoDB database
    a. create atlas mongoDb database
    b. install local mongoDB database
    c. npm install mongoose
    d. connect to mongoDB database
20. Seed sample data
    a. Create product model
    b. create user model
    c. create seed route
    d. use route in server.js
    e. seed sample product
21. Seed Sample User
    a. create user model
    b. seed sample user
    c. create user routes
22. Create SignIn backend API
    a. create signin API
    b. npm i jsonwebtoken
    c. define generate token
23. Complete signin screen
    a. handle submit action
    b. save token in store and local storage
    c. show username in header.
24. Create Shipping Screen
    a. create form inputs
    b. handle save shipping address
    c. add checkout wizzard bar.
25. Create Sign Up screen.
    a. create input forms
    b. handle submit
    c. create backend api
26. Implement select payment method screen
    a. create input forms
    b. handle submit
27. Create Place Order screen
    a. show cart items, payment and address
    b. handle place order action
    c. create order api.
28. Implement place order action
    a. handle place order action
    b. create order create api
29. Create order screen.
    a. Create backend api for order/:id
    b. fetch order api from frontend
    c. show order information in two column.
30. Pay order by PayPal
    a. Generate paypal client id.
    b. create api to return client id
    c. install react paypal.js
    d. use PayPalScriptProvider in index.js
    e. use PayPalScreenReducer in order screen.
    f. implement loadPayPalScript function
    g. render paypal button
    i. implement onApprove payment function
    j. create pay order api in backend
31. Display Order History
    a. Create OrderScreen
    b. create order history api
    c. use api in the frontend
32. Create Profile Screen
    a. Get user from context
    b. show user info
    c. create user update api
    d. update user info
33. Publish to Heroku
    a. create and configure node project
    b. server build folder in frontend
    c. create heroku account
    d. connect it to github
    e. create mongodb atlas database
    f. set database connection in heroku env variables
    g. commit and push.
