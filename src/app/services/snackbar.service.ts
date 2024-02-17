import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  notImplemented() {
    this.snackbar.open('Not implemented', 'OK', {duration: 2000, panelClass: 'snack'});
  }

  error(message: string) {
    this.snackbar.open(message, 'OK', {duration: 15000, panelClass: ['snack', 'warn']});
  }
}
