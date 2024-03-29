interface userRoute{
    empleado: string,
    vehicle: string,
    start: boolean,
    end: boolean,
    status: boolean,
    amountOfMerchandise: number,
    LastMinuteSale: number
}


export interface Historial{
    employeID:string, 
    action:string, 
    date:Date 
}
    

export interface ProductsInRequest{
        product:string, 
        stateProduct: "registrado" | "despachado" | "vendido"| "devolucion",
        amount:number,
        amountCurrent:number
    }


// decorators