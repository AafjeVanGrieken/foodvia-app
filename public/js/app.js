class Rekening {
    constructor() {
        this.saldo = 0;
        this.products = [];
    }

    add(product) {
        this.products.push(product);
        this.recalculateSaldo();
    }

    remove(product) {
        this.products.splice(this.products.indexOf(product), 1);
        this.recalculateSaldo();
    }

    recalculateSaldo() {
        this.saldo = 0;
        this.products.forEach(product => {
            this.saldo += product.price;
        });
    }
}

class Product {
    constructor(productJson) {
        this.id = productJson.id;
        this.name = productJson.name;
        this.price = productJson.price;
    }
}