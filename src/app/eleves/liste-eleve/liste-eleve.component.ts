import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { ElevesService } from '../../services/eleves/eleve.service';


@Component({
  selector: 'app-liste-eleve',
  imports: [CommonModule,],
  templateUrl: './liste-eleve.component.html',
  styleUrl: './liste-eleve.component.css'
  
})
export class ListeEleveComponent implements OnInit{
    eleves:any
   nombres_eleve:number = 0


  constructor(private route:Router,private eleveService: ElevesService){
    console.log("constructeurr")
  }
  ngOnInit(){
   this.eleveService.getEleves().subscribe(
      (response) => {
        this.eleves = response
        console.log(this.eleves.length)
      },
      (error) => {
        console.log(error )
      },
    )
    //this. nombres_eleve = this.classes.length
    //console.log(this.nombres_eleve) 
    
  }
  editEleve(editEleve:any){
    console.log(editEleve)
    editEleve = JSON.stringify(editEleve)
    localStorage.setItem("curentEleve",editEleve)
    localStorage.setItem("editEleve","1")
    return this.route.navigate(["/eleves/form-eleve"])

  }
  addEleve(){
    //console.log("add initialiser")
    localStorage.setItem("editClasse","0")
    return this.route.navigate(["/eleves/form-eleve"])
  }
  deleteEleve(eleve:any){
    let sup = confirm("Voulez vous suprimer")
    if (sup){
      this.eleveService.deleteEleves(eleve.id).subscribe(
        (response) => {
          alert("classe bien supprimer")
         
        },
        (error) => {
          console.log(error )
        },
      )
    }
    console.log(eleve)
  }
}
