const mongoose=require('mongoose'); 

const productSchema=new mongoose.Schema({
    image: Buffer,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String
});
// productSchema.virtual('imageSrc').get(function () {
//     if (this.image && this.imageType) {
//         return `data:${this.imageType};base64,${this.image.toString('base64')}`;
//     }
// });

module.exports=mongoose.model('product',productSchema);