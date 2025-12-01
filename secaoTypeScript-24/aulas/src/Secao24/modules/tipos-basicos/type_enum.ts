enum orderStatus {
  Pending,
  Delivered = "Entregue",
  Canceled = "Cancelado",
}

console.log(orderStatus[0]);
console.log(orderStatus.Canceled);

enum orderStatus {
  WaitingPayment = 500,
  SENT = "Enviado",
}

function ChangeOrder(newStatus: orderStatus): void {
   if(newStatus === orderStatus.SENT){
      //..Enviando email
      console.log("Novo status ", newStatus);
   }
}

ChangeOrder(orderStatus.SENT);
