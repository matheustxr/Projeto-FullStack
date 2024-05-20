// FormCardUser.tsx
import React, { useState } from 'react';
import { ColorPicker } from 'antd';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../Services/FireBaseConfig'; // Certifique-se de importar o Firestore configurado corretamente
import { useUser } from '../../contexts/UserContext';

export default function FormCardUser() {
    const { user } = useUser();
    const [nome, setNome] = useState('');
    const [area, setArea] = useState('');
    const [sobre, setSobre] = useState('');
    const [cor, setCor] = useState('#1677ff');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Salvar os dados do card no Firestore
        const newCard = {
            nome,
            area,
            sobre,
            cor,
            userId: user!.email // Associe o card ao usuário logado
        };

        try {
            const cardRef = doc(firestore, 'cards', user!.email); // Referência ao documento 'cards/{user.email}'
            await setDoc(cardRef, newCard); // Adiciona o novo documento ao Firestore
            alert('Card criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar card:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} method="post">
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="area">Área:</label>
                    <input type="text" id="area" value={area} onChange={(e) => setArea(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="sobre">Sobre:</label>
                    <textarea id="sobre" value={sobre} onChange={(e) => setSobre(e.target.value)} />
                </div>

                <ColorPicker value={cor} onChange={(color) => setCor(color.toHexString())} />

                <button type="submit">
                    Criar Card
                </button>
            </form>
        </div>
    );
}
