const mongoose = require('mongoose');
const { expenses: expensesSchema } = require('../database/schema/expense');
const { STATUS_CODES, STATUS } = require("../config/constant");
const moment = require('moment');

class expensesModel {

    //add expenses
    async addExpenses(bodyData) {
        const expense = mongoose.model("expenses", expensesSchema);

        const newexpense = new expense(bodyData);
        await newexpense.save();
        return newexpense;
    }

    // update expenses
    async updateExpenses(bodyData){
        const expense = mongoose.model("expenses", expensesSchema);

        const result = await expense.findByIdAndUpdate(
            { _id: bodyData._id },
            { $set: bodyData }
        );
        return result;
    }

    // list by expenses
    async listByExpenses(bodyData) {
        const expense = mongoose.model("expenses", expensesSchema);

        const currentPage = bodyData.currentPage;
        const itemsPerPage = bodyData.itemsPerPage;
        const skip = (currentPage - 1) * itemsPerPage;

        const sort = bodyData.sortBy;
        const sortBy = {};

        Object.entries(sort).forEach(([key, value]) => {
            if (key !== "" && value !== "") {
                sortBy[key] = value;
            }
        });

        var filters = bodyData.filters;
        var filterQuery = {};

        if (bodyData?.startDate && bodyData?.endDate) {
            const startDate = moment(bodyData.startDate).toDate();
            const endDate = moment(bodyData.endDate).toDate();
            filterQuery['_id'] = {
                $gte: startDate,
                $lte: endDate
            };
        }
        Object.entries(filters).forEach(([key, value]) => {
            if (key !== "" && value !== "") {
                if (typeof value === 'string') {
                    filterQuery[key] =
                        (value.trim())
                } else {
                    filterQuery[key] = value;
                }
            }
        });

        const count = await expense.countDocuments();
        const result = await expense.find({ ...filterQuery })
            .skip(skip)
            .limit(itemsPerPage)
            .sort(sortBy)
            .exec();
        return { count, result };
    }

    // delete expenses
    async deleteExpenses(_id) {
        const expense = mongoose.model("expenses", expensesSchema);

        const result = await expense.findByIdAndUpdate(
            { _id: _id },
            { $set: { status: STATUS.INACTIVE } }
        );
        return result;
    }

    // get by id expenses
    async getByIdExpenses(_id) {
        const expense = mongoose.model("expenses", expensesSchema);

        const result = await expense.findOne({ _id: _id });
        return result;
    }

}

module.exports = expensesModel;