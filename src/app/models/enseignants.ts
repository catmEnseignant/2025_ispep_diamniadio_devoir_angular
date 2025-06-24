export class Enseignant {
    matricule: string;
    prenom: string;
    nome: string;
    telephone: string;
    adress: string;

    constructor(matricule: string, prenom: string, nome: string, telephone: string, adress: string) {
        this.matricule = matricule;
        this.prenom = prenom;
        this.nome = nome;
        this.telephone = telephone;
        this.adress = adress;
    }
}

export class Enseignants {
}