import styles from "../button.module.css"

export default function MeuBotao(props) {
    return(
        <div>
            <button className={styles.myButton}>{props.conteudo}</button>
        </div>
    )
}