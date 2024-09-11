export interface IUser {
    name: string;
    password: string;
    profilePicture?: string;
}

export class User implements IUser {
    public name: string;
    public password: string;
    public profilePicture?: string;

    constructor(
        name: string,
        password: string,
        profilePicture?: string
    ) {
        this.name = name;
        this.password = password;
        this.profilePicture = profilePicture;

        // // Any additional logic here
        // if (!name || !email || !password) {
        //     throw new Error("Name, email, and password are required fields.");
        // }
    }
}
