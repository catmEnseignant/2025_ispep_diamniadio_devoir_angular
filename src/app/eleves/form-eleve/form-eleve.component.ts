import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {
  eleveForm!: FormGroup;
  modeEdition = false;
  eleveId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router // ✅ Pour naviguer après soumission
  ) {}

  ngOnInit(): void {
    // Création du formulaire avec validation
    this.eleveForm = this.fb.group({
      numero_carte: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      date_naissance: ['', Validators.required]
    });

    // Mode édition si un ID est présent dans l'URL
    this.eleveId = this.route.snapshot.paramMap.get('id');
    if (this.eleveId) {
      this.modeEdition = true;
      console.log('🔧 Mode édition - ID élève :', this.eleveId);

      // ✅ Données simulées — à remplacer par appel à un service
      const eleve = {
        numero_carte: 'C002',
        prenom: 'Awa',
        nom: 'Ndoye',
        adresse: 'Dakar',
        telephone: '78 456 78 90',
        date_naissance: '2007-12-04'
      };

      this.eleveForm.patchValue(eleve);
    }
  }

  onSubmit(): void {
    if (this.eleveForm.valid) {
      if (this.modeEdition) {
        console.log(`🔄 Mise à jour de l'élève #${this.eleveId}`, this.eleveForm.value);
        // TODO: appeler un service de mise à jour ici
      } else {
        console.log('✅ Création d\'un nouvel élève', this.eleveForm.value);
        // TODO: appeler un service de création ici
