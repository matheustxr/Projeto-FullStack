
import './CampoTexto.css'
 
interface CampoTextoProps {
    aoAlterado: (valor: string) => void;
    placeholder: string;
    label: string;
    valor: string;
    obrigatorio?: boolean;
}

function CampoTexto( { aoAlterado, placeholder, label, valor, obrigatorio = false} :CampoTextoProps) {

    //const placeHolderModificada = `${placeholder}...`

    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />

        </div>
    )
}

export default CampoTexto