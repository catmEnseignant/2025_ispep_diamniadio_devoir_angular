import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EnseignantService } from '../../services/enseignant.service';

@Component({
  selector: 'app-form-enseignant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit {
  form!: FormGroup;
  mode: 'ajout' | 'modif' = 'ajout';
  enseignantId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private enseignantService: EnseignantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialiser le formulaire
    this.form = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      date_naissance: ['', Validators.required]
    });

    // Récupérer l'ID s'il existe
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam && !isNaN(+idParam)) {
      this.mode = 'modif';
      this.enseignantId = +idParam;

      this.enseignantService.getAll().subscribe(data => {
        const enseignant = data.find(e => e.id === this.enseignantId);
        if (enseignant) {
          this.form.patchValue(enseignant);
        } else {
          alert("Enseignant introuvable");
          this.router.navigate(['/enseignants']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    if (this.mode === 'ajout') {
      this.enseignantService.create(this.form.value).subscribe(() => {
        alert("Enseignant ajouté avec succès !");
        this.router.navigate(['/enseignants']);
      });
    } else if (this.enseignantId !== null) {
      this.enseignantService.update(this.enseignantId, this.form.value).subscribe(() => {
        alert("Enseignant modifié avec succès !");
        this.router.navigate(['/enseignants']);
      });
    }
  }
}
