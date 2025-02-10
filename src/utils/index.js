/**
 * Esta función recibe un array de productos y devuelve el precio total de todos los productos
 * @param {Array} arrayProduct cartProducts: array de objetos
 * @returns {numer} total price
 */
export const totalPrice = (arrayProduct) => {
    return arrayProduct.length > 0
    ? arrayProduct.reduce((sum, product) => {
            return sum + product.price * product.quantity;
        }, 0)
    : 0;
};