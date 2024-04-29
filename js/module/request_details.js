//Filtrar los detalles de las solicitudes
export const getAllRequestDetails = async(code) =>{
    let res = await fetch(`http://localhost:5507/request_details?code_request=${code}`)
    let data = await res.json()
    let requstDetails = {
        code_request: undefined,
        product_code: undefined
    };
    let conjunto = new Set()
    if (data !== undefined && data.length > 0) {
        requstDetails.code_request = data[0].code_request
        for (let i of data) {
            let paso = conjunto.add(i.product_code.match(/^.{2}/)[0]);
            requstDetails.product_code = [...paso]
        }
    }
    return requstDetails;
}