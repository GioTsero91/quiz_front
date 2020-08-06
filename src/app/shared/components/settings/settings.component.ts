import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../core/contants';
import {ApiService} from '../../../core/services/api/api.service';
import {animation} from '../../animations/animation';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    animations: animation
})
export class SettingsComponent implements OnInit {
    constants = Constants;
    dataLoaded = false;
    settingData: object;
    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.startQuiz().toPromise().then(
            response => {
                this.settingData = response;
                this.dataLoaded = true;
            }
        );
    }

    setMode(mode: string): void {
        this.dataLoaded = false;
        this.apiService.changeMode(mode).toPromise().then(
            response => {
                this.settingData = response;
                this.dataLoaded = true;
            }
        );
    }
}
