# Steam login with express and handlebars

This is a boilerplate for using steam login via passport-steam on an express server. 
This project is many years old now and was built with handlebars as a view engine. 
I would suggest using a different view engine like [ejs](https://ejs.co/).

# Demo 

<p align="center">
    <img width="300" alt="Screen Shot 2022-02-22 at 1 09 05 PM" src="https://user-images.githubusercontent.com/7035086/155194759-71fc04ef-0027-4e2f-b797-bb36f4b7ca3b.png">
<img width="300" alt="Screen Shot 2022-02-22 at 1 09 50 PM" src="https://user-images.githubusercontent.com/7035086/155194902-5a2fa6ba-7847-4f66-bf1f-95a06e0b37d9.png">
<img width="300" alt="Screen Shot 2022-02-22 at 1 11 13 PM" src="https://user-images.githubusercontent.com/7035086/155194919-f4be5b4a-d9cb-4320-8f70-7bbbe53fdd40.png">
</p>

## Installation 

Clone this project to a desired local folder. 

```
$ git clone https://github.com/fnyah/Steam-Login-Express/
$ cd Steam-Login-Express/
```

Add your steam API key - found [here](https://steamcommunity.com/dev/apikey)

```
line 82 in app.js apiKey: '' // Your steam api key goes here!
```

Install project dependencies. 

```
$ npm install

```

Run the application

```
node app.js
```

# Required Dependencies

* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [express](https://expressjs.com/)
* [handlebars](https://handlebarsjs.com/)
* [morgan](https://www.npmjs.com/package/morgan)
* [passport](https://www.passportjs.org/)
* [passport-steam](https://www.npmjs.com/package/passport-steam)

# License

MIT ©  [fnyah](https://github.com/fnyah)
