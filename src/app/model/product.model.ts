import { Supplier } from './supplier.model';


export class Product {

    constructor(
        private $id?: number,
        private $name?: string,
        private $category?: string,
        private $description?: string,
        private $price?: number,
        private $promo?: number,
        private $supplier?: Supplier
    ) {
    }


    get id(): number {
        return this.$id;
    }

    set id(value: number) {
        this.$id = value;
    }

    get name(): string {
        return this.$name;
    }

    set name(value: string) {
        this.$name = value;
    }

    get supplier(): Supplier {
        return this.$supplier;
    }

    set supplier(value: Supplier) {
        this.$supplier = value;
    }

    get category(): string {
        return this.$category;
    }

    set category(value: string) {
        this.$category = value;
    }

    get description(): string {
        return this.$description;
    }

    set description(value: string) {
        this.$description = value;
    }

    get price(): number {
        return this.$price;
    }

    set price(value: number) {
        this.$price = value;
    }

    get promo(): number {
        return this.$promo;
    }

    set promo(value: number) {
        this.$promo = value;
    }
}

