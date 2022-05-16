
export class User {
    id: number;
    email: string;
    password: string;
    deleted_at: Date;
    updated_at: Date;
    created_at: Date;

    static create(id: number, email: string, password: string) {
        const obj: User = new User();
        obj.id = id;
        obj.email = email;
        obj.password = password;
        return obj;
    }
}