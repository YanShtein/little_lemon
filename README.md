# LITTLE LEMON restaurant website.

# README - under construction. #

Final META course project.
> <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer/"> -> Meta Front-End Developer Professional Certificate <- </a>

> <a href="https://www.figma.com/file/J0wZBiUwOUjlMKuwc3C9IB/Little-Lemon?node-id=0%3A1&t=WDE7ZFXVAkO2W12K-0"> -> Little Lemon website wireframe & prototype in Figma <- </a>
<h1 font-size: 14px>Click the Figma icon in the upper left corner to see all the project pages.</h1>

<h1 font-size: 14px>The website uses responsive design making sure to follow best practices as much as possible regarding the design, semantic HTML, and improving site accessibility.</h1>

<b>Built with & techs used:</b>
React, useReducer, useState, useNavigation, Context, Jest, localStorage, Visual Studio Code, APIs, Figma.

<b>About the Little Lemon (fictitious) restaurant project:
The Smith family owns a restaurant, which they would like to set a responsive website for.</b>
They would like to add the following:
- Option for booking a table at the restaurant.
- Incorporating a simple Online ordering system.
- Visitors can look up the restaurant menu.

- Website functionality:
* Booking a table:
>> Form - Uses fieldsValidation file and other custom validation functions,
to ensure on the client side, that user enters the correct information that will be sent to the server, form submittion function takes that information as a parameter.
>> Form submittion & validation - useSubmitForm custom hook uses state and useEffect to handle the submittion process:
submitForm function, takes formData as a parameter, and calls the submitAPI function that is responsible for checking data validity, and if succesfull returns true.
than formData is saved in a state, and used in useEffect:
- saving data to localStorage.
- redirecting the user to Confirmation page, passing the formData as a state object, to persist the form data across the navigation.

* Confirmation page:
>> uses the location state passed from the bookingForm, then the component destructures the state object extracting the form fields that are used in the confirmation details.

* Order Online:
>> Search section - useSearch custom hook handles searching throught list of menu items.
the hook uses Context to access the menuData from the global context and input value from search.
>> Cart section - shows items added to cart, each item clicked will be dispatched to the AppReducer function with the ADD_TO_CART action.
the function will check if the item is already in cart, if so the function increases the quantity by 1 using the map method.
otherwise, it will add the item to the cart with quantity of 1.
A new state object will be retuned with the updates in cart array.
- mapping over the cart array, to show items ordered details.
- total variable calculates using map and reducer total price and quanity for each item added.
>> Form fileds use custom validation.

Files structure:
- src/
  - assets/
    - images/
    - shared.css
    - svg.js
  - components/
    - Nav.js
    - Header/
      - header.css
      - Header.js
    - Footer/
      - footer.css
      - Footer.js
    - Home/
      - home.css
      - HomePage.js
      - Article.js (section)
      - Specials.js (section)
      - Ratings.js (section)
      - About.js (section)
      - ratingsData.js
    - Menu/
      - menu.css
      - MenuPage.css
    - Order/
      - order.css
      - OrderForm.js
      - OrderPage.js
      - useSearch.js (filters menu items search results)
    - Booking/
      - book.css
      - bookingAPI.js (generates array of times based on date selected in form, and accepts formData)
      - BookingForm.js (custom form fields validation)
      - BookingPage.js (manages Reducer function passing to children, useSubmitForm custom hook manages form submittion.)
      - Confirmation.js (prints confirmation details to the user)
      - fieldsValidation.js
      - useSubmitForm.js (custom hook performs form validation & submittion through the bookingAPI)
  - App.js
  - index.js    