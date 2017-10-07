import { Observable } from 'rxjs/Observable';
import { Settings, SharedComponent } from './../shared/shared.docs';
import { Component, OnInit, OnChanges } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'preferences-dialog',
    templateUrl: './preferences.docs.html'
})
export class PreferencesDialog implements OnInit, OnChanges{
    settings: Settings;
    constructor(private dialogRef: MatDialogRef<PreferencesDialog>, private snackbar: MatSnackBar, private shared: SharedComponent){}
    cancel() {
        this.snackbar.open('Preferences not saved', null, {duration: 6000, horizontalPosition: "start"});
        this.dialogRef.close();
    }
    close() {
        this.shared.setSettings(this.settings);
        this.dialogRef.close();
        let snackbarRef = this.snackbar.open('Preferences saved', 'Reload', {duration: 7000, horizontalPosition: "start"});
        snackbarRef.onAction().subscribe(()=> {
            location.reload(true);
        })
    }
    ngOnInit(){
        this.settings = this.shared.getSettings();
    }
    ngOnChanges() {
        this.shared.getSettingsObservable().subscribe(result=> {
            console.log(result);
        })
    }
}
