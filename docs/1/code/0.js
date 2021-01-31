class Human {
    #name
    #age
    constructor(name='山田', age=22) {
        this.#name = '';
        this.#age = 0;
    }
    get Name() { return this.#name; }
    set Name(v) { if (v) { this.#name = v; }
    get Age() { return this.#name; }
    set Age(v) { if (0 <= v) { this.#age = v; }
    intro() {
        const msg = `私の名前は${this.Name}、${this.Age}歳です。`;
        console.log(msg);
        alert(msg);
    }
}
