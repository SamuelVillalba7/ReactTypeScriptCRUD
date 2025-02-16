import { ICategory, IProduct, IServiceConfig } from "../intefaces"


 export class EndponintsProducts {

    public findById (id:number):IServiceConfig{
        return {
            method: "GET",
            url: `http://localhost:8080/product/findById/${id}`
        }
    }
    public findAll():IServiceConfig{
        return{
            method: "GET",
            url: `http://localhost:8080/product/findAll`
        }
    }

    public save(product:IProduct):IServiceConfig{
        return{
            method: "POST",
            url: `http://localhost:8080/product/save`,
            body: JSON.stringify(product)
        }
    }

    public delete(id:number):IServiceConfig{
        return{
            method: "DELETE",
            url: `http://localhost:8080/product/delete?id=${id}`
        }
    }

    public update(product:IProduct):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/product/update`,
            body:JSON.stringify(product)

        }
    }
    public highLogic(id:number):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/product/highLogic?id=${id}`
        }
    }

    public lowLogic(id:number):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/product/lowLogic?id=${id}`
        }
    }


    public findByCategory(id:number):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/product/findByCategory/${id}`
        }
    }


}
export class EndponintsCategory {

    public findById (id:number):IServiceConfig{
        return {
            method: "GET",
            url: `http://localhost:8080/category/findById/${id}`
        }
    }
    public findAll():IServiceConfig{
        return{
            method: "GET",
            url: `http://localhost:8080/category/findAll`
        }
    }

    public save(category:ICategory):IServiceConfig{
        return{
            method: "POST",
            url: `http://localhost:8080/category/save`,
            body: JSON.stringify(category)
        }
    }

    public delete(id:number):IServiceConfig{
        return{
            method: "DELETE",
            url: `http://localhost:8080/category/delete/${id}`
        }
    }

    public update(category:ICategory):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/category/update`,
            body:JSON.stringify(category)

        }
    }

    public highLogic(id:number):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/category/highLogic?id=${id}`
        }
    }

    public lowLogic(id:number):IServiceConfig{
        return{
            method: "PUT",
            url: `http://localhost:8080/category/lowLogic?id=${id}`
        }
    }
}

export const serviceProduct =new EndponintsProducts()
export const serviceCategory = new EndponintsCategory()

