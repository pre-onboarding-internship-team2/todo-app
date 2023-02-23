export interface AuthRequestProps {
    email: string;
    password: string;
}

export interface AuthResponseProps {
    access_token: string;
}