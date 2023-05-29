import { useEffect, useState } from "react"

export default function BuscandoAPI() {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        async function buscarDados() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultadoFinal = await resultado.json()

            return resultadoFinal
        }

        buscarDados().then(res => setTarefas(res))

    }, [])

    return (
        <div>
            <ol>
                {tarefas.map((tarefa) => {
                    return (
                        <div>
                            <li key={tarefa.id}>{tarefa.title} - {tarefa.completed ? <span>Tarefa Concluída</span> : null}</li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}