import { Request, Response } from "express";
import employeeModel from "../models/employees.model";
import jwt from "jsonwebtoken";

class sessionController {
  async createToken(req: Request, res: Response) {
    try {
      const { username, password, role } = req.body;
      const existUser = await employeeModel.find({
        username: username,
        role: role,
      });
      const secret = process.env.JWTSECRET || "passrowdCodeCol12@";

      // Verificar si existen documentos en el array
      if (!existUser || existUser.length === 0) {
        return res.status(401).json({ message: "Usuario no encontrado" });
      }

      if (!secret) {
        return res.status(401).json({ message: "secret not created" });
      }

      // Acceder al primer documento si existe
      const userCurrent = existUser[0];

      // Comparar la contraseña directamente
      if (password == userCurrent.password) {
        const token = jwt.sign(
          {
            username,
            role: role,
            _id: userCurrent._id,
            exp: Date.now() + 60 * 1000,
            
          },
          secret
        );
        // Enviar el token como respuesta o manejarlo según sea necesario
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Credenciales inválidas" });
      }
    } catch (error) {
      res.status(500).json({ messageError: error });
    }
  }
}

export default sessionController;
