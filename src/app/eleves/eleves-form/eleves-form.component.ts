import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ElevesService, Eleve } from '../../services/eleves.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eleves-form',
  templateUrl: './eleves-form.component.html',
  styleUrls: ['./eleves-form.component.css']
})
export class ElevesFormComponent implements OnInit {

  eleveForm!: FormGroup;
  isEditMode = false;
  eleveId?: number;

  constructor(
    private fb: FormBuilder,
    private elevesService: ElevesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eleveForm = this.fb.group({
      numero_carte: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      date_naissance: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.eleveId = +params['id'];
        this.loadEleve(this.eleveId);
      }
    });
  }

  loadEleve(id: number) {
    this.elevesService.getEleve(id).subscribe(eleve => {
      this.eleveForm.patchValue(eleve);
    });
  }

  onSubmit() {
    if (this.eleveForm.invalid) {
      this.eleveForm.markAllAsTouched();
      return;
    }

    const eleveData: Eleve = this.eleveForm.value;

    if (this.isEditMode && this.eleveId) {
      this.elevesService.updateEleve(this.eleveId, eleveData).subscribe(() => {
        this.router.navigate(['/eleves']);
      });
    } else {
      this.elevesService.addEleve(eleveData).subscribe(() => {
        this.router.navigate(['/eleves']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/eleves']);
  }
}
