import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { EnseignantsServiceService } from '../../services/enseignants/enseignants-service.service';

@Component({
  selector: 'app-enseignants-list',
  imports: [CommonModule,],
  templateUrl: './enseignants-list.component.html',
  styleUrl: './enseignants-list.component.css'
})
export class EnseignantsListComponent implements OnInit{
  enseignants:any
  nombres_eleve:number = 0

  constructor(private route:Router,private enseignantsService: EnseignantsServiceService){
    console.log("constructeurr")
  }

  ngOnInit(){
     this.enseignantsService.getEnseignants().subscribe(
    (response) => {
      this.enseignants = response
      console.log(this.enseignants.length)
    },
    (error) => {
      console.log(error )
    },
  )
    //this. nombres_eleve = this.matieres.length
    //console.log(this.nombres_eleve)
  } 

  editEnseignants(editEnseignants:any){
    console.log(editEnseignants)
    editEnseignants = JSON.stringify(editEnseignants)
    localStorage.setItem("curentEnseignants",editEnseignants)
    localStorage.setItem("editEnseignants","1")
    return this.route.navigate(["/enseignants/enseignants-form"])
  
  }
  addEnseignants(){
    //console.log("add initialiser")
    localStorage.setItem("editEnseignants","0")
    return this.route.navigate(["/enseignants/enseignants-form"])
     
  }
  deleteEnseignants(enseignants:any){
    let sup = confirm("Voulez vous suprimer")
    if (sup){
      this.enseignantsService.deleteEnseignants(enseignants.id).subscribe(
        (response) => {
          alert("matiere bien supprimer")
         
        },
        (error) => {
          console.log(error )
        },
      )
    }
    console.log(enseignants)
  }

}
