export interface Name {
    first : string;
    last : string;
}

export interface Login {
    uuid : string
}

export interface AppUsers {
    name : Name;
    login : Login;
    email : string;
}