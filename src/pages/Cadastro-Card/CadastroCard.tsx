import Formulario from '../../componentes/FormCardUser/FormCardUser';

export default function CadastroCard() {
    return (
        <div className='bg-white'>
            <section className=" container py-20 mx-auto px-5 md:px-10 xl:px-20 ">
                <div className='flex flex-col items-center gap-5  '>
                    <h1 className='text-4xl md:text-5xl xl:text-6xl'>
                        Cadastre o seu card
                    </h1>
                    <p className='max-w-[700px] md:text-center'>
                        Preencha as informações pedidas para fazer o seu card. 
                        Preenchendo seu card outras pessoas podem ve-lo e a sua chance de fazer networking aumenta!
                    </p>
                    
                    <Formulario />
                </div>
            </section>
        </div>
    );
}