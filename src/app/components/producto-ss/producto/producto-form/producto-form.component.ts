import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombreVendedor: ['', Validators.required],
      nombreMarca: ['', Validators.required],
      nombreProducto: ['', Validators.required],
      productoDescrip: ['', Validators.required],
      maxEdad: ['', Validators.required],
      minEdad: ['', Validators.required],
      stockTotal: ['', Validators.required],
      productoPrecio: ['', Validators.required]
  });

  }

  get form() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
