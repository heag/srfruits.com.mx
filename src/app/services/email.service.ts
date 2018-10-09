import { Http, Headers } from '@angular/http'
import { Inject } from '@angular/core'
import { IEnvironment, ENVIRONMENT } from '../../environments/common';
import { EmailData } from '../index';
import { Observable } from 'rxjs';

export class EmailRestService {

constructor(private httpClient: Http,
            @Inject(ENVIRONMENT) private environment: IEnvironment){
            }


public sendEmail(emailData: EmailData){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    const url = this.environment.configuration.api.emailSenderUrl
    return this.httpClient.post(url, emailData, { headers: headers}).subscribe(
        res => {
            //manage result
        }
    );
}

}