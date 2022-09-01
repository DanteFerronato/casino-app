import mongoose, { Mongoose, Schema } from "mongoose"

const goose = require("mongoose")
//goose.connect("mongodb://localhost:27017/casino-app")
goose.connect("mongodb://localhost:27017/test").then((result : any) => {
    
}).catch((e : Event) => {

})

goose.model("Users", new Schema({ // Lists all users who signed up, including the house itself
    username: Number, // Uniquelly identifies the user
    email: String, // Is employed on sign in, is unique
    password: Number, // Is employed on sign in
    money: Number, // Total money purchased by the user in the casino casino, including losses
    currentMoney: Number, // Money currently owned by the user
    isAdmin: Boolean, // Whether the user is the house or not
}))

goose.model("PurchaseLog", new Schema({ // Lists all purchases by all users
    id: Number, // Uniquelly id's purchase
    username: String,  // Identifies user
    amount: String, // (of money, purchased)
    time: Date, // Date and time of purchase
}))

goose.model("Bets", new Schema({ // Lists all current and past bets made in all games
    id: Number, // Uniquelly id's bet
    username: String, // Identifies user
    amount: Number, // (of money, betted)
    game: String, // In which game is it betted (currently can only be roulette)
    position: String, // A string in a game-dependent format identifying what is being betted on
    fate: Number, // If it was moved, the id of the new bet, other faiths use attribute winner
    winner: String, // Username of winner, null if the bet was moved
    previous: Object, // If it is a moved bet, the id of the previous bet, null if the bet is original
    betTime: Date, // Date and time of bet creation (or of move if it's a moved bet)
    deathTime: Date, // Date and time when the bet was won/lost/moved
}))

export default goose