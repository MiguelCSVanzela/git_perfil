import styles from './Perfil.module.css';

// export default = () => {
// OU 
// export default function() {
const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Foto de perfil" />
            <h1 className={styles.nome}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil; 