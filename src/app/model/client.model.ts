import { Person } from "./person.model";
import { Product } from "./product.model";


export class Client extends Person{

    private products: Product[] = []

    constructor($id: number, $firstname: string, $lastname: string, $active: boolean, private $ca: number, products: Product[]) {
        super($id, $firstname, $lastname, $active);
        this.products = products;
    }

    get ca(): number {
        return this.$ca;
    }

    set ca(value: number) {
        this.$ca = value;
    }
}

