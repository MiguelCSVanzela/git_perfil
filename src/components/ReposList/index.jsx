import { useState, useEffect } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        setCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(response => response.json())
            .then(responseJson => {
                setTimeout(() => {
                    setCarregando(false);
                    setRepos(responseJson);
                }, 3500)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {
                carregando ? (
                    <h1>Carregando...</h1>
                ) : (
                    <ul className={styles.list}>
                        {repos.map(({ id, name, language, html_url }) => (
                            <li key={id} className={styles.listItem}>
                                <div className={styles.itemName}>
                                    <b>Nome:</b>
                                    {name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b>
                                    {language}
                                </div>
                                <a className={styles.itemLink} target="_blank" href={html_url}>Visitar No github</a>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default ReposList; 