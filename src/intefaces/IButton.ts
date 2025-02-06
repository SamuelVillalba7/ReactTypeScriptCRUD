
import { IServiceConfig } from "./IServiceConfiguration";

export interface IButton {
    label:string,
    classname:string,
    method?:()=>void,
    serviceConfig?:IServiceConfig
}