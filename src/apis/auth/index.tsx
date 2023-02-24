import { AxiosResponse, AxiosError } from "axios";
import { signInInstance, signUpInstance } from 'apis/auth/authApi';

type Props = {
    email: string, 
    password: string
}
type SignInResponseAuth = { accessToken: string };
type SignUpResponseAuth = { message: string };

export async function signin(data: Props): Promise<SignInResponseAuth>{
    return new Promise((resolve, reject) => {
        signInInstance(data.email, data.password)
        .then( (res: AxiosResponse) => { 
            resolve(res.data.access_token)
        })
        .catch( (error: AxiosError) => {
            const status = error.response?.status;
            let message: string = '';
            if (status  === 401) {
                message = '이메일 또는 비밀번호가 일치하지 않습니다.'
            }
            else if (status  === 404){
                message = '사용자를 찾을 수 없습니다. 다시 시도해 주세요.'
            }
            else {
                message= '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.'
            }
            reject(message)
        })
    }) 
}

export async function signup(data: Props): Promise<SignUpResponseAuth>{
    return new Promise((resolve, reject) => {
        let message: string = '';
        signUpInstance(data.email, data.password)
        .then( (res: AxiosResponse) => { 
            resolve({ message: '회원가입에 성공하였습니다. 로그인을 시도해주세요.' })
        })
        .catch( (error: AxiosError) => {
            const status = error.response?.status;

            if (status  === 400) {
                message = '이미 존재하는 이메일입니다.'
            }
            else {
                message= '알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.'
            }
            reject(message)
        })
    }) 
}