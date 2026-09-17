<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&text=CALCULADORA&fontSize=52&fontColor=FFFFFF&fontAlignY=40&desc=React%20JS%20%7C%20Interactive%20Math%20Interface&descAlignY=62&descSize=18&color=0:2B0000,35:7A0000,70:B30000,100:FF4D4D"/>

<br>

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=20&duration=1800&pause=500&color=FF4D4D&center=true&vCenter=true&width=650&lines=%3E+Inicializando+calculadora...;%3E+Carregando+componentes...;%3E+Sistema+pronto!;%3E+Digite.+Escolha.+Calcule."/>

</div>

<br>

<table align="center">
<tr>
<td>

```text
╭──────────────────────────────────────╮
│                                      │
│          CALCULADORA.JS              │
│                                      │
│     ┌────────────────────────┐       │
│     │      125.50             │       │
│     └────────────────────────┘       │
│                                      │
│       1º número    2º número         │
│                                      │
│       +    −    ×    ÷              │
│                                      │
│       [ CALCULAR ]  [ LIMPAR ]       │
│                                      │
│              = 251                   │
│                                      │
╰──────────────────────────────────────╯
```

</td>
</tr>
</table>

---

<div align="center">

### `UM PEQUENO PROJETO. UMA GRANDE PRÁTICA.`

Uma calculadora criada para transformar conceitos de **React JS** em uma interface funcional e interativa.

<br>

![React](https://img.shields.io/badge/REACT-0B1F3A?style=flat-square\&logo=react\&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-0B1F3A?style=flat-square\&logo=javascript\&logoColor=F7DF1E)
![CSS](https://img.shields.io/badge/CSS-0B1F3A?style=flat-square\&logo=css3\&logoColor=38BDF8)
![Vite](https://img.shields.io/badge/VITE-0B1F3A?style=flat-square\&logo=vite\&logoColor=646CFF)

</div>

---

# `01` — O PROJETO

**Calculadora Simples** é uma aplicação desenvolvida durante os estudos de **React JS**.

A ideia é simples:

> **Receber → Processar → Calcular → Exibir**

O usuário informa dois números, escolhe uma operação matemática e recebe o resultado diretamente na interface.

### Operações disponíveis

```text
             OPERAÇÕES
                 │
       ┌─────────┼─────────┐
       │         │         │
       ▼         ▼         ▼
      (+)       (-)       (*)
       │         │         │
      SOMA   SUBTRAÇÃO  MULTIPLICAÇÃO
                 
                 │
                 ▼
                (/)
                 │
               DIVISÃO
```

---

# `02` — COMO A CALCULADORA PENSA?

A aplicação segue um fluxo simples:

```text
                    USER
                     │
                     ▼
             ┌───────────────┐
             │  Nº 1         │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │  Nº 2         │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │  OPERAÇÃO     │
             │ + - * /       │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │   CALCULAR    │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │   JAVASCRIPT  │
             │    + REACT    │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │   RESULTADO   │
             └───────────────┘
```

---

# `03` — O QUE FOI PRATICADO?

### `useState`

Cada informação importante da calculadora possui seu próprio estado.

```jsx
const [numero1, setNumero1] = useState("");
const [numero2, setNumero2] = useState("");
const [operacao, setOperacao] = useState("+");
const [resultado, setResultado] = useState("");
```

Isso permite que a interface seja atualizada conforme o usuário interage com ela.

---

### `Eventos`

A calculadora responde às ações realizadas pelo usuário.

```text
DIGITAR
   ↓
onChange
   ↓
ATUALIZA O ESTADO
   ↓
CLICAR
   ↓
onClick
   ↓
CALCULAR
```

---

### `Select`

Para escolher a operação foi utilizado o elemento:

```jsx
<select>
```

Com quatro possibilidades:

```text
[ + ]  Adição
[ - ]  Subtração
[ * ]  Multiplicação
[ / ]  Divisão
```

---

### `Switch`

Depois que o usuário escolhe uma operação, o JavaScript identifica qual cálculo precisa ser realizado.

```jsx
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
        calculo = n1 / n2;
        break;
}
```

---

# `04` — INTERAÇÃO

A interface foi pensada para ser simples e direta:

```text
╭────────────────────────────────────────╮
│                                        │
│           CALCULADORA SIMPLES          │
│                                        │
│  Primeiro número                       │
│  ┌──────────────────────────────────┐  │
│  │  10                              │  │
│  └──────────────────────────────────┘  │
│                                        │
│  Segundo número                        │
│  ┌──────────────────────────────────┐  │
│  │  5                               │  │
│  └──────────────────────────────────┘  │
│                                        │
│  Operação                              │
│  ┌──────────────────────────────────┐  │
│  │  Adição (+)                    ▼ │  │
│  └──────────────────────────────────┘  │
│                                        │
│  ┌────────────────┐  ┌──────────────┐  │
│  │    CALCULAR    │  │    LIMPAR    │  │
│  └────────────────┘  └──────────────┘  │
│                                        │
│              RESULTADO                 │
│                 15                     │
│                                        │
╰────────────────────────────────────────╯
```

---

# `05` — ESTRUTURA

```text
calculadora-simples
│
├── public
│
├── src
│   │
│   ├── components
│   │   ├── FormCalculadora.jsx
│   │   └── FormCalculadora.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
└── README.md
```
