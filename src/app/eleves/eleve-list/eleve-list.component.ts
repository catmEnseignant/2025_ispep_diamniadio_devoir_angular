
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EleveService } from '../../services/eleve.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eleve-list',
  imports: [CommonModule],
  templateUrl: './eleve-list.component.html',
  styleUrl: './eleve-list.component.css'
})
export class ListEleveComponent implements OnInit {
   eleves:any
   telephone:number = 0

  constructor(private route:Router,private eleveService: EleveService){
    console.log("constructor")
  }

  ngOnInit() {
    this.eleveService.getEleve().subscribe(
      (response) =>{
        this.eleves= response
        console.log(this.eleves.length)
      },

      (error)=> {
        console.log(error)
      },
  )
    //this.nbreClass = this.classes.length
    //console.log(this.nbreClass)
  }
  editEleve(editEleve:any){
    console.log(editEleve)
    editEleve= JSON.stringify(editEleve)
    console.log(editEleve)
    localStorage.setItem("curentEleve", editEleve)
    localStorage.setItem("editEleve", "1")
    return this.route.navigate(["eleves/form-eleve"])
  }

  addEleve(){
    //console.log("add initialiser")
    localStorage.setItem("editEleve", "0")
    return this.route.navigate(["/eleves/form-eleve"])
    //console.log("addClasse")
  }
  deleteEleve(eleve:any){
    let sup = confirm("Voulez vous supprimer")
    if(sup){
   this.eleveService.deleteEleve(eleve.id).subscribe(
      (response) =>{
        alert("eleve bien supprimer")

      },

      (error)=> {
        console.log(error)
      },
  )
  }
    console.log(eleve)
  }






}
