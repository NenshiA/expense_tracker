const { STATUS_MESSAGES, STATUS, STATUS_CODES } = require('../config/constant');
const incomesModel = new (require('../Models/incomes'));

class incomesController {

    // add tranjections
    async addIncomes(req, res) {
        try {
            let data = await incomesModel.addIncomes(req.body);
            res.handler.success(data, STATUS_MESSAGES.INCOME.ADDED);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // get by list incomes
    async getByListIncomes(req, res) {
        try {
            let data = await incomesModel.getByListIncomes(req.body);
            res.handler.success(data)
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // delete incomes
    async deleteIncomes(req, res) {
        try {
            let data = await incomesModel.deleteIncomes(req.params.id);
            if (data.status === STATUS_CODES.NOT_VALID_DATA) {
                res.handler.validationError(undefined, STATUS_MESSAGES.NOT_FOUND.INCOME);
                return;
            }
            res.handler.success(data, STATUS_MESSAGES.INCOME.DELETED)
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // update incomes
    async updateIncomes(req, res) {
        try {
            let data = await incomesModel.updateIncomes(req.body);
            if (data.status === STATUS_CODES.NOT_VALID_DATA) {
                res.handler.validationError(undefined, STATUS_MESSAGES.NOT_FOUND.INCOME);
                return;
            }
            res.handler.success(data, STATUS_MESSAGES.INCOME.UPDATED);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // get by id incomes
    async getByIdIncomes(req, res) {
        try {
            let data = await incomesModel.getByIdIncomes(req.params.id);
            if (data.status === STATUS_CODES.NOT_FOUND) {
                res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.INCOME)
                return;
            }
            res.handler.success(data)
        } catch (error) {
            res.handler.serverError(error);
        }
    }

}

module.exports = incomesController;