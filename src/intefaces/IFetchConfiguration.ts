export interface IFetchConfiguration{
    method: "GET" | "POST" | "PUT" | "DELETE";
    body? : string ;
    headers : {
        "Content-Type": "application/json";
    };
}
