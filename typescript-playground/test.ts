export class Test {

    constructor(public antwort: number) {
        console.log('Test! 😎', this.antwort);


        const x = (param: number) => {
            return this.antwort + param; // this: Funktion
        }
        console.log(x(2));

        const tech = 'Angular';
        const headline = `Herzlich 
        Willkommen zum ${tech}-Workshop!`;

        console.log(headline);
    }
}