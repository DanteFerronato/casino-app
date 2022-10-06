import mongoose, { Mongoose, Schema } from "mongoose"

const goose = require("mongoose")
//goose.connect("mongodb://localhost:27017/casino-app")
goose.connect("mongodb://localhost:27017/test").then((result : any) => {
    
}).catch((e : Event) => {
    console.log("Database error")
})

const User = goose.model("user", new Schema({ // Lists all users who signed up, including the house itself
    username: String, // Uniquely identifies the user
    email: String, // Is employed on sign in, is unique
    password: String, // Is employed on sign in
    money: { type : Number, default : 0, }, // Total money purchased by the user in the casino casino, including losses
    currentMoney: { type : Number, default : 0, }, // Money currently owned by the user
    isAdmin: { type : Boolean, default : false, }, // Whether the user is the house or not
}))

const Purchase = goose.model("purchase", new Schema({ // Lists all purchases by all users
    username: String,  // Identifies user
    amount: Number, // (of money, purchased)
    time: Date, // Date and time of purchase
},))

const Bet = goose.model("bet", new Schema({ // Lists all current and past bets made in all games
    username: String, // Identifies user
    amount: Number, // (of money, betted)
    game: String, // In which game is it betted (currently can only be roulette)
    position: String, // A string in a game-dependent format identifying what is being betted on
    fate: String, // If it was moved, the id of the new bet, other faiths use attribute winner
    winner: String, // Username of winner, null if the bet was moved
    previous: Object, // If it is a moved bet, the id of the previous bet, null if the bet is original
    betTime: Date, // Date and time of bet creation (or of move if it's a moved bet)
    deathTime: Date, // Date and time when the bet was won/lost/moved
}))

const houseUser = new User({
    username: "_house",
    email: "",
    password: "1234",
})

export const addUser = (
    username : string,
    email : string,
    password : string,
    ) => {
        let newUser = new User({
            username: username,
            email: email,
            password: password,
        })
    }