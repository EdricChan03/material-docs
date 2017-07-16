import { Observable } from 'rxjs/Observable';
import { Settings, SharedComponent } from './../shared/shared';
import { Component, OnInit, OnChanges } from "@angular/core";
import { MdDialogRef, MdSnackBar } from "@angular/material";

@Component({
    selector: 'preferences-dialog',
    templateUrl: './preferences.component.html'
})
export class PreferencesDialog implements OnInit, OnChanges{
    settings: Settings;
    constructor(private dialogRef: MdDialogRef<PreferencesDialog>, private snackbar: MdSnackBar, private shared: SharedComponent){}
    cancel() {
        this.snackbar.open('Preferences not saved', null, {duration: 6000});
        this.dialogRef.close();
    }
    close() {
        this.shared.setSettings(this.settings);
        this.dialogRef.close();
        let snackbarRef = this.snackbar.open('Preferences saved', 'Reload', {duration: 7000});
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
