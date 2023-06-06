import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calcul1',
  templateUrl: './calcul1.component.html',
  styleUrls: ['./calcul1.component.css']
})
export class Calcul1Component {
  title = 'scorecalculator';
  public form:  FormGroup; 
  public form2:  FormGroup; 
  show:boolean=false;
scorea;
scoree;
scoreg;
M;
n;

Mg;
Ri;
ri;

R;
B1;
B2;
ML;
constructor(private fb: FormBuilder
  , public toastr: ToastrService,
 
  ) { }



  ngOnInit(): void {
    this.scorea=0;
    this.form = this.fb.group({
      annne_naissance : [, [Validators.required]],
      moybac: [, [Validators.required]],
      moy1ere: [, [Validators.required]],
      rang1ere: [, [Validators.required]],
      effect1ere: [, [Validators.required]],
      moy2eme: [, [Validators.required]],
      rang2eme: [, [Validators.required]],
      effect2eme: [, [Validators.required]],
     

    });
    this.form2 = this.fb.group({
      scoree: [, [Validators.required]],
      moyfr1: [, [Validators.required]],
      moyfr2: [, [Validators.required]],
      moyeng1: [, [Validators.required]],
      moyeng2: [, [Validators.required]],
   


    });

    
  }



  onSubmit(){
    if(this.form.invalid ||this.form2.invalid ){
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
    this.form2.reset();
}


 calculscore() {
  this.scorea=0;
  this.scoree=0;
  this.scoreg=0;
  this.M=0;
  this.n=0;
  this.Mg=0;
  this.Ri=0;
  this.ri=0;
  this.R=0;
  this.B1=0;
  this.B2=0;
  this.ML=0;

  if(this.form.value.annne_naissance=="2002" || this.form.value.annne_naissance=="2001")
  {
    this.B1=5;
  }

 if(this.form.value.moybac >=16 )
  this.B2=20;
  else if (this.form.value.moybac >=14 )
  this.B2=15;
  else if (this.form.value.moybac >=12 )
  this.B2=10;
  else if (this.form.value.moybac >=11 )
  this.B2=5;
  this.Mg=(this.form.value.moy1ere+this.form.value.moy2eme)/2;

  if(this.Mg >=15 )
  this.M=100;
  else if (this.Mg >10 )
  this.M=20*(this.Mg-10);

  
  this.ri=(this.form.value.rang1ere-1)/this.form.value.effect1ere;
  if(this.ri<=0.3)
  this.Ri=100-(700*this.ri)/3;

  this.ri=(this.form.value.rang2eme-1)/this.form.value.effect2eme;
  if(this.ri<=0.3)
  this.Ri+=100-(700*this.ri)/3;

  this.R=0.5*this.Ri
  this.ML=((this.form2.value.moyfr1+this.form2.value.moyfr2)+ (this.form2.value.moyeng1+this.form2.value.moyeng2))/4;
  this.scorea= (this.M*0.2)+((1.4/3)*this.R)+((5/6)*this.ML)+((2/3)*(this.B1+this.B2));
  this.scoree=this.form2.value.scoree;

  this.scoreg=(this.scorea*0.7+this.scoree*0.3);
  this.show=true;
  let str1="Score A:"+this.scorea.toFixed(2)+" | Score global:"+this.scoreg.toFixed(2)
  this.toastr.info(str1);
}

resetthings(){
  
  this.show=false;
  location.reload();

}
}
