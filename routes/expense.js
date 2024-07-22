const router = (require('express')).Router()
const expensesController = new (require('../controller/expense'));

//add expenses
router.route('/add').post(expensesController.addExpenses);

// update expenses
router.route('/update').put(expensesController.updateExpenses);

// list by expenses
router.route('/list').post(expensesController.listByExpenses);

// delete expenses
router.route('/delete/:id').delete(expensesController.deleteExpenses);

// get by id expenses
router.route('/:id').get(expensesController.getByIdExpenses);

module.exports = router;