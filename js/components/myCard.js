import { 
    getAllClients, 
    getClientsEmploy,
    getAllSpanishClients 
} from "../module/clients.js";
import {
    getAllEmployNotClients,
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesNotSalesReps 
} from "../module/employees.js";
import {
    getAllOficceAndCodeCity,
    getAllOficceCityAndMovil 
} from "../module/offices.js";
import {
    getAllPossibleStatus,
    getAllRejectedDeliver,
    getAllRejectedDeliverTwoDays,
    getAllRejectedDeliverInYears,
    getAllDeliveredPaymentsJanuary 
} from "../module/requests.js";
import {
    getAllCodeClientsUniquesPaymentsIn2008,
    getAllPaymentsIn2008WithPaypal,
    getAllPaymentsWays,
} from "../module/payments.js";
import {
    getAllOrnamentalsAndStockProducts 
} from "../module/product.js";

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }
    //Consultas de una tabla

    //Ejercicio N.1
    async getAllOficceAndCodeCityDesign(){
        let data = await getAllOficceAndCodeCity();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.city}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo de oficina: </b>${val.code_office}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.2
    async getAllOficceCityAndMovilDesign(){
        let data = await getAllOficceCityAndMovil();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.city}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Telefono: </b>${val.movil}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.3
    async getAllEmployeesWithBossAndCodeSevenDesign(){
        let data = await getAllEmployeesWithBossAndCodeSeven();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre} ${val.apellidos}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Correo Electronico: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.4
    async getBossFullNameAndEmailDesign(){
        let data = await getBossFullNameAndEmail();
        this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                <div class="card__title">
                    <div>${data.nombre} ${data.apellidos}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Correo Electronico: </b>${data.email}</p>
                        <p><b>Puesto: </b>${data.puesto}</p>
                    </div>
                </div>
            </div>
        `;
    };
    
    //Ejercicio N.5
    async getAllEmployeesNotSalesRepsDesign(){
        let data = await getAllEmployeesNotSalesReps();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre} ${val.apellidos}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Puesto: </b>${val.puesto}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.6
    async getAllSpanishClientsDesign(){
        let data = await getAllSpanishClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre: </b>${val.name} ${val.lastName}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.7
    async getAllPossibleStatusDesign(){
        let data = await getAllPossibleStatus();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>${val}</b></p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.8
    async getAllClientsUniquesDesign(){
        let data = await getAllCodeClientsUniquesPaymentsIn2008();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>codigo: </b>${val}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.9
    async getAllRejectedDeliverDesign(){
        let data = await getAllRejectedDeliver();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo del cliente: </b>${val.code_client}</p>
                            <p><b>Fecha esperada: </b>${val.date_wait}</p>
                            <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.10
    async getAllRejectedDeliverTwoDaysDesign(){
        let data = await getAllRejectedDeliverTwoDays();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo del cliente: </b>${val.code_client}</p>
                            <p><b>Fecha esperada: </b>${val.date_wait}</p>
                            <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.11
    async getAllRejectedDeliverInYearsDesign(){
        let data = await getAllRejectedDeliverInYears();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo del cliente: </b>${val.code_client}</p>
                            <p><b>Comentarios: </b>${val.comment}</p>
                            <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                            <p><b>Fecha del pedido: </b>${val.date_request}</p>
                            <p><b>Fecha esperada: </b>${val.date_wait}</p>
                            <p><b>Id: </b>${val.id}</p>
                            <p><b>Estado del pedido: </b>${val.status}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.12
    async getAllDeliveredPaymentsJanuaryDesign(){
        let data = await getAllDeliveredPaymentsJanuary();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Codigo del cliente: </b>${val.code_client}</p>
                            <p><b>Comentarios: </b>${val.comment}</p>
                            <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                            <p><b>Fecha del pedido: </b>${val.date_request}</p>
                            <p><b>Fecha esperada: </b>${val.date_wait}</p>
                            <p><b>Id: </b>${val.id}</p>
                            <p><b>Estado del pedido: </b>${val.status}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.13
    async getAllPaymentsIn2008WithPaypalDesign(){
        let data = await getAllPaymentsIn2008WithPaypal();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                    <p><b>Codigo del cliente: </b>${val.code_client}</p>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Fecha del pago: </b>${val.date_payment}</p>
                            <p><b>Id: </b>${val.id}</p>
                            <p><b>Numero de transaccion: </b>${val.id_transaction}</p>
                            
                            <p><b>Total pagado: </b>${val.total}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.14
    async getAllPaymentsWaysDesign(){
        let data = await getAllPaymentsWays();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Metodo de pago: </b>${val}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.15
    async getAllOrnamentalsAndStockProductsDesign(){
        let data = await getAllOrnamentalsAndStockProducts();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                    <p><b>Codigo del producto: </b>${val.code_product} 
                    <br><b>Nombre del producto: </b>${val.name}</p>
                    
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Dimension: </b>${val.dimension}</p>
                            <p><b>Gama: </b>${val.gama}</p>
                            <p><b>Id: </b>${val.id}</p>
                            <p><b>Precio del proveedor: </b>${val.price_provider}</p>
                            <p><b>Precio de venta: </b>${val.price_sale}</p>
                            <p><b>Proveedor: </b>${val.provider}</p>
                            <p><b>Productos en inventario: </b>${val.stock}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Ejercicio N.16
    async getAllClientsDesign(){
        let data = await getAllClients();
        data.forEach(val => {
            let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name} # ${val.client_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
                            <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
                            <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
                            <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
                            <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
                            <p><b>Total a prestar: </b>${money}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    //Consultas Multi tabla

    //Ejercicio N.7
    async getClientsEmployDesign(){
        let data = await getClientsEmploy();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    // Composición externa
    
    //Ejercicio N.12
    async getAllEmployNotClientsDesign(){
        let data = await getAllEmployNotClients();
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/`
            
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Id: </b> ${val.id}</p>
                            <p><b>Cargo: </b>${val.position}</p>
                            <p><b>Oficina: </b>${val.code_office}</p>
                            <p><b>Jefe encargado: </b>${val.name_boss}</p>
                            <p><b>Numero de extencion: </b>${val.extension}</p>
                            <p><b>Correo electronico: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        // Una tabla
        if(name=="logic" && now=="offices_1") this.getAllOficceAndCodeCityDesign()
        if(name=="logic" && now=="offices_2") this.getAllOficceCityAndMovilDesign()
        if(name=="logic" && now=="employ_3") this.getAllEmployeesWithBossAndCodeSevenDesign()
        if(name=="logic" && now=="employ_4") this.getBossFullNameAndEmailDesign()
        if(name=="logic" && now=="employ_5") this.getAllEmployeesNotSalesRepsDesign() 
        if(name=="logic" && now=="client_6") this.getAllSpanishClientsDesign()
        if(name=="logic" && now=="requests_7") this.getAllPossibleStatusDesign()   
        if(name=="logic" && now=="payments_8") this.getAllClientsUniquesDesign()
        if(name=="logic" && now=="requests_9") this.getAllRejectedDeliverDesign()
        if(name=="logic" && now=="requests_10") this.getAllRejectedDeliverTwoDaysDesign()
        if(name=="logic" && now=="requests_11") this.getAllRejectedDeliverInYearsDesign()
        if(name=="logic" && now=="requests_12") this.getAllDeliveredPaymentsJanuaryDesign()
        if(name=="logic" && now=="payments_13") this.getAllPaymentsIn2008WithPaypalDesign()
        if(name=="logic" && now=="payments_14") this.getAllPaymentsWaysDesign()
        if(name=="logic" && now=="products_15") this.getAllOrnamentalsAndStockProductsDesign()   
        if(name=="logic" && now=="client_16") this.getAllClientsDesign() 
        // Multitabla
        if(name=="logic" && now=="client_1_7") this.getClientsEmployDesign()
        // Composición externa
        if(name=="logic" && now=="employ_2_12") this.getAllEmployNotClientsDesign()
    }
}