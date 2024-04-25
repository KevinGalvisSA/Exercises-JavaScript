//15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAllOrnamentalsAndStockProducts = async() =>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales&stock_gt=100")
    let data = await res.json()
    data.sort((a,b)=>{
        const priceA = a.price_sale;
        const priceB = b.price_sale;
        return priceB - priceA;
    })
    return data;
}