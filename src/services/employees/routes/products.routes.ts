import { Request, Response, Router } from "express";
import products from "../controllers/products.controllers";

const routerMarkProducts = Router();
const path = "/api/v1/employees/products";
const productsControllers = new products();

// ? endpoint para marcar como vendidos


routerMarkProducts.post(
  `${path}/mark-sold/:productId`,
  (req: Request, res: Response) => {
    productsControllers.markProductIsSold(req, res);
  }
);

// ? endpoint para mostrar los que no fueron vendidos
routerMarkProducts.get(
  `${path}/unsolds-products`,
  (req: Request, res: Response) => {
    productsControllers.showProductsUnsolds(req, res);
  }
);

// ? endpoint para mostrar los que ya fueron vendidos
routerMarkProducts.get(
  `${path}/solds-products`,
  (req: Request, res: Response) => {
    productsControllers.showProductsSolds(req, res);
  }
);

routerMarkProducts.get(
  `${path}/scan-product/:idproduct`,
  (req: Request, res: Response) => {
    productsControllers.scanProduct(req, res);
  }
);

export default routerMarkProducts;
