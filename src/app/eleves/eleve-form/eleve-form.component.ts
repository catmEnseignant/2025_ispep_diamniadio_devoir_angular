
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EleveService } from '../../services/eleve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-eleve',
  imports: [ReactiveFormsModule],
  templateUrl: './eleve-form.component.html',
  styleUrl: './eleve-form.component.css'
})
export class FormEleveComponent implements OnInit {
  eleveform:FormGroup
   Eleveedit:any
   isedit:any

  constructor(private fb:FormBuilder, private eleveService: EleveService, private route:Router){
    this.eleveform= this.fb.group({})

  }
  ngOnInit(): void {

    this.isedit=localStorage.getItem("editEleve")
    if (this.isedit == 1 ){
       this.Eleveedit = localStorage.getItem("curentEleve")
       this.Eleveedit=JSON.parse(this.Eleveedit)
      console.log(this.Eleveedit.nom)
      console.log(this.Eleveedit)

       this.eleveform = this.fb.group({
           numero_carte:[this.Eleveedit.matricule],
           prenom:[this.Eleveedit.prenom],
           nom:[this.Eleveedit.nom],
           telephone:[this.Eleveedit. telephone],
           adresse:[this.Eleveedit. adresse],
           date_naissance:[this.Eleveedit. date_naissance]

    })
    
    }
    else{
       this.eleveform = this.fb.group({
       numero_carte:[''],
       prenom:[''],
       nom:[''],
       telephone:[''],
       adresse:[''],
       date_naissance:['']
    })

    }
    console.log(this.isedit)
  }
  submitEleve(){
    if(this.isedit == 1){
    this.eleveService.updateEleve(this.Eleveedit.id,this.eleveform.value).subscribe(
      (response) => {
        return this.route.navigate(["/eleves/list-eleves"]);
      },
      (error) =>{
        console.log(error)
      }
    )

  }
  else{
    this.eleveService.storeEleve(this.eleveform.value).subscribe(
      (response) => {
        return this.route.navigate(["/eleves/eleves-list"]);
      },
      (error) =>{
        console.log(error)
      }
    )
  }

 }
}
