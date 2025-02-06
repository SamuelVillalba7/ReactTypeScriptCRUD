export type Data<T>= T | null ;
export type ErrorType= Error | null ;

export interface IFetchParams<T>{
    data : Data<T>;
    error : ErrorType;
    loading :boolean;
    fetchData:()=>void
}
