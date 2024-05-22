export interface Order {
  id: number;
  productId: number;
  costumerId: number;
  calendarDate: Date;
  quantity: number;
  totalPrice: number;
  orderStatus: string;
}
