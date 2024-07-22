'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
    ObjectId: {
        type: String
    },
    title: {
        type: String,
        required: true,
        maxLegth: 50,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        maxLegth: 20,
        trim: true
    },
    type: {
        type: String,
        required: "income"
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLegth: 20,
        trim: true
    },
    status: {
        type: Number,
        required: true,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true,
    }
});
const expenses = mongoose.model('expenses', expensesSchema);

module.exports = expenses;
