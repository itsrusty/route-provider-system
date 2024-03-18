import tienda from "../models/tienda.model";
import { Request, Response } from "express";

class tiendaController {
  async getTiendas(req: Request, res: Response) {
    try {
      const tiendas = await tienda.find();

      tiendas
        ? res.status(200).json({ message: tiendas, details: true })
        : res
            .status(404)
            .json({ message: "no existen tiendas", details: false });
    } catch (error) {
      console.error(error);
    }
  }

  async getTiendasById(req: Request, res: Response) {
    try {
      const idTienda = req.params;

      const existTienda = await tienda.findById({
        idTienda,
      });

      existTienda
        ? res.status(200).json({ message: existTienda, details: true })
        : res.status(404).json({ message: "tienda not found", details: false });
    } catch (error) {
      console.error(error);
    }
  }

  async createTienda(req: Request, res: Response) {
    try {
      const { nombre, coordinador, coordenadas } = req.body;

      const existTienda = await tienda.findOne({
        nombre: nombre,
        coordenadas: coordenadas,
      });

      if (existTienda) {
        return res
          .send(404)
          .json({ message: "la tienda ya existe", details: false });
      }
      const data = {
        nombre,
        coordinador,
        coordenadas,
      };

      const createdTienda = await tienda.create(data);

      createdTienda
        ? res.status(200).json({ message: createdTienda, details: true })
        : res
            .status(400)
            .json({ messga: "intenral server error", details: false });
    } catch (error) {
      console.log(error);
    }
  }

  async editTienda(req: Request, res: Response) {
    try {
      const idTienda = req.params;
      const { nombre, coordinador, cordenadas } = req.body;

      const data = {
        nombre,
        coordinador,
        cordenadas
      };

      const existTienda = await tienda.findOneAndUpdate(
        { _id: idTienda },
        { $set: data },
        { new: true }
      );

      existTienda
        ? res.status(200).json({ message: existTienda, details: true })
        : res
            .send(404)
            .json({ message: "la tienda no existe", details: false });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTienda(req: Request, res: Response) {
    try {
      const { idTienda } = req.params;

      const deleted = await tienda.findByIdAndDelete(idTienda);

      deleted
        ? res.send(200).json({ message: "tienda deleted", details: true })
        : res.send(404).json({ message: "tienda not found", details: false });
    } catch (error) {
      console.log(error);
    }
  }
}

export default tiendaController;