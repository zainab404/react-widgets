import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion 
      </Link>

      <Link href="/search" className="item">
        Wikipedia Search
      </Link>

      <Link href="/dropdown" className="item">
        Color Selection
      </Link>

      <Link href="/translate" className="item">
        Google Language Translator
      </Link>
    </div>
    
  )
};

export default Header;