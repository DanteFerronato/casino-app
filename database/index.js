const mongoose = require("mongoose")
const { now, Schema, model } = require("mongoose")

const User = model("user",
new Schema({ // Lists all users who signed up, including the house itself
    username : { type: String, required : true, unique : true }, // Uniquely identifies the user
    email : String, // Is employed on sign in, is unique
    password : String, // Is employed on sign in
    money : { type : Number, default : 0, }, // Total money purchased by the user in the casino casino, including losses
    currentMoney : { type : Number, default : 0, }, // Money currently owned by the user
    isAdmin : { type : Boolean, default : false, }, // Whether the user is the house or not
}))

const Purchase = mongoose.model("purchase",
new Schema({ // Lists all purchases by all users
    username: String,  // Identifies user
    amount: Number, // (of money, purchased)
    time: { type : Date, default : now, }, // Date and time of purchase
},))

const Bet = mongoose.model("bet",
new Schema({ // Lists all current and past bets made in all games
    username: String, // Identifies user
    amount: Number, // (of money, betted)
    game: String, // In which game is it betted (currently can only be roulette)
    position: String, // A string in a game-dependent format identifying what is being betted on
    fate: { type : String, default : null, }, // If it was moved, the id of the new bet, other fates use attribute winner
    winner: { type : String, default : null, }, // Username of winner, null if the bet was moved
    previous: { type : String, default : null, }, // If it is a moved bet, the id of the previous bet, null if the bet is original
    betTime: { type : Date, default : now, }, // Date and time of bet creation (or of move if it's a moved bet)
    deathTime: { type : Date, default : null, }, // Date and time when the bet was won/lost/moved
}))

const houseUser = new User({
    username: "_house",
    email: "",
    password: "1234",
})
houseUser.save()

const addUser = async (
    username,
    email,
    password,
    ) => {
        let newUser = new User({
            username: username,
            email: email,
            password: password,
        })
        await newUser.save()
    }

const dropUser = async (
    username,
) => {} // TODO

const newPurchase = async (
    username,
    amount,
) => {
    let newPurchase_ = new Purchase({
        username: username,
        amount: amount,
    })
    await newPurchase_.save()
}

const placeBet = async (
    username,
    amount,
    game,
    position,
) => {
    let newBet = new Bet({
        username: username,
        amount: amount,
        game: game,
        position: position,
    })
    await newBet.save()
}

async function run() {
    await mongoose.connect('mongodb://localhost:27017/test')
    console.log("------- Database connected -------")
}
run().catch(e => {
    console.log("------- Database error 😭😭😭 -------", e)
})

module.exports = {
    addUser,
    dropUser,
    newPurchase,
    placeBet,
}