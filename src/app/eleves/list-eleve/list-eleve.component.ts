import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { EleveServiceService } from '../../services/eleves/eleve.service';


@Component({
  selector: 'app-list-eleve',
  imports: [CommonModule,],
  templateUrl: './list-eleve.component.html',
  styleUrl: './list-eleve.component.css'
})
export class ListEleveComponent implements OnInit{
   eleves:any
   nombres_eleves:number = 0


  constructor(private route:Router,private eleveService: EleveServiceService){
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
    return this.route.navigate(["/eleve/form-eleve"])

  }
  addEleve(){
    //console.log("add initialiser")
    localStorage.setItem("editEleve","0")
    return this.route.navigate(["/eleve/form-eleve"])
  }
  deleteEleve(eleve:any){
    let sup = confirm("Voulez vous suprimer")
    if (sup){
      this.eleveService.deleteEleves(eleve.id).subscribe(
        (response) => {
          alert("enseignant bien supprimer")
         
        },
        (error) => {
          console.log(error )
        },
      )
    }
    console.log(eleve)
  }
}
