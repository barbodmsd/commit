const discountCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'code is required'],
        trim: true
    },
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true
    },
    expireTime: {
        type: String,
        required: [true, 'expireTime is required']
    },
    startTime: {
        type: String,
        required: [true, 'startTime is required']
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        required:[true,'discount is required']
    }
}, { timestamps: true })

const DiscountCode = mongoose.model('DiscountCode', discountCodeSchema)
export default DiscountCode