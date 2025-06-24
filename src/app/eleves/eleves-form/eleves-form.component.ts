import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ElevesServiceService } from '../../services/eleves/eleves-service.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-eleves-form',
  imports: [ReactiveFormsModule],
  templateUrl: './eleves-form.component.html',
  styleUrl: './eleves-form.component.css'
})
export class ElevesFormComponent implements OnInit{

  elevesform:FormGroup

  elevesedit:any
  isedit:any
  

  constructor(private fb:FormBuilder, private elevesService: ElevesServiceService, private route:Router){
    
    this.elevesform= this.fb.group({})
  }
  ngOnInit(): void{
    this.isedit = localStorage.getItem("editEleves")
    if(this.isedit == 1){
      this.elevesedit = localStorage.getItem('curentEleves')
      this.elevesedit=JSON.parse(this.elevesedit)
      console.log(this.elevesedit.nom)
      console.log(this.elevesedit)
      this.elevesform= this.fb.group({
        nom:[this.elevesedit.nom],
        prenom:[this.elevesedit.prenom],
        adresse:[this.elevesedit.adresse],
        date_naissance:[this.elevesedit.date_naissance]
      })
    }
    else{
      this.elevesform= this.fb.group({
        nom:[''],
        prenom:[''],
        adresse:[''],
        date_naissance:['']
      })
      
    }
    console.log(this.isedit)
  }
  submitEleves(){
    if(this.isedit == 1){
      this.elevesService.updateEleves(this.elevesedit.id,this.elevesform.value).subscribe(
        (response) => {
          return this.route.navigate(["/eleves/eleves-list"]);
        },
        (error) =>{
          console.log(error)
        }
      )
    }else{  
        this.elevesService.storeEleves(this.elevesform.value).subscribe(
          (response) => {
            return this.route.navigate(["/eleves/eleves-list"]);
          },
          (error) =>{
            console.log(error)
          }
        )
    }  
    //console.log(this.elevesform.value)
  }

}
