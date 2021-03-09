import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from "../services/restaurant.service";


@Component({
  selector: 'app-modal-component',
  template: `
    <h3 mat-dialog-title>Supprimer {{ data.name }}</h3>
    <div mat-dialog-content>
      Etes-vous bien sûr de vouloir supprimer {{ data.name }} ?
    </div>
    <br />
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Non merci</button>
      <button mat-button (click)="delete()">Oui, supprimer</button>
    </div>
  `,
})
export class ModalComponent {
  constructor(private rs: RestaurantService, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data ) {}

  onNoClick() {
    this.dialogRef.close('nope');
  }

  async delete() {
    await this.rs.deleteRestaurant(this.data);
    this.dialogRef.close('delete soon');
    console.log('restau from dialog', this.data);
  }
}
