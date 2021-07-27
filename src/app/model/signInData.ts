export class SignInData {
    private login: string;
    private password: string;
    private user: string;

    constructor(login: string, password: string, user: string) {
        this.login = login;
        this.password = password;
    }

    getLogin(): string {
        return this.login;
    }

    getPassword(): string {
        return this.password;
    }
    getUser(): string{
        return this.user;
    }
}