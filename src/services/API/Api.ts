import {Http} from "./Http";
export class Api{

    username:string;
    password:string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }


    public async request(endpoint = "/todos/1", method ="GET",body = {}){
        const http = new Http("http://jsonplaceholder.typicode.com" + endpoint, body, method, {
            "X-USER" : this.username,
            "X-Pass" : this.password
        });
        return http.send();
    }


}