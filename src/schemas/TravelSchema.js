import mongoose from "mongoose"



const TravelSchema =  mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    route: {
        type: Schema.Types.ObjectId,
        ref: "Route",
        required: true
    },
    customers: [{
        customer_id: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },
        from: {
            type: Schema.Types.ObjectId,
            ref: "Stop",
            required: true
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "Stop",
            required: true
        }
    }],
    price: {
        type: Number,
        required: true
    },
    employees: [{
        type: Schema.Types.ObjectId,
        ref: "Employee"
    }],
    bus: {
        type: Schema.Types.ObjectId,
        ref: "Bus",
        required: true
    },
    notes: [String]
});

export default mongoose.model('Travel', TravelSchema);