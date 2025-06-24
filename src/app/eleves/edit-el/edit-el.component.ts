import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ElevesService} from "../../servicec/eleves.service";

@Component({
  selector: 'app-edit-el',
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './edit-el.component.html',
  styleUrl: './edit-el.component.css'
})
export class EditElComponent implements OnInit{
  eleveForm:FormGroup
  id:any;
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private se:ElevesService,private router:Router) {
    this.eleveForm = this.fb.group({prenom:[''], nom:[''], adresse:[''], tel:[''], date:[''],
      numero_cart:['']
    })
  }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.se.getElevesById(this.id).subscribe(
        (data:any)=>{
          this.eleveForm =  this.fb.group({
            nom: data.nom, prenom:data.prenom,
            adresse:data.adresse,tel:data.tel,
            date:data.date,matricule:data.matricule
          })
        }
    )
  }
  upEleve(){
    this.se.updatedEleves(this.id,this.eleveForm.value).subscribe((data)=>{
      this.router.navigate(['eleves'])
    })
  }
}
