import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossPositionNamesAndEmail,
    getAllNotSalesRepresentEmployee,
    getAllEmployeesAndBoss
} from "./module/employees.js";
import { 
    getAllClientsUniques,
    getAllPaymentsIn2008WithPaypal,
    getAllPaymentsWays,
    getAllCompletedPayments,
    getAllClientsWithNotPaymentsWithManagersSales,
    getAllClientsWithNotPayments
} from "./module/payments.js";
import { 
    getAllSpanishClients,
    getAllClients,
    getAllClientsAndManagersWithTheOfficeCity,
    getAllClientsWithSalesManagerName,
    getAllClientsWithPaymensAndSalesManagmentInfo,
    getAllClientsNotPayment,
    getAllAdressOfficesFunlabrada
} from "./module/client.js";
import {
    getAllOrnamentalsAndStockProducts
} from "./module/products.js";
import {
    getAllPossibleStatus,
    getAllRejectedDeliver,
    getAllRejectedDeliverTwoDays,
    getAllRejectedDeliverInYears,
    getAllDeliveredPaymentsJanuary
} from "./module/requests.js";

console.log(await getAll());