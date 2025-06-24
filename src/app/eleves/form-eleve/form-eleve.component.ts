import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';



import { Router } from '@angular/router'; 
import { EleveServiceService } from '../../services/eleves/eleve.service';


@Component({
  selector: 'app-form-eleve',
  imports: [ReactiveFormsModule],
  templateUrl: './form-eleve.component.html',
  styleUrl: './form-eleve.component.css'
})
export class FormEleveComponent implements OnInit {
  
  eleveform:FormGroup
  elevedit:any
  isedit:any
  

  constructor(private fb:FormBuilder, private eleveService: EleveServiceService, private route:Router){
    this.eleveform= this.fb.group({})
    
  }
  ngOnInit(): void{
    this.isedit = localStorage.getItem("editEleve")
    if(this.isedit == 1){
      this.elevedit = localStorage.getItem('curentEleve')
      this.elevedit=JSON.parse(this.elevedit)
      console.log(this.elevedit.nom)
      console.log(this.elevedit)
      this.eleveform= this.fb.group({
        numero_carte:[this.elevedit.numero_carte],
        prenom:[this.elevedit.prenom],
        nom:[this.elevedit.nom],
        adresse:[this.elevedit.adresse],
        telephone:[this.elevedit.telephone],
        	date_naissance:[this.elevedit.date_naissance],
      })
    }
    else{
      this.eleveform= this.fb.group({
        numero_carte:[''],
        prenom:[''],
        nom:[''],
        adresse:[''],
        telephone:[''],
        date_naissance:[''],
      })
      
    }
    console.log(this.isedit)  

  }
 
  submitEleve(){
    if(this.isedit == 1){
    this.eleveService.updateEleves(this.elevedit.id,this.eleveform.value).subscribe(
      (response) => {
        return this.route.navigate(["/eleve/form-eleve"])
      },
      (error) =>{
        console.log(error)
      }
    )
    }else{
      this.eleveService.storeEleves(this.eleveform.value).subscribe(
        (response) => {
          return this.route.navigate(["/eleves/form-eleve"])
        },
        (error) =>{
          console.log(error)
        }
      )
    
    }
  }  
}

