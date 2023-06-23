import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/ajulien973">
        Alexis Julien @ {new Date().getFullYear()}
      </a>
    </footer>
  );
};

export default Footer;
