export class EmailData {
    private constructor(
        public email: string,
        public name: string,
        public telephone: string,
        public typeEmail: TypeEmail,
        public weeklyDeliveries?: number,
        public totalEmployees?: number,
        public totalPortions?: number,
        public totalBoxes?: number,
        public typeOfBox?: BoxType,
        public getNotifications?: boolean,
        public comment?: string,
        public subject?: string,
        public body?: string,
    ) { }

}

export enum TypeEmail {
    Contacto = 0,
    Pedido = 1,
    Cotizacion = 2
}

export enum BoxType {
    Basico = 0,
    Medio = 1,
    Premium = 2
}
  
export interface IQuestion {
    title: string,
    answer: string
  }