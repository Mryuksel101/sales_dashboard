export interface IUser {
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
}

export class User implements IUser {
    public name: string;
    public email: string;
    public password: string;
    public profilePicture?: string;

    constructor(
        name: string,
        email: string,
        password: string,
        profilePicture?: string
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;

        // // Any additional logic here
        // if (!name || !email || !password) {
        //     throw new Error("Name, email, and password are required fields.");
        // }
    }
}
