# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  -git clone https://github.com/subhadeepghosh456/Ecommerce.git.
  -write cd Ecommerce then npm install.To install the dependency.
  -npm run dev to start the app.
  -User authentication has been implemented using Firebase
  -User need to first Sign up if there is no account. If has any account just sign in.
  -After singn-in or sign-up user redirects to home page.
  -In home page search,and filter functionality has been inplemented.

Product List:
○ Displayed a list of products with their names, prices, and images.
○ sort products by price or name has been implemented.
○ Implemented a search feature to filter products by name.

Shopping Cart:
○ Displaed a shopping cart that shows the products added by the user.
○ Included the product name, quantity, and total price for each item in the cart.
○ increase or decrease the quantity of items in the cart implemented.
○ Provided an option to remove items from the cart.
Used LOCAL STORAGE to Store Cart data for the logged in user

○ Implemented a checkout process where users can enter their shipping and
payment information.
○ Calculated and displayed the total price of the items in the cart.
○ Show a confirmation message after a successful checkout. ( Just a modal )
○ After fetch data from put discount of 20% in every product and update the
price in checkout list and also present the same in total price of checkout.

Redux Store:
○ Used Redux to manage the application's state, including the list of products
and the contents of the shopping cart.
○ Created Redux actions and reducers for adding, removing, and updating items
in the cart.

Responsive Design:
○ works well on both desktop and mobile devices.

Authentication ( Firebase ) :
○ Implementd user authentication to allow registered users to save their cart
contents and view order history.
