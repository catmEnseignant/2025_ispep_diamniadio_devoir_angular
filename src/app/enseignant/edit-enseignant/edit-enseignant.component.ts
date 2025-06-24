import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ElevesService} from "../../servicec/eleves.service";

@Component({
  selector: 'app-edit-enseignant',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './edit-enseignant.component.html',
  styleUrl: './edit-enseignant.component.css'
})
export class EditEnseignantComponent implements OnInit{
  enForm:FormGroup
  id:any;
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private se:ElevesService,private router:Router) {
    this.enForm = this.fb.group({prenom:[''], nom:[''], adresse:[''], tel:[''],matricule:['']
    })
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.se.getElevesById(this.id).subscribe(
        (data:any)=>{
          this.enForm =  this.fb.group({
            nom: data.nom, prenom:data.prenom,
            adresse:data.adresse,tel:data.tel,
            date:data.date,numero_cart:data.numero_cart
          })
        }
    )
  }
  editEnseignant(){
    this.se.updatedEleves(this.id,this.enForm.value).subscribe((data)=>{
      this.router.navigate(['eleves'])
    })
  }
}
