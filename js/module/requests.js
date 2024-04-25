//7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllPossibleStatus = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        if(!dataUpdate.includes(val.status)){
            dataUpdate.push(val.status);
        }
    });
    return dataUpdate;
} 

//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllRejectedDeliver = async()=>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = data.filter(val => val.date_delivery > val.date_wait);
    let delivering = []
    for(let i = 0; i<dataUpdate.length; i++){
        delivering.push({
            code_request: dataUpdate[i].code_request,
            code_client: dataUpdate[i].code_client,
            date_wait: dataUpdate[i].date_wait,
            date_delivery: dataUpdate[i].date_delivery
        });
    }
    return delivering;
}

//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAllRejectedDeliverTwoDays = async()=>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let delivering = data.filter(val => {
        if(val.date_delivery === null){
            return false; // si hubiera error o no haya datos
        }
        
        let dateDelivery = new Date(val.date_delivery);
        let dateWait = new Date(val.date_wait);
        
        // Calcular la diferencia en días
        let timeDiff = dateWait.getTime() - dateDelivery.getTime();
        let diffDays = timeDiff / (1000 * 3600 * 24);
        return diffDays >= 2;
    }).map(val => ({
        code_request: val.code_request,
        code_client: val.code_client,
        date_wait: val.date_wait,
        date_delivery: val.date_delivery
    }));
    return delivering;
}
//11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

export const getAllRejectedDeliverInYears = async()=>{
    let res = await fetch("http://localhost:5508/requests?status=Rechazado");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        let [year] = val.date_request.split("-")
        if(year == "2009"){
            dataUpdate.push(val)
        } 
    })
    return dataUpdate
}