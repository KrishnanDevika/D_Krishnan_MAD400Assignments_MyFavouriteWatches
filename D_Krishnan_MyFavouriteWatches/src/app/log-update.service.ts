import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private snackbar : MatSnackBar) { }

  public init() {
    this.updates.versionUpdates.subscribe(event => {
      console.log("Version event fired");
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${event.currentVersion.hash}`);
          console.log(`New app version ready for use: ${event.latestVersion.hash}`);
          let snackBarRef = this.snackbar.open("An update is available!", "Apply the update");
          snackBarRef.onAction().subscribe(() => {
            this.updates.activateUpdate().then(() => document.location.reload());
          });
       
      }
    });
  }
}
