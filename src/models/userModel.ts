import mongoose, { Schema } from 'mongoose';

const contactUsSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    age: { type: Number, required: true }
});

