import { Component, OnInit } from "@angular/core";
import { MdDialogRef, MdSnackBar } from "@angular/material";

@Component({
    selector: 'preferences-dialog',
    templateUrl: './preferences.component.html'
})
export class PreferencesDialog implements OnInit{
    settings: Settings;
    constructor(private dialogRef: MdDialogRef<PreferencesDialog>, private snackbar: MdSnackBar){}
    cancel() {
        this.snackbar.open('Preferences not saved', null, {duration: 6000});
    }
    close() {
        window.localStorage.setItem('settings', JSON.stringify(this.settings));
        this.dialogRef.close();
        let snackbarRef = this.snackbar.open('Preferences saved', 'Reload', {duration: 7000});
        snackbarRef.onAction().subscribe(()=> {
            location.reload(true);
        })
    }
    ngOnInit(){
        if (window.localStorage.getItem('settings')) {
            this.settings = JSON.parse(window.localStorage.getItem('settings'));
        } else {
        this.settings = {
            themeToggle: true,
            codeSpaceIndent: 4,
            codeTabIndent: 1
        }
        }
    }
}
export interface Settings {
    themeToggle: boolean;
    codeSpaceIndent?: number | any;
    enableTabIndent?: boolean;
    codeTabIndent?: number | any;
}