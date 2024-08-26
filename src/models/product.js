const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter attraction name'],
        trim: true,
        maxLength:[100, 'Attraction name cannot exceed 100 characters']
    },
    translated_name:{
        type: String,
        required: [true, 'Please enter attraction translated name'],
        trim: true,
        maxLength:[100, 'Attraction translated name cannot exceed 100 characters']
    },
    rating:{
        type: Number,
        required: [true, 'Please enter attraction rate'],
        default: 0.0,
    },
    reviews:{
        type: Number,
        required: [true, 'Please enter attraction review number'],
        default: 0,
    },
    open_time:{
        type: String,
        required: [true, 'Please enter attraction open time'],
        trim: true,
        maxLength:[100, 'Open time cannot exceed 20 characters']
    },
    address:{
        type: String,
        required: [true, 'Please enter attraction address'],
        trim: true,
        maxLength:[100, 'Address cannot exceed 30 characters']
    },
    phone:{
        type: String,
        required: [true, 'Please enter attraction address'],
        trim:true,
    },
    description:{
        type: String,
        required: [true, 'Please enter attraction description'],
    },
    ticket_price_adult:{
        type: String,
    },
    ticket_price_children:{
        type: String,
    },
    city_belong:{
        type: String,
        required: [true, 'Please enter the city to which this attraction belongs']
    },
    image:[
        {
            url: {
                type: String,
                required: true,
            },
        }
    ],
    map_image:[
        {
            url: {
                type: String,
                required: true,
            },
        }
    ]
})
module.exports = mongoose.model('Product', productSchema);