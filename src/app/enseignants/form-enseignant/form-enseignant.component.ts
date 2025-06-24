import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from '../../services/enseignant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-enseignant',
  imports: [
    ReactiveFormsModule,  // <-- Ajouter ici
  ],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit {
  enseignantForm!: FormGroup;
  editMode: boolean = false;
  enseignantId?: number;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec validation
    this.enseignantForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      matiere: ['', Validators.required],
      matricule: ['', Validators.required],
      telephone: [
        '',
        [Validators.required, Validators.pattern(/^\d{8,15}$/)]
      ],
      adresse: ['']
    });

    // Vérifier si on est en mode édition via l'URL (ex: /enseignants/edit/1)
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.editMode = true;
        this.enseignantId = +idParam;
        this.loadEnseignant(this.enseignantId);
      }
    });
  }

  loadEnseignant(id: number): void {
    this.enseignantService.getById(id).subscribe({
      next: (data) => {
        // Remplir le formulaire avec les données existantes
        this.enseignantForm.patchValue({
          nom: data.nom,
          prenom: data.prenom,
          matricule: data.matricule,
          telephone: data.telephone,
          adresse: data.adresse
        });
      },
      error: (err) => {
        console.error('Erreur chargement enseignant', err);
      }
    });
  }

  submitEnseignant(): void {
    if (this.enseignantForm.invalid) {
      this.enseignantForm.markAllAsTouched();
      return;
    }

    if (this.editMode && this.enseignantId) {
      // Mise à jour
      this.enseignantService.update(this.enseignantId, this.enseignantForm.value).subscribe({
        next: () => this.router.navigate(['/enseignants/list']),
        error: err => console.error('Erreur mise à jour', err)
      });
    } else {
      // Création
      this.enseignantService.create(this.enseignantForm.value).subscribe({
        next: () => this.router.navigate(['/enseignants/list']),
        error: err => console.error('Erreur création', err)
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/enseignants/list']);
  }
}
