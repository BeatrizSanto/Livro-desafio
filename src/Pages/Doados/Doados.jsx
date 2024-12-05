import S from './doados.module.scss'
import livro from '../../assets/livro1.png'

export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Doados Livros</h2>
            <section className={S.boxcard}>
                <article>
                    <img src={livro} alt='' />
                    <h3>O Protagonista</h3>
                    <p>Susane Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}