export class Person {

    constructor(
        private $id: number,
        private $firstname: string,
        private $lastname: string,
        private $active: boolean) {
    }

    get id(): number {
        return this.$id;
    }

    set id(value: number) {
        this.$id = value;
    }

    get firstname(): string {
        return this.$firstname;
    }

    set firstname(value: string) {
        this.$firstname = value;
    }

    get lastname(): string {
        return this.$lastname;
    }

    set lastname(value: string) {
        this.$lastname = value;
    }

    get active(): boolean {
        return this.$active;
    }

    set active(value: boolean) {
        this.$active = value;
    }
}

