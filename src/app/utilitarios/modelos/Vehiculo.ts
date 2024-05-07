export interface Vehiculo{
    codigo: string;
    marca: string;
    modelo: string;
    color: string;
    kilometraje?: string;
    precio?: number;
    foto?: string | null;
    anio?: number;
    calificacion?: number | null | undefined;
}

export interface Respuesta{
    codigo: string;
    mensaje: string;
    data: Array<Vehiculo> | Vehiculo | any;
}

