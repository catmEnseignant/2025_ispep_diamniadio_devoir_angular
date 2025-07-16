import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from '../../services/eleves/eleves-services.service';


@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {

  eleveform!: FormGroup;
  eleveEdit: any = null;
  isEdit: string | null = null;

  constructor(
    private fb: FormBuilder,
    private eleveService: ElevesService,
    private route: Router
  ) {
    this.eleveform = this.fb.group({});
  }

  ngOnInit(): void {
    this.isEdit = localStorage.getItem('editEleve');
    if (this.isEdit === '1') {
      const eleveData = localStorage.getItem('curentEleve') || localStorage.getItem('saloum'); // Vérifie la clé correcte ici
      if (eleveData) {
        this.eleveEdit = JSON.parse(eleveData);
        console.log(this.eleveEdit.nom);

        this.eleveform = this.fb.group({
          Numero_cart: [this.eleveEdit.Numero_cart || ''],
          Prenom: [this.eleveEdit.Prenom || ''],
          Nom: [this.eleveEdit.Nom || ''],
          Adresse: [this.eleveEdit.Adresse || ''],
          Telephone: [this.eleveEdit.Telephone || ''],
          Date_naissance: [this.eleveEdit.Date_naissance || '']
        });
      }
    } else {
      this.eleveform = this.fb.group({
        Numero_cart: [''],
        Prenom: [''],
        Nom: [''],
        Adresse: [''],
        Telephone: [''],
        Date_naissance: ['']
      });
    }

    console.log('isEdit:', this.isEdit);
  }

  public submitEleve(): void {
    console.log(this.eleveform.value, this.eleveEdit);

    if (this.isEdit === '1' && this.eleveEdit && this.eleveEdit.id) {
      this.eleveService.editEleve(this.eleveEdit.id, this.eleveform.value).subscribe({
        next: (res:any) => {
          this.route.navigate(['eleves/list-eleve']);
        },
        error: (error:any) => {
          console.error(error);
        }
      });
    } else {
      this.eleveService.addEleve(this.eleveform.value).subscribe({
        next: (res:any) => {
          this.route.navigate(['eleves/list-eleve']);
        },
        error: (error:any) => {
          console.error(error);
        }
      });
    }
  }

}
