import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel;