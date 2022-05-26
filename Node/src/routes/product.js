import express from 'express'
import { add, list, read, remove, update } from '../controllers/product'
import { userById } from '../controllers/user';
import { isAuth, requiredSignIn } from '../middleware/checkAuth';

const router = express.Router()

router.post("/product", add);
router.get("/products", list)
router.get("/product/:slug" ,read)
router.delete("/product/:slug", remove)
router.put("/product/:slug", update)

router.param("userId", userById)
export default router