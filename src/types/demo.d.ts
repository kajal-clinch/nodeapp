
declare namespace User {

    interface IUser {
        name: string,
        email: string,
        age: number
    }
    interface IUserRequest {
        id: string
    }
    interface IUserResponse {
        id: string
        name: string,
        email: string,
        age: number
    }
}

