
const router = (require('express')).Router()
const incomesController = new (require('../controller/incomes'))();

// add income
router.route('/add').post(incomesController.addIncomes);

// get all income
router.route('/list').post(incomesController.getByListIncomes);

// delete incomes
router.route('/delete/:id').delete(incomesController.deleteIncomes);

// update incomes
router.route('/update').put(incomesController.updateIncomes);

// get by id incomes
router.route('/:id').get(incomesController.getByIdIncomes);

module.exports = router;