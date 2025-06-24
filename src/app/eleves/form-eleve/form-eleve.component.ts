import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EleveService } from '../../services/eleves/eleve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {

  eleveForm: FormGroup;
  isEdit: any;
  eleveEdit: any;

  constructor(
    private fb: FormBuilder,
    private eleveService: EleveService,
    private router: Router
  ) {
    this.eleveForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.isEdit = localStorage.getItem("editEleve");

    if (this.isEdit === '1') {
      this.eleveEdit = JSON.parse(localStorage.getItem("currentEleve") || '{}');
      this.eleveForm = this.fb.group({
        id: [this.eleveEdit.id],
        numero_carte: [this.eleveEdit.numero_carte],
        prenom: [this.eleveEdit.prenom],
        nom: [this.eleveEdit.nom],
        adresse: [this.eleveEdit.adresse],
        telephone: [this.eleveEdit.telephone],
        date_naissance: [this.eleveEdit.date_naissance],
      });
    } else {
      this.eleveForm = this.fb.group({
        numero_carte: [''],
        prenom: [''],
        nom: [''],
        adresse: [''],
        telephone: [''],
        date_naissance: [''],
      });
    }
  }

  submitEleve() {
    if (this.isEdit === '1') {
      this.eleveService.update(this.eleveForm.value.id, this.eleveForm.value).subscribe(
        () => this.router.navigate(["/eleves"]),
        (error) => console.log(error)
      );
    } else {
      this.eleveService.add(this.eleveForm.value).subscribe(
        () => this.router.navigate(["/eleves"]),
        (error) => console.log(error)
      );
    }
  }
}
