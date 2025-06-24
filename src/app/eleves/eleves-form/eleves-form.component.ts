import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ElevesServiceService } from '../../services/eleves/eleves-service.service';

@Component({
  selector: 'app-eleves-form',
  standalone: true,                // IMPORTANT : standalone true
  imports: [CommonModule, ReactiveFormsModule],  // Import nécessaires
  templateUrl: './eleves-form.component.html',
  styleUrls: ['./eleves-form.component.css']
})
export class ElevesFormComponent implements OnInit {
  elevesform: FormGroup;
  elevesEdit: any = null;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private elevesService: ElevesServiceService,
    private router: Router
  ) {
    this.elevesform = this.fb.group({
      numero_carte: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse: [''],
      telephone: [''],
      date_naissance: ['']
    });
  }

  ngOnInit(): void {
    const editFlag = localStorage.getItem('editEleve');
    this.isEdit = editFlag === '1';

    if (this.isEdit) {
      const storedData = localStorage.getItem('curentEleve');
      if (storedData) {
        this.elevesEdit = JSON.parse(storedData);
        this.elevesform.patchValue(this.elevesEdit);
      }
    }
  }

  submitEleves(): void {
    if (this.elevesform.invalid) return;

    if (this.isEdit) {
      const id = this.elevesEdit.id;
      this.elevesService.updateEleves(id, this.elevesform.value).subscribe({
        next: () => this.router.navigate(['/eleves/eleves-list']),
        error: (err) => console.error('Erreur update :', err)
      });
    } else {
      this.elevesService.storeEleves(this.elevesform.value).subscribe({
        next: () => this.router.navigate(['/eleves/eleves-list']),
        error: (err) => console.error('Erreur création :', err)
      });
    }
  }
}
