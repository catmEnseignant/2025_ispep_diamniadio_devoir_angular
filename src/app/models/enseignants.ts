export class Enseignant {
    matricule: string;
    prenom: string;
    nom: string;
    telephone: string;
    adresse: string;
    id?: number;

    constructor(id:number,matricule: string, prenom: string, nom: string, telephone: string, adresse: string) {
        this.matricule = matricule;
        this.prenom = prenom;
        this.nom = nom;
        this.telephone = telephone;
        this.adresse = adresse;
        this.id = id;
    }
}

export class Enseignants {
}