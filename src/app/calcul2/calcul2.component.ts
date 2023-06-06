import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calcul2',
  templateUrl: './calcul2.component.html',
  styleUrls: ['./calcul2.component.css']
})
export class Calcul2Component {
  title = 'scorecalculator';
  public form:  FormGroup; 
  public form2:  FormGroup; 
  show:boolean=false;
C;
scoreg;
M;

Mg;

B1;
B2;
constructor(private fb: FormBuilder
  , public toastr: ToastrService,
 
  ) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      annne_naissance : [, [Validators.required]],
      moybac: [, [Validators.required]],
      moy1ere: [, [Validators.required]],
      moy2eme: [, [Validators.required]],
      moym1: [, [Validators.required]],
      redoublant: [, [Validators.required]],
     

    });
   

    
  }



  onSubmit(){
    if(this.form.invalid){
      this.show=false;
      this.toastr.warning( 'veuillez-vous vérifier votre information'); 
    }
    else 
    {
     
      this.calculscore()

    }
  }
  ResetForm() {
    this.form.reset();
}


 calculscore() {
 
  this.scoreg=0;
  this.M=0;
  this.C=0;

  this.Mg=0;

  this.B1=0;
  this.B2=0;

  if(this.form.value.annne_naissance=="2000" || this.form.value.annne_naissance=="1999")
  {
    this.B1=5;
  }

  if(this.form.value.redoublant=="non")
  {
    this.C=1;
  }
  if(this.form.value.redoublant=="oui")
  {
    this.C=0.8;
  }


 if(this.form.value.moybac >=16 )
  this.B2=20;
  else if (this.form.value.moybac >=14 )
  this.B2=15;
  else if (this.form.value.moybac >=12 )
  this.B2=10;
  else if (this.form.value.moybac >=11 )
  this.B2=5;
  this.Mg=(this.form.value.moy1ere+this.form.value.moy2eme+this.form.value.moym1)/3;

  if(this.Mg >=15 )
  this.M=100;
  else if (this.Mg >10 )
  this.M=20*(this.Mg-10);

  

 

  this.scoreg=this.C*(this.M+this.B1+this.B2);
  this.show=true;
}

resetthings(){
  
  this.show=false;
  location.reload();

}
}
