import {getEmployeesByCode, getEmployeesByIdCode} from "./employees.js"
import {getOfficesByCode} from "./offices.js"
import {getAllCompletedPayments} from "./payments.js"
import {getAllNotAtTimeDelivers, getAllRequest} from "./Request.js"
import {getAllProducts} from "./product.js"
import {getAllRequestDetails} from "./request_details.js"

//6. Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllSpanishClients = async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        if(val.country == "Spain"){
            dataUpdate.push({
                name: val.contact_name,
                country: val.country
            })
        }
    })
    return dataUpdate
} 

//16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

export const getAllClients = async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json()
    let dataUpdate = []
    data.forEach(val =>{
        if(val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30){
            dataUpdate.push(val)
        }
    })
    return dataUpdate
} 

//Ejercicio N.7 (Consulta Multitabla) Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getAllClientsAndManagersWithTheOfficeCity = async()=>{
    
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    for(let i=0; i<client.length; i++){
        let {
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            city,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        let [employee] = await getEmployeesByCode(clientUpdate.code_employee_sales_manager)
        let {
            id:id_employee,
            extension,
            email,
            code_boss,
            position,
            ...employeeUpdate
        } = employee
        let [office] = await getOfficesByCode(employeeUpdate.code_office)
        let {
            id:id_office,
            country,
            region,
            postal_code,
            movil,
            address1,
            address2,
            ...officeUpdate
        } = office
        let data = {...clientUpdate, ...employeeUpdate, ...officeUpdate}
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
            employees_office_code: data.code_office,
            city_employees: data.city
        }
    }   
    return client;
} 

//Ejercici N.1 (Consulta Multitabla)

export const getAllClientsWithSalesManagerName = async()=>{
    
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    for(const val of dataCliente){
        var [employee] = await getEmployeesByIdCode(val.code_employee_sales_manager)
        val.code_employee_sales_manager = employee
    }
    for(let i=0; i<client.length; i++){
        let {
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            city,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        let [employee] = await getEmployeesByIdCode(clientUpdate.code_employee_sales_manager)
        let {
            id:id_employee,
            extension,
            email,
            code_boss,
            position,
            code_office,
            ...employeeUpdate
        } = employee
        let data = {...clientUpdate, ...employeeUpdate}
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
        }
    }

    return client;
}

//Ejercicio 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientsWithPaymensAndSalesManagmentInfo = async()=>{
    
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    for(let i=0; i<client.length; i++){
        let {
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            city,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        let [employee] = await getEmployeesByIdCode(clientUpdate.code_employee_sales_manager)
        let {
            id:id_employee,
            extension,
            email,
            code_boss,
            position,
            code_office,
            ...employeeUpdate
        } = employee
        let data = {...clientUpdate, ...employeeUpdate}
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name}, ${data.lastname1}, ${data.lastname2}`,
        }
    }
    return client;
} 

//Ejercicio N.3 (multitabla) complemento (Filtrar los clientes por codigo)
export const getAllClientsNotPayment = async(code) =>{
    let res = await fetch(`http://localhost:5501/clients?client_code=${code}`)
    let data = await res.json()
    return data;
}

//Ejercicio 22. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

export const getAllAdressOfficesFunlabrada = async()=>{
    
    let res = await fetch("http://localhost:5501/clients?city=Fuenlabrada")
    let client = await res.json();
    for(let i=0; i<client.length; i++){
        let {
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        let [employee] = await getEmployeesByCode(clientUpdate.code_employee_sales_manager)
        let {
            id:id_employee,
            extension,
            email,
            code_boss,
            position,
            ...employeeUpdate
        } = employee
        let [office] = await getOfficesByCode(employeeUpdate.code_office)
        let {
            id:id_office,
            country,
            region,
            postal_code,
            movil,
            address1,
            address2,
            ...officeUpdate
        } = office
        let data = {...clientUpdate, ...employeeUpdate, ...officeUpdate}
        client[i] = {
            client_name: `${data.client_name}`,
            employees_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
            employees_office_code: data.code_office,
            city_employees: data.city
        }
    }   
    return client;
} 

//26. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
export const getAllAdressNotAtTimeDeliverClients = async()=>{
    
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    let requests = await getAllNotAtTimeDelivers()
    let nuevo = new Set()
    for(let i = 0; i<client.length; i++){
        for(let j = 0; j<requests.length; j++){
            if(requests[j].code_client===client[i].client_code){
                let {
                    id:id_client,
                    limit_credit,
                    postal_code:postal_code_client,
                    country:country_client,
                    region:region_client,
                    address2:address2_client,
                    address1:address1_client,
                    fax,
                    phone,
                    ...clientUpdate} = client[i]
                let {
                    code_request,
                    date_request,
                    status,
                    comment,
                    id,
                    ...requestUpdate} = requests[j]
                let Nuevadata = {...clientUpdate, ...requestUpdate}
                nuevo.add(Nuevadata)   
            }
        }
    }
    let ListClientes = [...nuevo]
    return ListClientes;
}    


//Ejercicio 27. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const getAllCostumersWithGamas = async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    let clientNames = clients.map(client => client.client_name);
    let uniqueClients = clients.filter((client, index) => {
        return clientNames.indexOf(client.client_name) === index;
    });
    let clientCodes = uniqueClients.map(client => client.client_code);
    let groups = {};
    uniqueClients.forEach((client,i) =>{
        let code_client = client.client_code;
        if(!groups[code_client]){
            groups[code_client] = []
        }
    })
    for (let i = uniqueClients.length - 1; i >= 0; i--) {
        var {
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            city,
            code_employee_sales_manager,
            ...clientUpdate} = uniqueClients[i]
            uniqueClients[i] = clientUpdate
        let code_client = await getAllRequest(uniqueClients[i].client_code);
        if (code_client.code_client !== undefined) {
            uniqueClients[i] = {
                code_client: code_client.code_client,
                client_name: uniqueClients[i].contact_name,
                code_requests: code_client.codes_requests
            }
        } else {
            uniqueClients.splice(i, 1);
        }
    }
    var AllCodeRequestsLength = []
    for(let i = 0; i<uniqueClients.length; i++){
        AllCodeRequestsLength.push(uniqueClients[i].code_requests)
    }
    var nuevo = new Set()
    for(let i = 0; i<AllCodeRequestsLength.length; i++){
        for(let j = 0; j<AllCodeRequestsLength[i].length; j++){
            var requestsDetails = await getAllRequestDetails(AllCodeRequestsLength[i][j])
            nuevo.add(requestsDetails.product_code)
            uniqueClients[i]["single_code_request"] = requestsDetails.code_request
            continue
        }
        uniqueClients[i]["products"] = [...nuevo]
        nuevo = new Set()    
    }
    var uniqueInitials = new Set();
    for(let i = 0; i<uniqueClients.length; i++){
        uniqueClients[i].products.forEach(subArray => {
            if(subArray === undefined){
                return
            }
            for(let i of subArray){
                uniqueInitials.add(i);
            }
            
        });
        
        uniqueClients[i].products = [...uniqueInitials];
    }
    
    return uniqueClients;
}