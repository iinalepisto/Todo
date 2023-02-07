import mongoose, { Schema } from "mongoose";

export default mongoose.model(
    "Todo",
    mongoose.Schema({
        text: {
            type: "String",
            required: true,
        },
        complete: {
            type: Boolean,
            default: false
        },
        timestamp: {
            type: String,
            default: Date.now()
        }
    })
)