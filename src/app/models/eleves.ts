export class Eleve {
    id?: number;
    numero_carte: number;
    prenom: string;
    nome: string;
    adress: string;
    telephone: string;

    constructor(id:number, numero_carte: number, prenom: string, nome: string, adress: string, telephone: string) {
        this.id = id;
        this.numero_carte = numero_carte;
        this.prenom = prenom;
        this.nome = nome;
        this.adress = adress;
        this.telephone = telephone;
    }
}

export class Eleves {}

