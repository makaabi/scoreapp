import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-calculinsat',
  templateUrl: './calculinsat.component.html',
  styleUrls: ['./calculinsat.component.css']
})
export class CalculinsatComponent {
  title = 'scorecalculator';
  public form:  FormGroup; 
scoreg;
M;
Mg;

B1;
B2;
R1;
R2;
R3;

ri;

R;
constructor(private fb: FormBuilder
  , public toastr: ToastrService,
 
  ) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      annne_naissance : [, [Validators.required]],
      moybac: [, [Validators.required]],
      moy1ere: [, [Validators.required]],
      moy2eme: [, [Validators.required]],
      moy3eme: [, [Validators.required]],
      rang1ere: [, [Validators.required]],
      rang2eme: [, [Validators.required]],
      rang3eme: [, [Validators.required]],
      eff1ere: [, [Validators.required]],
      eff2eme: [, [Validators.required]],
      eff3eme: [, [Validators.required]],
     

    });
   

    
  }



  onSubmit(){
    if(this.form.invalid){
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

  this.Mg=0;
  this.R1=0;
  this.R2=0;
  this.R3=0;

  this.ri=0;
  this.R=0;
  this.B1=0;
  this.B2=0;

  if(this.form.value.annne_naissance=="2003" || this.form.value.annne_naissance=="2002")
  {
    this.B1=5;
  }

 

 if(this.form.value.moybac >=15 )
  this.B2=10;

  else if (this.form.value.moybac >=14 )
  this.B2=7;
  else if (this.form.value.moybac >=13 )
  this.B2=5;
  else if (this.form.value.moybac <13)
  this.B2=0;

  console.log(this.form.value)

  this.Mg=(this.form.value.moy1ere+(this.form.value.moy2eme)*2+this.form.value.moy3eme)/4;
  console.log(this.Mg)

  if(this.Mg >=15 )
  this.M=100;
  else if (this.Mg >10 )
  this.M=20*(this.Mg-10);

  this.ri=(this.form.value.rang1ere-1)/this.form.value.eff1ere;
  if(this.ri<=0.3)
    this.R1=100-(700*this.ri)/3;

  this.ri=(this.form.value.rang2eme-1)/this.form.value.eff2eme;
  if(this.ri<=0.3)
  this.R2=100-(700*this.ri)/3;

  this.ri=(this.form.value.rang3eme-1)/this.form.value.eff3eme;
  if(this.ri<=0.3)
    this.R3=100-(700*this.ri)/3;

  this.R = (this.R1 + this.R2 + this.R3)/3
  this.scoreg=this.M*0.5+this.R*0.5+this.B1+this.B2;
  let str1="Score:"+this.scoreg.toFixed(2);
  this.toastr.info(str1);
}

resetthings(){
  
  location.reload();

}
}
