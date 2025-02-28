interface Props{
    fieldKey:string,
    value:unknown,
    handleChange:(key: string, value: unknown)=>void,
}

export default function FormInput({fieldKey,value, handleChange}:Props){

    const type= typeof value
            
    if(fieldKey ==="id"){
        return(
            <input 
                className="form-control" 
                placeholder={`Ingrese ${fieldKey}`} 
                type="text" 
                value={value as number} 
                disabled 
            />
        )
    } 
      switch(type){
        case "string":
            return(
                <input
                    className="form-control"
                    placeholder={`Ingrese ${fieldKey}`}
                    type="text"
                    value={value as string}
                    onChange={(e) => handleChange(fieldKey, e.target.value)}
                />
            );
        case "number":
            return(
                <input
                    className="form-control"
                    placeholder={`Ingrese ${fieldKey}`}
                    type="number"
                    value={value as number}
                    onChange={(e) => handleChange(fieldKey, e.target.value)}
                />
            );
        case "boolean":
            return(
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={value as boolean}
                    onChange={(e) => handleChange(fieldKey, e.target.checked)}
                />
            );
        default:
            return null

      }

}