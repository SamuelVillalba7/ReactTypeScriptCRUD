
import Form from "../../components/Form/Form";
import TableProdutsContainer from "../../components/TableProdutsContainer/TableProdutsContainer";
import { IProduct } from "../../intefaces";

export default function Home (){
    
    const product:IProduct ={
        name: "s",
        idCategory: 1,
        description: "",
        price: 12,
        urlImage: "",
        stock: 1,
        state: true
    }
    
    
    return(
        <>
            <TableProdutsContainer/>
            <Form item={product} />
        </>
    )
}