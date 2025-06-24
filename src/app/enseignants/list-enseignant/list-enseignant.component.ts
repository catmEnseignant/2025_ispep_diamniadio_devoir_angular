import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { EnseignantServiceService } from '../../services/enseignants/enseignant.service';


@Component({
  selector: 'app-liste-enseignant',
  imports: [CommonModule,],
  templateUrl: './list-enseignant.component.html',
  styleUrl: './list-enseignant.component.css'
})
export class ListEnseignantComponent implements OnInit{
   enseignants:any
   nombres_enseignant:number = 0


  constructor(private route:Router,private enseignantService: EnseignantServiceService){
    console.log("constructeurr")
  }
  ngOnInit(){
   this.enseignantService.getEnseignants().subscribe(
      (response) => {
        this.enseignants = response
        console.log(this.enseignants.length)
      },
      (error) => {
        console.log(error )
      },
    )
    //this. nombres_eleve = this.classes.length
    //console.log(this.nombres_eleve) 
    
  }
  editEnseignant(editEnseignant:any){
    console.log(editEnseignant)
    editEnseignant = JSON.stringify(editEnseignant)
    localStorage.setItem("curentEnseignant",editEnseignant)
    localStorage.setItem("editEnseignant","1")
    return this.route.navigate(["/enseignant/form-enseignant"])

  }
  addEnseignant(){
    //console.log("add initialiser")
    localStorage.setItem("editEnseignant","0")
    return this.route.navigate(["/enseignant/form-enseignant"])
  }
  deleteEnseignant(enseignant:any){
    let sup = confirm("Voulez vous suprimer")
    if (sup){
      this.enseignantService.deleteEnseignants(enseignant.id).subscribe(
        (response) => {
          alert("enseignant bien supprimer")
         
        },
        (error) => {
          console.log(error )
        },
      )
    }
    console.log(enseignant)
  }
}
