export class User {
    id:number;
    email:string;
    username:string;
    password: string;
    usertype: string;
    constructor(){
        this.id = 0;
        this.email = '';
        this.username = '';
        this.password = '';
        this.usertype = '';
    }
    // constructor(id:number, email:string, username:string, password:string){
    //     this.id = id;
    //     this.email = email;
    //     this.username = username;
    //     this.password = password;
    // }
}
