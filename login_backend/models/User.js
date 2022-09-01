import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true, min: 5, max: 20 },
    password: { type: String, required: true, min: 8, max: 32 },
}, {
    versionKey: false,
    timestamps: {
        createdAt: "registrationDate",
        updatedAt: "lastUpdated"
    },
})

export default mongoose.model("User", UserSchema);