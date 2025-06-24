
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForOf } from "@angular/common";
import { Enseignant } from "../../../models/enseignants";
import {EnseignantsServicesService} from "../../../services/enseignants-services.service";

@Component({
    selector: 'app-enseignants-list',
    imports: [
        NgForOf
    ],
    templateUrl: './enseignants-list.component.html',
    styleUrl: './enseignants-list.component.css'
})

export class EnseignantsListComponent implements OnInit {
    enseignants: Enseignant[] = [];

    constructor(
        private enseignantService: EnseignantsServicesService,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadEnseignants();
    }

    loadEnseignants() {
        this.enseignantService.getEnseignants().subscribe(
            data => this.enseignants = data,
            error => console.error('Erreur lors du chargement des enseignants', error)
        );
    }

    ajouterEnseignant() {
        this.router.navigate(['/enseignants/add']);
    }

    modifierEnseignant(id: number) {
        this.router.navigate(['/enseignants/edit', id]);
    }

    supprimerEnseignant(id: number, nom: string) {
        if (confirm(`Êtes-vous sûr de vouloir supprimer l'enseignant ${nom} ?`)) {
            this.enseignantService.deleteEnseignant(id).subscribe(
                () => {
                    this.loadEnseignants();
                    alert('Enseignant supprimé avec succès');
                },
                error => {
                    console.error('Erreur lors de la suppression', error);
                    alert('Erreur lors de la suppression');
                }
            );
        }
    }
}
