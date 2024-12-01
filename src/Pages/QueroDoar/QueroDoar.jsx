import S from './queroDoar.module.scss'
import livro from '../../assets/livro.png'

export default function QueroDoar(){
    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action=''>
                <div>
                    <img src={livro} alt= '' />
                    <h3>Informações do livro</h3>
                </div>
                <input type="text" placeholder='Titulo' />
                <input type="text" placeholder='categoria'/>
                <input type="text" placeholder='Autor' />
                <input type="text" placeholder='Link da imagem' />
                </form>
            </section>
        </section>
    )
    }