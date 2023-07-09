import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const useApi = () => ({
    validateToken: async (token:string) => {
        const response = await api.post('/validade', {token});
        return response.data;
    },

    signIn: async (email: string, password: string) => {
        return{ //resposta falsa do servidor
            user: {id: 3, name: 'João', email: 'joaozindev@gmail.com'},
            token: '123456789'
        }
        const response = await api.post('/signIn', {email, password});
        return response.data;
    },

    logOut: async() => {
        const response = await api.post('/logOut');
        return response.data;
    }
})