import { EleveServicesService } from '../../services/eleve/eleve-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-classe',
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class FormClasseComponent implements OnInit {
  eleveForm!: FormGroup;
  eleveEdit: any;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveServicesService,

    private route: Router
  ) {}

  ngOnInit(): void {
    const isEditValue = localStorage.getItem("editEleve");
    this.isEdit = isEditValue === "1";

    if (this.isEdit) {
      const eleveData = localStorage.getItem("curentEleve");
      if (eleveData) {
        this.eleveEdit = JSON.parse(eleveData);
        console.log(this.eleveEdit);

        this.eleveForm = this.fb.group({
          numero_carte: [this.eleveEdit.numero_carte || '', Validators.required],
          prenom: [this.eleveEdit.prenom || '', Validators.required],
          nom: [this.eleveEdit.nom || '', Validators.required],
          adresse: [this.eleveEdit.adresse || '', Validators.required],
          telephone: [this.eleveEdit.telephone || '', Validators.required],
          date_naissance: [this.eleveEdit.date_naissance || '', Validators.required]
        });
      }
    } else {
      this.eleveForm = this.fb.group({
        numero_carte: ['', Validators.required],
        prenom: ['', Validators.required],
        nom: ['', Validators.required],
        adresse: ['', Validators.required],
        telephone: ['', Validators.required],
        date_naissance: ['', Validators.required]
      });
    }

    console.log('isEdit:', this.isEdit);
  }

  public submitClasse(): void {
    console.log(this.eleveForm.value, this.eleveEdit);

    if (this.isEdit && this.eleveEdit?.id) {
      this.eleveService.updateEleve(this.eleveEdit.id, this.eleveForm.value).subscribe({
        next: (res) => {
          this.route.navigate(["enseignant/list-eleves"]);
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      this.eleveService.storeEleve(this.eleveForm.value).subscribe({
        next: (_res: any) => {
        this.route.navigate(["enseignant/list-eleves"]);
      }
       error: (error: any) => {
        console.error(error);
      }
      });
    }
  }
}

