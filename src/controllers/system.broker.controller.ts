import { Request, Response } from "express";
import employeeModel from "../models/employees.model";
import { productMarks } from "../services/employees/models/products";
// import { createFileInventary } from "../services/employees/utils/pdf-create";

class systemBroker {
  async viewHistoryCourt(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log("id input: " + id);

      const products = await productMarks.find();
      const queryUserInfo = await employeeModel.find({ _id: id });

      const filterSoldProducts: any = products.filter(
        (productsBuy) => productsBuy.productIsSold === true
      );
      const filterUnsoldProducts = products.filter(
        (unsoldProducts) => unsoldProducts.productIsSold === false
      );
      const filterProductsPrices = products.filter(
        (productPrices) => productPrices.productPrice
      );

      let totalPriceProducts = 0;
      products.forEach((product) => {
        totalPriceProducts += product.productPrice ?? 0;
      });

      // !! diferencia terminar
      return queryUserInfo
        ? res.status(200).json({
          response: "found",
          userInfo: queryUserInfo,
          productosVendidos: filterSoldProducts,
          countProductsSolds: filterSoldProducts.length,
          productosNoVendidos: filterUnsoldProducts,
          countProductsUnsolds: filterUnsoldProducts.length,
          estimatedPrices: filterProductsPrices,
        })
        : res.status(404).json({ response: "not found" });

      // const userInfo = { } // información del empleado al que se le quiere ver la info --> { username, vehicleAssignament, stateRoute },

      // const products = // productos que el empleado marcó como vendidos --> desc, cantidad, precio y que productos fueron en un PDF
      // const productsNotBuy = // productos que el empleado  marcó como NO vendidos --> desc, cantidad y precio

      // todo

      // const estimatedPrices = //descripción de --> salió con "$16mil pesos", vendió "$13400 pesos", entregó en efectivo "$5mil pesos", entregó en mercancia "$900 pesos"

      // const differenceCount = // la diferencia de dinero es "$10 pesos"
    } catch (error) {
      console.error(error);
      res.status(500).json({ responseError: error, details: false });
    }
  }

  // todo: create pdf with information to products
  // !! todo: @roman
  async closeCourt(req: Request, res: Response) {
    try {

    } catch (error) {
      console.log(error);
      return res.status(500).json({ responseError: error });
    }
  }
}

export default systemBroker;
