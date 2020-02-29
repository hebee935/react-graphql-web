import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true, },
    firstname: { type: String, },
    lastname: { type: String, },
    email: { type: String, required: true, },
    _hashed_password: { type: String, required: true, },
    gender: { type: String, },
    active: { type: Boolean, required: true, default: true, },
}, {
    timestamps: true,
});

const User = mongoose.model('user', UserSchema);
export default User;