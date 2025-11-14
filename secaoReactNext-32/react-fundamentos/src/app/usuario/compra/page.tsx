/*
    Reutilizando componentes
    Assim que exportamos o componente desejado devemos importar esse arquivo para reutilizarmos. 
    Para isso devemos usar o import 
    import {Acomodacao} from "@/app/principal/ComponentesNaPratica"    
*/

import { Acomodacao } from "@/components/interface"

export default function Compra(){
    return Acomodacao()
}
