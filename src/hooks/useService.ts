import { EntityType, isCategory, IServiceConfig, isProduct } from "../intefaces"
import { serviceCategory, serviceProduct, serviceUser } from "../services"


interface Props{
    saveService:IServiceConfig,
    updateService:IServiceConfig,
    highLogicService:IServiceConfig,
    lowLogicService:IServiceConfig,
    deleteService:IServiceConfig
}

export const useService=(item:EntityType):Props=>{

        const idItem = item.id? item.id: -1
        if(isCategory(item)){
            const saveService=  serviceCategory.save(item)  
            const updateService= serviceCategory.update(item)
            const highLogicService=serviceCategory.highLogic(idItem)
            const lowLogicService=serviceCategory.lowLogic(idItem)
            const deleteService=serviceCategory.delete(idItem)
            return {saveService,updateService, highLogicService,lowLogicService,deleteService}
        
        }else if(isProduct(item)){
            const saveService=  serviceProduct.save(item)  
            const updateService= serviceProduct.update(item)
            const highLogicService=serviceProduct.highLogic(idItem)
            const lowLogicService=serviceProduct.lowLogic(idItem)
            const deleteService=serviceProduct.delete(idItem)
            return {saveService,updateService, highLogicService,lowLogicService,deleteService}
        }else{
            const saveService=  serviceUser.save(item)  
            const updateService= serviceUser.update(item)
            const highLogicService=serviceUser.highLogic(idItem)
            const lowLogicService=serviceUser.lowLogic(idItem)
            const deleteService=serviceUser.delete(idItem)
            return {saveService,updateService, highLogicService,lowLogicService,deleteService}

        }

}