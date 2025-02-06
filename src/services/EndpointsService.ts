import { IProduct, IServiceConfig } from "../intefaces"


 class Endponints {

    public getProductById (id:string):IServiceConfig{
        return {
            method: "GET",
            url: `http://localhost:8080/product/findById/${id}`
        }
    }
    public getAllProducts():IServiceConfig{
        return{
            method: "GET",
            url: `http://localhost:8080/product/findAll`
        }
    }

    public saveProduct(product:IProduct):IServiceConfig{
        return{
            method: "POST",
            url: `http://localhost:8080/product/save`,
            body: JSON.stringify(product)
        }
    }

    public deleteProductById(id:string):IServiceConfig{
        return{
            method: "DELETE",
            url: `http://localhost:8080/product/delete?id=${id}`
        }
    }

    public updateProduct(product:IProduct):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/product/update`,
            body:JSON.stringify(product)

        }
    }

    public getProductsByCategory(id:string):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/product/findByCategory/${id}`
        }
    }


}

export const serviceSB =new Endponints()

