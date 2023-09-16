import data from '../data/products.json';

const GetProduct = (id) => {
    return new Promise((resolve, reject) => {
        const product = data.find((product) => product.id == id);

        if(product) {
            setTimeout(() => {
                resolve(product)
            }, 200)
        } else {
            reject({
                error: 'No se encuentra el producto'
            })
        }

    })

}

export default GetProduct