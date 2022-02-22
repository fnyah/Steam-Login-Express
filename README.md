# Steam login with express and handlebars

This is a boilerplate for using steam login via passport-steam on an express server. 
This project is many years old now and was built with handlebars. I would suggest using a different view engine. 

# Demo 

<p align="center">
    <img width="815" alt="Screen Shot 2022-02-22 at 1 09 05 PM" src="https://user-images.githubusercontent.com/7035086/155194759-71fc04ef-0027-4e2f-b797-bb36f4b7ca3b.png">
</p>

# Installation and Usage

To use a discord bot, you must have a discord developer account and an application created in the discord developer center. You will need to replace the bot login token with your own. If you have no experience setting up a discord bot, you can start [here](https://discord.com/developers/docs/intro) with the discord developer docs. Or check out "The Coding Train" for his series on discord bots that is very useful for getting started [here](https://www.youtube.com/watch?v=7A-bnPlxj4k). 

## Bot commands


Use the prefix "$" followed by any token name or symbol listed on CoinGecko to recieve an instant price readout. 

## Installation 

Clone this project to a desired local folder. 

```
$ git clone https://github.com/fnyah/Crypticker-discord/
$ cd Crypticker-discord
```

Install project dependencies. 

```
$ npm install
```

Run the bot!

```
node bot.js
```

# Required Dependencies

* [discord.js](https://discord.js.org/#/)
* [coingecko-api](https://www.npmjs.com/package/coingecko-api)
* [Chart.js](https://www.chartjs.org/)
* [moment.js](https://github.com/moment/moment/)

# License

MIT ©  [fnyah](https://github.com/fnyah)
