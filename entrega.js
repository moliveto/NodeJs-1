class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que no se repita el código
        if (this.products.find((product) => product.code === code)) {
            throw new Error("El código del producto ya existe");
        }

        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !code || !stock) {
            throw new Error("Todos los campos son obligatorios");
        }

        // Crear el producto con un id autoincrementable
        const id = this.products.length + 1;
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(product);
        return product;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            console.error("No se encontró el producto con id:", id);
            return null;
        }
        return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts()); // []

const product = productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    100,
    "Sin imagen",
    "abc123",
    10
);

console.log(productManager.getProducts());

try {
    productManager.addProduct(
        "producto prueba",
        "Este es un producto prueba",
        100,
        "Sin imagen",
        "abc123",
        10
    );
} catch (error) {
    console.log(error);
}

const productById = productManager.getProductById(1);
console.log(productById);

const productByIdNotFound = productManager.getProductById(9999);
console.log(productByIdNotFound); 