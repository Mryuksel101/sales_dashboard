// models/User.ts

export interface IUser {
    name: string;
    email: string;
    password: string;
    profiePicture?: string;
}

export class User implements IUser {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public profilePicture?: string
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}

