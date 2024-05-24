export interface Order {
  id: number;
  productId: number;
  customerId: number;
  calendarDate: string;
  quantity: number;
  totalPrice: number;
  orderStatus: string;
}
