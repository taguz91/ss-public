import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto-ss/producto/producto.service';
import { Producto } from 'src/app/models/producto-ss/producto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  idProducto: number;
  palabraReservada: string = "guardarProdudcto";
  producto: Producto;
  guardado: boolean;

  constructor(private formBuilder: FormBuilder,
    private productoService: ProductoService, 
    private router:Router,
    private route: ActivatedRoute) {
    this.guardado = false;

    this.idProducto = this.route.snapshot.params.idProducto || this.palabraReservada;
    

    this.productoService.getProductoById(this.idProducto).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombreUnidad: ['', Validators.required],
      nombreMarca: ['', Validators.required],
      nombreProducto: ['', Validators.required],
      productoDescrip: ['', Validators.required],
      maxEdad: ['', Validators.required],
      minEdad: ['', Validators.required],
      stockTotal: ['', Validators.required],
      productoPrecio: ['', Validators.required],
      nombreLinea: ['', Validators.required]
    });

    this.producto

    // this.producto = this.productoService.getProductoById(this.idProducto) || {
    //   vendedor: '',
    //   //Objeto de la clase Marcas
    //   marcas: '',
    //   prod_nombre: '',
    //   prod_fecha_ingreso: null,
    //   prod_stock_total: 0,
    //   prod_precio_venta: 0,
    //   prod_descripcion: '',
    //   prod_restriccion_edad_max: 0,
    //   prod_restriccion_edad_min: 0,
    //   prod_activo: true
    // };

  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {

    console.log(this.producto);

    this.submitted = true;

    if (this.registerForm.invalid) {
      this.producto.prod_fecha_ingreso = new Date();
      if(this.productoService.guardarProducto(this.producto) != null){
        this.guardado = true;
        setTimeout(() => {
          this.guardado = false;
        }, 4000);
        this.router.navigate(["productos/lista"]);
      } else{
        alert("No se pudo guardar el Producto");
      }
      
      
    }

   
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
