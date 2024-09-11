export interface IUser {
    name: string;
    password: string;
    token?: string;
    profilePicture?: string;
}

export class User implements IUser {
    public name: string;
    public password: string;
    public profilePicture?: string;
    public token: string;

    constructor(
        name: string,
        password: string,
        token: string,
        profilePicture?: string,
    ) {
        this.name = name;
        this.password = password;
        this.token = token;
        this.profilePicture = profilePicture;

        // // Any additional logic here
        // if (!name || !email || !password) {
        //     throw new Error("Name, email, and password are required fields.");
        // }
    }
}
