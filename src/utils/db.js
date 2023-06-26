import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://yuvalleberstein21:press97vbh@cluster0.ksumt6v.mongodb.net/NEXTAPP');
    } catch (error) {
        throw new Error("Connection failed!")
    }
}

export default connect;