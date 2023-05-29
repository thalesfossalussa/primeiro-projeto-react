import { useEffect, useState } from "react"

const listaMontadoras = [
    { id: '1', value: 'Volskswagen' },
    { id: '2', value: 'BMW' },
    { id: '3', value: 'Audi' },
    { id: '4', value: 'Mercedes' },
    { id: '5', value: 'McLaren' },
    { id: '6', value: 'Ferrari' },
]

export default function EfeitosColaterais() {

    const [montadoras, setMontadoras] = useState(listaMontadoras)
    const [pesquisa, setPesquisa] = useState('')

    useEffect(
        () => {
            if (pesquisa) {

                const novaLista = listaMontadoras.filter((item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setMontadoras(novaLista)
            } else {
                setMontadoras(listaMontadoras)
            }
        }
        , [pesquisa])

    return (
        <div>
            <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquisa aqui" type="text" />

            {montadoras.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}