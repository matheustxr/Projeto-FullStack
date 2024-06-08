import React, { useState, useEffect } from 'react';
import Formulario from '../../componentes/FormCardUser/FormCardUser';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../Services/FireBaseConfig';
import { useUser } from '../../contexts/UserContext';

export default function CadastroCard() {
    const { user } = useUser() as { user: { email: string | null } | null };
    const [isCardExisting, setIsCardExisting] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkCardExists = async () => {
            if (user && user.email) {
                const cardRef = doc(firestore, 'cards', user.email);
                const cardDoc = await getDoc(cardRef);

                if (cardDoc.exists()) {
                    setIsCardExisting(true);
                }
            }
            setIsLoading(false);
        };

        checkCardExists();
    }, [user]);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='bg-white'>
            <section className="container py-20 mx-auto px-5 md:px-10 xl:px-20">
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-4xl md:text-5xl xl:text-6xl'>
                        {isCardExisting ? 'Atualize o seu card' : 'Cadastre o seu card'}
                    </h1>
                    <p className='max-w-[700px] md:text-center'>
                        Preencha as informações pedidas para {isCardExisting ? 'atualizar' : 'fazer'} o seu card.
                        Preenchendo seu card outras pessoas podem vê-lo e a sua chance de fazer networking aumenta!
                    </p>
                    
                    <Formulario />
                </div>
            </section>
        </div>
    );
}
