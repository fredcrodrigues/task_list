import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login-tarefas.component.html',
  styleUrls: ['./login-tarefas.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm()

  }

  criarForm(){

    this.formulario = this.formBuilder.group({
      email:[''],
      senha:['']
    });

  }


}
