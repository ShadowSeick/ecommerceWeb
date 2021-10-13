export class Product {

    constructor(public id: number,
                public name: string,
                public price: number,
                public img: string,
                public productsInCart: number = 0,
                public onSale: boolean = false) {}

}
