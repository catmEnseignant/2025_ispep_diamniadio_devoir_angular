import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EleveServiceService } from '../../services/eleve/eleve-service.service';

@Component({
  selector: 'app-form-eleve',
  imports: [ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrl: './form-eleve.component.css'
})
export class FormEleveComponent implements OnInit{
  eleveForm:FormGroup;
  eleveEdit : any;
  isEdit : any;

  constructor(private db:FormBuilder, private route:Router, private eleveService:EleveServiceService){
    this.eleveForm = db.group({})
  }

  ngOnInit(): void {
    this.isEdit = localStorage.getItem("edit")
    if(this.isEdit == 1){
      this.eleveEdit = localStorage.getItem("eleve")
      this.eleveEdit = JSON.parse(this.eleveEdit)
      console.log(this.eleveEdit.nom)
      console.log(this.eleveEdit)
      this.eleveForm = this.db.group({
        nom:[this.eleveEdit.nom],
        prenom:[this.eleveEdit.prenom],
        adresse:[this.eleveEdit.adresse],
        telephone:[this.eleveEdit.telephone],
        date_naissance:[this.eleveEdit.date_naissance],
        numero_carte:[this.eleveEdit.numero_carte]
      })
    }else{
      this.eleveForm = this.db.group({
        nom:['', [Validators.required, Validators.min(4)]],
        prenom:['', [Validators.required, Validators.min(4)]],
        adresse:['', [Validators.required]],
        telephone:['', [Validators.required]],
        date_naissance:['', [Validators.required]],
        numero_carte:['', Validators.required]
      })
    }
    console.log(this.isEdit)
  }

  public storeEleve () {
    if(this.isEdit == 1){
      this.eleveService.updateEleves(this.eleveEdit.id, this.eleveForm.value).subscribe(
        (res) => {
          console.log(res)
          return this.route.navigate(['eleves/list-eleve'])
        },
        (er) => console.log(er)
      )
    }else{
      this.eleveService.storeEleves(this.eleveForm.value).subscribe({
        next : (reponse) => {
          console.log(reponse)
          return this.route.navigate(['eleves/list-eleve'])
        },
        error : (er) : void => {
          console.log(er)
        }
      })
    }
  }
}
