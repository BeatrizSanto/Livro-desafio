import S from './doados.module.scss'
import livro from '../../assets/livro1.png'
import axios from 'axios'
import {useState,useEffect} from 'react'



export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () =>{
        const response = await axios.get("https://api-livros-1.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros()
    },[])



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
                {livros.map((item)=>(
                    <article key={item}>
                        <img src={item.imagem_url} alt="" />
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>

                ))}

            </section>
        </section>
    )
}