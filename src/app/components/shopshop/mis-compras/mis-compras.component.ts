import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito-ss/carrito/carrito.service';
import { MiVenta } from 'src/app/models/shopshop/mi-venta';

// Para el reporte 
import * as JSPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {

  private ventas: MiVenta[];

  constructor(private CS: CarritoService) {
    this.CS.getVentasForCliente().subscribe(
      data => {
        this.ventas = data;
      }
    );
  }

  ngOnInit() {
  }

  imprimir(venta: MiVenta) {
    console.log('Imprimeee');
    const doc = new JSPDF('', 'pt', 'letter'); 

    // Generamos una tabla automaticamente  
    
    doc.cellInitialize();
    let col = 0;

    doc.cell(0, col, 20, 20, '#', col, 'center');
    doc.cell(1, col, 80, 20, 'Cantidad', col, 'center');
    doc.cell(3, col, 120, 20, 'Fecha Ingres', col, 'center');
    doc.cell(4, col, 70, 20, 'Sub I', col, 'center');
    doc.cell(5, col, 70, 20, 'Sub SI', col, 'center');
    doc.cell(6, col, 70, 20, 'Iva', col, 'center');
    doc.cell(7, col, 70, 20, 'Total', col, 'center');
    col = 1;

    this.ventas.forEach(v => {
      doc.cell(0, col, 20, 20, v.id_venta.toString(), col, 'center');
      doc.cell(1, col, 80, 20, v.num_productos.toString(), col, 'center');
      doc.cell(3, col, 120, 20, v.vent_fecha_ingreso.toString().substring(0, 10), col, 'center');
      doc.cell(4, col, 70, 20, v.vent_subtotal_iva.toString(), col, 'center');
      doc.cell(5, col, 70, 20, v.vent_subtotal_sin_iva.toString(), col, 'center');
      doc.cell(6, col, 70, 20, v.vent_total_iva.toString(), col, 'center');
      doc.cell(7, col, 70, 20, v.vent_total.toString(), col, 'center');
      col++;
    });
    doc.output("dataurlnewwindow");
    // doc.save('Venta: ' + venta.vent_fecha_ingreso + '.pdf');
  }

}
