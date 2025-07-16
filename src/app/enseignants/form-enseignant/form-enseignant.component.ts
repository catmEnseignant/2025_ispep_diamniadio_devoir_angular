import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


//import { Router } from 'express';
import { Router } from '@angular/router';
import { EnseignantServicesService } from '../../services/enseignants/enseignants-services.service';

@Component({
  selector: 'app-form-enseignant',
  imports: [ReactiveFormsModule],
  templateUrl: './form-enseignant.component.html',
  styleUrl: './form-enseignant.component.css'
})
export class FormEnseignantComponent implements OnInit {
  
  enseignantform:FormGroup
  enseignantdit:any
  isedit:any
  

  constructor(private fb:FormBuilder, private enseignantService: EnseignantServicesService, private route:Router){
    this.enseignantform= this.fb.group({})
    
  }
  ngOnInit(): void{
    this.isedit = localStorage.getItem("editEnseignant")
    if(this.isedit == 1){
      this.enseignantdit = localStorage.getItem('curentEnseignant')
      this.enseignantdit=JSON.parse(this.enseignantdit)
      console.log(this.enseignantdit.nom)
      console.log(this.enseignantdit)
      this.enseignantform= this.fb.group({
        matricule:[this.enseignantdit.matricule],
        prenom:[this.enseignantdit.prenom],
        nom:[this.enseignantdit.nom],
        telephone:[this.enseignantdit.telephone],
        adresse:[this.enseignantdit.adresse],
      })
    }
    else{
      this.enseignantform= this.fb.group({
        matricule:[''],
        prenom:[''],
        nom:[''],
        telephone:[''],
        adresse:[''],
      })
      
    }
    console.log(this.isedit)  

  }
 
  submitEnseignant(){
    if(this.isedit == 1){
    this.enseignantService.updateEnseignants(this.enseignantdit.id,this.enseignantform.value).subscribe(
      (response:any) => {
        return this.route.navigate(["/enseignants/form-enseignant"])
      },
      (error:any) =>{
        console.log(error)
      }
    )
    }else{
      this.enseignantService.storeEnseignants(this.enseignantform.value).subscribe(
        (response:any) => {
          return this.route.navigate(["/enseignants/form-enseignant"])
        },
        (error:any) =>{
          console.log(error)
        }
      )
    
}
}  
}
