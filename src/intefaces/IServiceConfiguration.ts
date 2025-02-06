export interface IServiceConfig{
    url: string, 
    method: "GET" | "POST" | "PUT" | "DELETE";
    body? : string ;

}