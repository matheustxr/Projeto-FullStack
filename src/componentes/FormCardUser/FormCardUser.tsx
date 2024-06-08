import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore'; 
import { firestore, storage } from '../../Services/FireBaseConfig'; 
import { useUser } from '../../contexts/UserContext';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, ColorPicker, message } from 'antd';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; 

interface User {
    email: string | null;
}

interface Card {
    profileImageUrl: string; 
    nome: string;
    area: string;
    sobre: string;
    cor: string;
    userId: string;
}

const FormCardUser: React.FC = () => {
    const { user } = useUser() as { user: User | null };
    const [nome, setNome] = useState<string>('');
    const [area, setArea] = useState<string>('');
    const [sobre, setSobre] = useState<string>('');
    const [cor, setCor] = useState<string>('#1677ff');
    const [image, setImage] = useState<File | null>(null); 
    const [imageUrl, setImageUrl] = useState<string>(''); 
    const [messageApi, contextHolder] = message.useMessage();

    
    useEffect(() => {
        const fetchCardData = async () => {
            if (user && user.email) {
                try {
                    const cardRef = doc(firestore, 'cards', user.email);
                    const cardDoc = await getDoc(cardRef);

                    if (cardDoc.exists()) {
                        const cardData = cardDoc.data() as Card;
                        setNome(cardData.nome);
                        setArea(cardData.area);
                        setSobre(cardData.sobre);
                        setCor(cardData.cor);
                        setImageUrl(cardData.profileImageUrl); 
                    }
                } catch (error) {
                    console.error('Erro ao buscar os dados do card:', error);
                    messageApi.open({
                        type: 'error',
                        content: 'Erro ao buscar os dados do card. Tente novamente.',
                    });
                }
            }
        };

        fetchCardData();
    }, [user]); 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedImage = e.target.files[0];
            setImage(selectedImage);
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImageUrl(reader.result as string);
                }
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!user || !user.email) {
            messageApi.open({
                type: 'warning',
                content: 'Você precisa estar logado para criar um card',
            });
            return;
        }

        
        const newCard: Card = {
            profileImageUrl: '',
            nome,
            area,
            sobre,
            cor,
            userId: user.email, 
        };

        try {
            
            if (image) {
                const imageRef = storageRef(storage, `profileImages/${user.email}/${image.name}`);
                await uploadBytes(imageRef, image);
                const downloadUrl = await getDownloadURL(imageRef);
                newCard.profileImageUrl = downloadUrl; 
            }

            const cardRef = doc(firestore, 'cards', user.email); 
            await setDoc(cardRef, newCard);
            messageApi.open({
                type: 'success',
                content: 'Card criado com sucesso!',
            });
        } catch (error) {
            console.error('Erro ao criar card:', error);
            messageApi.open({
                type: 'error',
                content: 'Erro ao criar card. Tente novamente.',
            });
        }
    };

    return (
        <div className='p-5 w-full max-w-[400px] bg-gray-300 rounded-lg shadow-xl'>
            {contextHolder}
            <form 
                onSubmit={handleSubmit}
                method="post"
                className='flex flex-col gap-3'
            >   
                <div className='w-full flex justify-center'>
                    <label htmlFor="avatar" style={{ cursor: 'pointer' }}>
                        <Avatar size={64} icon={<UserOutlined />} src={imageUrl} />
                        <input
                            type="file"
                            id="avatar"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        value={nome} 
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
                        className='p-2 w-full rounded shadow-md'
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="area">Área:</label>
                    <input 
                        type="text" 
                        id="area" 
                        value={area} 
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setArea(e.target.value)}
                        className='p-2 w-full rounded shadow-md'
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="sobre">Sobre:</label>
                    <textarea 
                        id="sobre" 
                        value={sobre} 
                        required
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setSobre(e.target.value)}
                        className='p-2 w-full rounded shadow-md'
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Selecione sua cor preferida:</label>
                    <ColorPicker 
                        value={cor} 
                        onChange={(color) => setCor(color.toHexString())}
                        className='w-fit'
                    />
                </div>

                <button 
                    type="submit"
                    className='bg-white py-2 mt-5 rounded-lg shadow-lg hover:shadow-none'
                >
                    Criar Card
                </button>
            </form>
        </div>
    );
}

export default FormCardUser;
