import mongoose from "mongoose";
const GradesSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Please enter subject"],
        trim: true
    },
    grade: {
        type: Number,
        required: [true, "Please enter grade"],
        trim: true
    }
});
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please enter full name"],
        unique: [true, "FullName already exists"],
        trim: true
    },
    passportId: {
        type: Number,
        required: [true, "Please enter passport id"],
        minlength: [9, "The passport id must be 9 digits"],
        maxlength: [9, "The passport id must be 9 digits"],
        unique: [true, "Passport id already exists"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        trim: true
    },
    grades: {
        type: [GradesSchema],
        trim: true
    },
    role: {
        type: String,
        required: [true, "Please enter role"],
        enum: ["admin", "user"],
        trim: true
    }
});
export default mongoose.model("USER", UserSchema);
