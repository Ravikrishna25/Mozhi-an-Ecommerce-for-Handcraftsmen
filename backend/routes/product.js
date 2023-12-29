const express = require("express");
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, createReview, getReviews, deleteReview, getAdminProducts ,generateRandomProducts} = require('../controllers/productController');
const router = express.Router();
const { isAuthenticatedUser,authorizeRoles } = require("../middlewares/authenticate")

router.route('/products')
    .get( getProducts);

    router.get('/deal-of-the-day', async (req, res) => {
        try {
          const dealOfTheDayProducts = await generateRandomProducts(5);
          res.json(dealOfTheDayProducts);
        } catch (error) {
          console.error('Error fetching deal of the day:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

       
    router.route('/product/:id')
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct);
    

    router.route('/review').put(isAuthenticatedUser, createReview)
    
    //Admin Routes
    router.route('/admin/product/new')
        .post(isAuthenticatedUser,authorizeRoles('admin'),newProduct);
        // router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), upload.array('images'), newProduct);
router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);




// router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'),upload.array('images'), updateProduct);
router.route('/admin/reviews').get(isAuthenticatedUser, authorizeRoles('admin'),getReviews)
router.route('/admin/review').delete(isAuthenticatedUser, authorizeRoles('admin'),deleteReview)


module.exports = router;