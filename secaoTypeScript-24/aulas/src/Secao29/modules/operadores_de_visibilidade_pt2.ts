class Looger{
   public static info(msg: string): void{
      console.log(msg);
   }


   protected static warn(msg: string):void{
      console.warn(msg)
   }

   private static error(msg: string): void{
      console.log(msg);
   }

   //Acesso na classe
   public static wrapperLogger(
      type: "info" | "warn" | "error", messsage: string
   ): void{
      const msg = `${Date.now()} - ${messsage}`
      switch(type){
         case "info":
            Looger.info(msg);
            break;
         case "warn":
            Looger.warn(msg);
            break;
         case "error":
            Looger.error(msg);
            break;
      }
   }
}

//Acesso fora da classe
Looger.info('Acesso publico')

class LoogerSlack extends Looger{
   public static send(msg: string): void{
      //Acesso na subclasse
      Looger.info('Publico na subclasse');
      Looger.warn("Protegido na subclasse");

      
   }
}