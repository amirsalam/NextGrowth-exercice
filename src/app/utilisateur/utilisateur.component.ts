import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  userForm = new FormGroup({
    reference: new FormControl(),
    quantity: new FormControl('11')
});

form=new FormGroup({})
  
  stringType = ''

  users   = [
    {
      id:  "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]


  constructor(private formBuilder: FormBuilder) { 
    
  }



  ngOnInit(): void {
    // this.createForm()

    this.userForm = this.formBuilder.group({
      createdDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
      userName:new FormControl('', Validators.required),
      registrationNumber:new FormControl('', Validators.required),
  });

  }

  

  createForm() {
      
    console.log("console :",this.userForm.value)
}

get f() { return this.userForm.controls; }

  enregistrerUser(){
    this.users.forEach( (index) => {
      this.stringType   = Math.floor(Math.random() * 1000000001).toString()
        index.id   = this.stringType 
        index.createdDate = this.userForm.value.createdDate
        index.status = this.userForm.value.status
        index.firstName = this.userForm.value.firstName
        index.lastName = this.userForm.value.lastName
        index.userName = this.userForm.value.userName
        index.registrationNumber = this.userForm.value.registrationNumber
         this.users.push({id:index.id,
          createdDate:index.createdDate,
          status:index.status,
          firstName:index.firstName,
          lastName:index.lastName,
          userName:index.userName,
          registrationNumber:index.registrationNumber})
          
    })
    console.log(this.users)

  

}
}
