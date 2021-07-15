import Link from "next/link";

const Layout = ({ children, title }) => (
  <>
    <title>{title}</title>
    <header className="layout__header">
      <Link href="/" className="header__links">
        <a>Home</a>
      </Link>
      <Link href="/about" className="header__links">
        <a>About</a>
      </Link>
      <Link href="/contact" className="header__links">
        <a>Contact</a>
      </Link>
    </header>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .layout__header {
        height: 3rem;
        margin: 0;
        padding: 0;
        display: flex;
        width: 100vw;
        justify-content: space-evenly;
        align-items: center;
        background-color: steelblue;
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
      }
      a:hover {
        color: black;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
      }
    `}</style>
  </>
);

export default Layout;
