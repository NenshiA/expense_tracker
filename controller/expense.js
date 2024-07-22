const {STATUS_CODES, STATUS_MESSAGES,STATUS} = require('../Config/constant');
const expensesModel = new (require('../Models/expense'));

class expensesController {

    // add expenses
    async addExpenses(req, res) {
        try {
            let data = await expensesModel.addExpenses(req.body);
            res.handler.success(data, STATUS_MESSAGES.EXPENSES.ADDED);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // update expenses
    async updateExpenses(req, res) {
        try {
            let data = await expensesModel.updateExpenses(req.body);
            if (data.status == STATUS_CODES.NOT_VALID_DATA) {
                res.handler.validationError(undefined, STATUS_MESSAGES.NOT_FOUND.EXPENSES);
                return;
            }
            res.handler.success(data, STATUS_MESSAGES.EXPENSES.UPDATED);
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // list by expenses
    async listByExpenses(req, res) {
        try {
            let data = await expensesModel.listByExpenses(req.body);
            res.handler.success(data)
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // delete expenses
    async deleteExpenses(req, res) {
        try {
            let data = await expensesModel.deleteExpenses(req.params.id);
            if (data.status === STATUS_CODES.NOT_VALID_DATA) {
                res.handler.validationError(undefined, STATUS_MESSAGES.NOT_FOUND.EXPENSES);
                return;
            }
            res.handler.success(data, STATUS_MESSAGES.EXPENSES.DELETED)
        } catch (error) {
            res.handler.serverError(error)
        }
    }

    // get by id expenses
    async getByIdExpenses(req, res) {
        try {
            let data = await expensesModel.getByIdExpenses(req.params.id);

            if (data.status === STATUS_CODES.NOT_FOUND) {
                res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.EXPENSES)
                return;
            }
            res.handler.success(data)
        } catch (error) {
            res.handler.serverError(error);
        }
    }


}

module.exports = expensesController;