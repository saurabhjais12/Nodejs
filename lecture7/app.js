//6. Node.js and Databases
//Connecting to MongoDB using Mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Connection failed:', err));

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({ name: 'Alice', age: 30 });
newUser.save()
    .then(() => console.log('User saved'))
    .catch(err => console.log('Error saving user:', err));
