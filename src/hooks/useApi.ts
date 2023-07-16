// import axios from 'axios'

// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL
// });

// export const useApi = () => ({
//     validateToken: async (token:string) => {
//         return{ //resposta falsa do servidor
//             user: {id: 3, name: 'João', email: 'joaozindev@gmail.com', password:'1234'}
//         }
//         /*const response = await api.post('/validade', {token});
//         return response.data;*/
//     },

//     signIn: async (email: string, password: string) => {
//         return{ //resposta falsa do servidor
//             user: {id: 3, name: 'João', email: 'joaozindev@gmail.com', password:'1234'},
//             token: '123456789'
//         }
//         /*const response = await api.post('/signIn', {email, password});
//         return response.data;*/
//     },

//     logOut: async() => {
//         return{status:true} //resposta falsa do servidor
//         const response = await api.post('/logOut');
//         return response.data;
//     }
// });

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        try {
            //RESPOTA FALSA DO SERVIDOR
            return {
                user: {
                  id: 3,
                  name: 'João',
                  email: 'joaozindev@gmail.com',
                  password: '1234',
                },
              };
            const response = await api.post('/validate', { token });
            return response.data;
        } catch (error) {
            console.error('Erro ao validar o token:', error);
            throw new Error('Erro ao validar o token');
        }
    },

    signIn: async (email: string, password: string) => {
        try {
            //RESPOTA FALSA DO SERVIDOR
            return {
                user: {
                  id: 3,
                  name: 'João',
                  email: 'joaozindev@gmail.com',
                  password: '1234',
                },
                token: '123456789',
              };
            const response = await api.post('/signIn', { email, password });
            return response.data;
        } catch (error) {
            console.error('Erro ao realizar o login:', error);
            throw new Error('Erro ao realizar o login');
        }
    },

    logOut: async () => {
        try {
            //RESPOTA FALSA DO SERVIDOR
            return { status: true };
            const response = await api.post('/logOut');
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
            throw new Error('Erro ao fazer logout');
        }
    },
});
