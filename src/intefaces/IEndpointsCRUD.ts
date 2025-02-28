import { EntityType } from "./EntityType"
import { IServiceConfig } from "./IServiceConfiguration"

export interface IEndpointsCRUD{

    findById:(id:number)=>IServiceConfig,
    findAll:()=>IServiceConfig,
    save:(item:EntityType)=>IServiceConfig,
    update:(item:EntityType)=>IServiceConfig,
    delete:(id:number)=>IServiceConfig,
    highLogic:(id:number)=>IServiceConfig,
    lowLogic:(id:number)=>IServiceConfig

}


