# Event Registration

Build an fundraiser site for your a chosen non-profit!

* Pick a real 501(3)(c)
* No PACs or Politicized Content Please
* Helping/Lifting up Okay!

## User Stories

* Everyone
    * Enticed by landing page
* User can
    * Order products
    * Checkout
* Admin can
    * Add products
    * See list of all orders

## Data

Main data is array of orders. Each order has products array and customer object:

```js
[
    {
        customer: {
            // customer data
        },
        products: [
            {
                name: <id>
                quantity: 2
            }
        ]
    }
]
```

Products are own data, look something like:

```js
[
    {
        id: 'coconut',
        name: 'Coconut Cookies',
        description: 'Delicious thing to eat',
        price: 3.50,
        image: 'image.png'
    }
]
```

## Pages

### Landing Page

Static content with main button for "order now!"

### Order Page

* Shopping Cart
    * _displays list of current products_
    * _order total_
* Product Pick List
    * Image/Description of each product
    * Click on + or - to add or remove products from shopping cart
* "Checkout" link
    * _goes to Checkout page_

### Checkout Page

* Shows Shopping Cart
* Customer Form
    * Include billing and shipping address with "copy" functionality
* On order, adds order to orders

### Products Page

* Product List (Can reuse picklist!)
* Add Form

### Order Report

* List of all customers and total order
* Order Detail
    * Reuse shopping cart!
    * Click on list items to show detail of that one item!

Allow Admins to 

## Project Structure

* `assets`
    * _any media assets (images, etc)_
* `css`
    *  _css specific to components_
    * _shared css_
* `js`
    * _components_
    * _data-apis_
    * _helper utilities_
* `.eslintrc` - _class eslint with `source-type: "module"`_
* `.travis.yml` - _run linting on travis_
* `index.html` - _home page html document_
* _html document for each page_
* `README.md` - _info about project_

## Rubric

* Landing Page **2pts**
* Order Page **3pts**
* Checkout Page **4pts**
* Product Page **3pts**
* Order Report Page **4pts**
* Data Management **2pts**
* Project organization, clean code **2pt**