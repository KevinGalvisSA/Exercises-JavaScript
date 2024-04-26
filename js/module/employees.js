//3. Devuelve un litado con el nombre ,apellidos y email de los empleados

import { getAllOficceCityAndMovil } from "./offices";

//cuyo jefe tiene un codigo de jefe igual a 7
export const getAllFullNameAndEmailsAndBoss = async () => {
    let res = await fetch("http://localhost:5502/employee?code_boss=7");
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.name,
            fullLastname: `${val.lastname1} ${val.lastname2}`, // corrected concatenation
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        };
    });
    return dataUpdate;
};


//4. Devuelve el nombre del puesto, nombre, aplleidos y email del jefe de la empresa

export const getBossPositionNamesAndEmail = async () => {
    let res = await fetch("http://localhost:5502/employee");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
            });
        }    
    });
    return dataUpdate;
};

//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
export const getAllNotSalesRepresentEmployee = async () => {
    let res = await fetch("http://localhost:5502/employee");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if(val.position != "Representante Ventas"){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
            });
        }    
    });
    return dataUpdate;
};

//Filtar toda la informacion de un empleado por codigo

export const getEmployeesByCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employee?employee_code=${code}`);
    let data = await res.json(); 
    return data
}

//Filtar toda la informacion de un empleado por codigo tomando su ID:

export const getEmployeesByIdCode = async (code) => {
    let res = await fetch(`http://localhost:5502/employee?employee_code=${code}`);
    let data = await res.json(); 
    return data
}

//Ejercicio N.24 Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getAllEmployeesAndBoss = async () => {
    let res = await fetch("http://localhost:5502/employee");
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.name,
            fullLastname: `${val.lastname1} ${val.lastname2}`,
            boss: val.code_boss
        };
    });
    return dataUpdate;
};

//Ejercicio N.25 Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.

/*export const getAllEmployeesAndBossOfBoss = async () => {
    let res = await fetch("http://localhost:5502/employee");
    let employeer = await res.json();
    for (let i = 0; i < data.length; i++) {
        let {
            id:id_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
        ...employeesUpdate} = employeer[i]
    };
};*/
