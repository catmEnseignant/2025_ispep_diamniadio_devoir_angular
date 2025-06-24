
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../../services/enseignant.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enseignant-list',
  imports: [CommonModule],
  templateUrl: './enseignant-list.component.html',
  styleUrl: './enseignant-list.component.css'
})
export class ListEnseignantComponent implements OnInit {
   enseignants:any
   telephone:number = 0

  constructor(private route:Router,private enseignantService: EnseignantService){
    console.log("constructor")
  }

  ngOnInit() {
    this.enseignantService.getEnseignant().subscribe(
      (response) =>{
        this.enseignants = response
        console.log(this.enseignants.length)
      },

      (error)=> {
        console.log(error)
      },
  )
    //this.nbreClass = this.classes.length
    //console.log(this.nbreClass)
  }
  editEnseignant(editEnseignant:any){
    console.log(editEnseignant)
    editEnseignant = JSON.stringify(editEnseignant)
    console.log(editEnseignant)
    localStorage.setItem("curentEnseignant", editEnseignant)
    localStorage.setItem("editEnseignant", "1")
    return this.route.navigate(["enseignants/form-enseignant"])
  }

  addEnseignant(){
    //console.log("add initialiser")
    localStorage.setItem("editEnseignant", "0")
    return this.route.navigate(["/enseignants/form-enseignant"])
    //console.log("addClasse")
  }
  deleteEnseignant(enseignant:any){
    let sup = confirm("Voulez vous supprimer")
    if(sup){
   this.enseignantService.deleteEnseignant(enseignant.id).subscribe(
      (response) =>{
        alert("enseignant bien supprimer")

      },

      (error)=> {
        console.log(error)
      },
  )
  }
    console.log(enseignant)
  }






}
