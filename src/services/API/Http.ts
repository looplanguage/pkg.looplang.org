import axios from "axios";

interface Headers{
    [name: string]: string
}

export class Http{
    url:string

    body:any

    method:string

    headers:Headers

    constructor(url:string, body:any, method:string , headers:Headers) {
        this.url = url;
        this.body = body;
        this.method = method;
        this.headers = headers;
    }

    public send() : Promise<any>{
        this.headers["Content-Type"] = 'application/json';

        const body = null;
        const url = this.url;

        if (this.method.toUpperCase() === "GET"){
            // this.url = "";
            const queryString = Object.keys(this.body).map(key => key + '=' + this.body[key]).join('&');
            this.url += "?" + queryString
            this.body = null;
        } else {
            this.body = JSON.stringify(this.body);
        }

        return fetch(this.url, {
            method: this.method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: this.headers,
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: this.body // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .catch(function (error){
                //TODO Alert user
                return error
            });
    }

}