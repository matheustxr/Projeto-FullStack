import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../Services/FireBaseConfig'; // Certifique-se de importar o Firestore configurado corretamente
import { Card } from 'antd'; // Vamos usar o componente Card do Ant Design para exibir os cards

interface CardData {
    profileImageUrl: string;
    nome: string;
    area: string;
    sobre: string;
    cor: string;
    userId: string;
}

const ListagemCards: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'cards'));
                const fetchedCards: CardData[] = [];
                querySnapshot.forEach((doc) => {
                    fetchedCards.push(doc.data() as CardData);
                });
                setCards(fetchedCards);
            } catch (error) {
                console.error('Erro ao buscar cards:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCards();
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='bg-white'>
            <section className="container py-20 mx-auto px-5 md:px-10 xl:px-20">
                <h1 className='text-4xl md:text-5xl xl:text-6xl mb-10 text-center'>Todos os Cards</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            style={{ borderColor: card.cor }}
                            cover={<img alt="Profile" src={card.profileImageUrl} />}
                            className="shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <Card.Meta
                                title={card.nome}
                                description={
                                    <>
                                        <p><strong>Área:</strong> {card.area}</p>
                                        <p><strong>Sobre:</strong> {card.sobre}</p>
                                    </>
                                }
                            />
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ListagemCards;
