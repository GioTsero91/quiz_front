import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Params} from 'src/environments/params';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) {
    }

    public startQuiz(): Observable<object> {
        return this.httpCall(`${Params.API_URL}/quiz`);
    }

    public sendAnswer(answer: number): Observable<object> {
        return this.httpCall(`${Params.API_URL}/quiz/answer/${answer}`);
    }

    public changeMode(mode: string): Observable<object> {
        return this.httpCall(`${Params.API_URL}/quiz/mode/${mode}`);
    }

    public restartQuiz(): Observable<object> {
        return this.httpCall(`${Params.API_URL}/quiz/restart`);
    }

    private httpCall(url: string): Observable<object> {
        return this.httpClient.get(url, {withCredentials: true});
    }
}
