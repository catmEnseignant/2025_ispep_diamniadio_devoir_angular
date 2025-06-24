export class Eleve {
    id?: number;
    numero_carte: number;
    prenom: string;
    nom: string;
    adresse: string;
    telephone: string;

    constructor(id:number, numero_carte: number, prenom: string, nom: string, adresse: string, telephone: string) {
        this.id = id;
        this.numero_carte = numero_carte;
        this.prenom = prenom;
        this.nom = nom;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}

export class Eleves {}

