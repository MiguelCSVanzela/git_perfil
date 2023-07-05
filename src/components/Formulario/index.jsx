import { useState, useEffect } from "react";

const Formulario = () => {
    const [notaA, setNotaA] = useState(0);
    const [notaB, setNotaB] = useState(0);
    const [notaC, setNotaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente foi montado na tela");

        return () => {
            console.log("O componente foi desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("O nome mudou para " + nome);
    }, [nome]);

    useEffect(() => {
        console.log("Os campos valores mudaram");
    }, [notaA, notaB, notaC])

    function renderizaResultado() {
        const total = notaA + notaB + notaC;
        const media = total / 3;
        if (media >= 7) {
            return (
                <p>Você foi Aprovado, {nome}!</p>
            )
        } else {
            return (
                <p>Infelizmente, não foi desta vez {nome}</p>
            )
        }
    }

    const alteraNome = (event) => {
        return setNome(event.target.value)
    }
    return (


        <form>
            <ul>
                {[1, 3, 4, 5, 6, 199].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Como quer ser chamado" onChange={alteraNome} />
            <input type="number" placeholder="Nota A" onChange={({ target }) => setNotaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota B" onChange={event => setNotaB(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota C" onChange={event => setNotaC(parseInt(event.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario; 