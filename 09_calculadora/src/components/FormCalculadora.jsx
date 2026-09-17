import { useState } from "react";
import "./FormCalculadora.css";

function FormCalculadora() {
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [operacao, setOperacao] = useState("+");
    const [resultado, setResultado] = useState("");

    function calcular() {
        const n1 = Number(numero1);
        const n2 = Number(numero2);

        if (numero1 === "" || numero2 === "") {
            setResultado("Digite os dois números!");
            return;
        }

        let calculo;

        switch (operacao) {
            case "+":
                calculo = n1 + n2;
                break;

            case "-":
                calculo = n1 - n2;
                break;

            case "*":
                calculo = n1 * n2;
                break;

            case "/":
                if (n2 === 0) {
                    setResultado("Não é possível dividir por zero!");
                    return;
                }

                calculo = n1 / n2;
                break;

            default:
                calculo = 0;
        }

        setResultado(calculo);
    }

    function limpar() {
        setNumero1("");
        setNumero2("");
        setOperacao("+");
        setResultado("");
    }

    return (
        <div className="calculadora">

            <h1>Calculadora Simples</h1>

            <div className="campo">
                <label>Primeiro número</label>

                <input
                    type="number"
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                    placeholder="Digite um número"
                />
            </div>

            <div className="campo">
                <label>Segundo número</label>

                <input
                    type="number"
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                    placeholder="Digite um número"
                />
            </div>

            <div className="campo">
                <label>Operação</label>

                <select
                    value={operacao}
                    onChange={(e) => setOperacao(e.target.value)}
                >
                    <option value="+">Adição (+)</option>
                    <option value="-">Subtração (-)</option>
                    <option value="">Multiplicação ()</option>
                    <option value="/">Divisão (/)</option>
                </select>
            </div>

            <div className="botoes">

                <button
                    className="btn-calcular"
                    onClick={calcular}
                >
                    Calcular
                </button>

                <button
                    className="btn-limpar"
                    onClick={limpar}
                >
                    Limpar
                </button>

            </div>

            {resultado !== "" && (
                <div className="resultado">
                    <span>Resultado</span>
                    <strong>{resultado}</strong>
                </div>
            )}

        </div>
    );
}

export default FormCalculadora;