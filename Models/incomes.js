const mongoose = require('mongoose');
const { incomes: incomesSchema } = require('../database/schema/incomes');
const { STATUS_CODES, STATUS } = require("../config/constant");
const moment = require('moment');

class incomesModel {

    // add incomes
    async addIncomes(bodyData) {
        const incomes = mongoose.model("incomes", incomesSchema);

        const newincomes = new incomes(bodyData);
        await newincomes.save();
        return newincomes;
    }

    // get by list incomes
    async getByListIncomes(bodyData) {
        const incomes = mongoose.model("incomes", incomesSchema);

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

        const count = await incomes.countDocuments();
        const result = await incomes.find({ ...filterQuery })
            .skip(skip)
            .limit(itemsPerPage)
            .sort(sortBy)
            .exec();
        return { count, result };
    }

    // delete income
    async deleteIncomes(_id) {
        const incomes = mongoose.model("incomes", incomesSchema);

        const result = await incomes.findByIdAndUpdate(
            { _id: _id },
            { $set: { status: STATUS.INACTIVE } }
        );
        return result;
    }

    // update incomes
    async updateIncomes(bodyData) {
        const incomes = mongoose.model("incomes", incomesSchema);

        const result = await incomes.findByIdAndUpdate(
            { _id: bodyData._id },
            { $set: bodyData }
        );
        return result;
    }

    // get by id incomes
    async getByIdIncomes(_id) {
        const incomes = mongoose.model("incomes", incomesSchema);

        const result = await incomes.findOne({ _id: _id });
        return result;
    }


}

module.exports = incomesModel;