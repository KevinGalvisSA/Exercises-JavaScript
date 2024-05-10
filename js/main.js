import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil
} from "./module/offices.js";
import { 
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesNotSalesReps,
    getAll3
} from "./module/employees.js";
import { 
    getAllCodeClientsUniquesPaymentsIn2008,
    getAllPaymentsIn2008WithPaypal,
    getAllPaymentsWays,
    getAllCompletedPayments,
    getAllClientsWithNotPaymentsWithManagersSales,
    getAllClientsWhoPayAndTheirManagerAndHisOfficeCity
} from "./module/payments.js";
import { 
    getAllSpanishClients,
    getAllClients,
    getAllClientsWithSalesManagerName,
    getAllClientsWithPaymensAndSalesManagmentInfo,
    getAllClientsNotPayment,
    getAllAdressOfficesFunlabrada
} from "./module/clients.js";
import {
    getAllOrnamentalsAndStockProducts
} from "./module/product.js";
import {
    getAllPossibleStatus,
    getAllRejectedDeliver,
    getAllRejectedDeliverTwoDays,
    getAllRejectedDeliverInYears,
    getAllDeliveredPaymentsJanuary
} from "./module/requests.js";

console.log(await getAll());