export class Supplier {

    constructor(
        private $id: number,
        private $companyName: string,
        private $bankAccountNumber: number
    ) {
    }

    get id(): number {
        return this.$id;
    }

    set id(value: number) {
        this.$id = value;
    }

    get companyName(): string {
        return this.$companyName;
    }

    set companyName(value: string) {
        this.$companyName = value;
    }

    get bankAccountNumber(): number {
        return this.$bankAccountNumber;
    }

    set bankAccountNumber(value: number) {
        this.$bankAccountNumber = value;
    }
}

