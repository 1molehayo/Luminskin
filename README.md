# Lumin Skin FE Challenge

This project was bootstrapped with [React BoilerPlate](https://github.com/1molehayo/react-boilerplate).

For this challenge we'll be recreating the luminskin.com product page and cart using a GraphQL API. You can use any framework you feel comfortable with, we recommend ReactJS or Vue.js. You dont need to worry about a pixel-perfect recreation, the main thing we care about is functionality (but if it looks nice we won't hold that against your).

## Features

- Product Page
- Cart

### Product Page Requirements

- Should query from [api](https://pangaea-interviews.now.sh/api/graphql), retrieve the products and display them in a grid. Feel free to use graphql client libraries such as Apollo Client.

- Each item should display the image, title, price and a "Add to Cart" button.

- For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.

- There is no need to implement the page navbar, or filter dropdown as shown in the screenshot.

![ScreenShot](https://raw.github.com/1molehayo/Luminskin/project-setup/src/assets/img/lumin-products-page.png)


### Cart Requirements

- When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.

- If the item already exists it should increment the quantity.

- Clicking the + or - buttons will increase or descrease the quantity, if the quantity is 1 and the "-" button is pressed it should remove the item.

- In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices.

- It should sum the items in the cart and display them in the correct selected currency.

![ScreenShot](https://raw.github.com/1molehayo/Luminskin/project-setup/src/assets/img/lumin-cart.png)


## Available Scripts

In the project directory, you can run:

### `yarn start or npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

