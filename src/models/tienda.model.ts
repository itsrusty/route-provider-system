import mongoose,{ Schema } from "mongoose";

const tiendamodel = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },

  coordinador:{
    type:String,
    require:true
  },

  coordenadas: [{
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  }],
  
  productos:[
    {
        product: {
          type: Schema.Types.ObjectId,
          ref: "productos",
        }
    }
  ]
});

const tienda = mongoose.model("tienda", tiendamodel);

export default tienda;