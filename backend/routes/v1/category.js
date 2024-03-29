const router = require('express').Router();

const {
  createCategory,
  getCategory,
  getCategoryList,
  updateCategory,
  deleteCategory
} = require('../../controllers/category');

// User routes - /v1/Categories
router.get('/', getCategoryList);
router.get('/:id', getCategory);
router.post('/add-category', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;