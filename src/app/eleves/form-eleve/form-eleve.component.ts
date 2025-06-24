/*import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ElevesService } from '../../services/eleves/eleve.service';



@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {

  eleveform!: FormGroup;  // le point d'exclamation évite l'erreur "variable potentiellement non initialisée"
  eleveEdit: any;
  isedit: string | null = null;

  constructor(
    private fb: FormBuilder, 
    private eleveService: ElevesService, 
    private route: Router
  ) {}

  ngOnInit(): void {
    this.isedit = localStorage.getItem("editClasse");

    if (this.isedit === "1") {
      const eleveData = localStorage.getItem('curentClasse');
      if (eleveData) {
        this.eleveEdit = JSON.parse(eleveData);
        this.eleveform = this.fb.group({
          numero_carte: [this.eleveEdit.numero_carte || ''],
          nom: [this.eleveEdit.nom || ''],
          prenom: [this.eleveEdit.prenom || ''],
          telephone: [this.eleveEdit.telephone || ''],
          Adresse: [this.eleveEdit.Adresse || ''],
          date_naissance: [this.eleveEdit.date_naissance || ''],
          
          nombres_eleve: [this.eleveEdit.nombres_eleve || '']
  
        });
      } else {
        this.initFormVide();
      }
    } else {
      this.initFormVide();
    }
  }

  private initFormVide() {
    this.eleveform = this.fb.group({
      numero_carte: [''],
     
      prenom: [''],
      nom: [''],
      telephone: [''],
      Adresse: [''],
      nombres_eleve: [''],
      date_naissance: ['']
    });
  }

  submitEleve() {
    if (this.isedit === "1" && this.eleveEdit?.id) {
      this.eleveService.updateEleves(this.eleveEdit.id, this.eleveform.value).subscribe({
        next: () => this.route.navigate(['/eleves/liste-eleve']),
        error: (err) => console.error(err)
      });
    } else {
      this.eleveService.storeEleves(this.eleveform.value).subscribe({
        next: () => this.route.navigate(['/eleves/liste-eleve']),
        error: (err) => console.error(err)
      });
    }
  }
}*/




import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from '../../services/eleves/eleve.service';

@Component({
  selector: 'app-form-eleve',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrls: ['./form-eleve.component.css']
})
export class FormEleveComponent implements OnInit {
  eleveform!: FormGroup;
  eleveEdit: any;
  isedit: string | null = null;

  constructor(
    private fb: FormBuilder,
    private eleveService: ElevesService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.isedit = localStorage.getItem("editEleve");
    if (this.isedit === "1") {
      const eleveData = localStorage.getItem('curentEleve');
      if (eleveData) {
        this.eleveEdit = JSON.parse(eleveData);
        this.eleveform = this.fb.group({
          numero_carte: [this.eleveEdit.numero_carte],
          nom: [this.eleveEdit.nom],
          prenom: [this.eleveEdit.prenom],
          telephone: [this.eleveEdit.telephone],
          Adresse: [this.eleveEdit.Adresse],
          date_naissance: [this.eleveEdit.date_naissance]
        });
      } else {
        this.initFormVide();
      }
    } else {
      this.initFormVide();
    }
  }

  private initFormVide() {
    this.eleveform = this.fb.group({
      numero_carte: [''],
      nom: [''],
      prenom: [''],
      telephone: [''],
      Adresse: [''],
      date_naissance: ['']
    });
  }

  submitEleve() {
    if (this.isedit === "1" && this.eleveEdit?.id) {
      this.eleveService.updateEleves(this.eleveEdit.id, this.eleveform.value).subscribe({
        next: () => this.route.navigate(['/eleves/liste-eleve']),
        error: (err) => console.error(err)
      });
    } else {
      this.eleveService.storeEleves(this.eleveform.value).subscribe({
        next: () => this.route.navigate(['/eleves/liste-eleve']),
        error: (err) => console.error(err)
      });
    }
  }
}
