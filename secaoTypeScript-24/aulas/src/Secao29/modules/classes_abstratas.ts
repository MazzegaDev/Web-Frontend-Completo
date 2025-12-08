interface IVehicle{
   type: string;
   desc(): string;
}

abstract class Vehicle {
   abstract type: string;
   abstract desc(): string;
}


class BicycleI implements IVehicle {
   public readonly type: string;

   constructor(type: string){
      this.type = type
   }
   desc(): string {
      return `Tipo do veiculo: ${this.type}`
   }
}

const bicycleI = new BicycleI("Bike");
console.log(bicycleI.desc());


class BicycleABS extends Vehicle {
   public readonly type: string;
   constructor(type: string){
      super();
      this.type = type;
   }

   desc(): string {
      return `Tipo do veiculo: ${this.type}` 
   }
} 

const bicycleABS = new BicycleABS('Moto');
console.log(bicycleABS.desc());
