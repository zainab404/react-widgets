const Link = ({className, href, children}) => {

  const onClick = (event) => {
    if (event.metaKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent)
    // this ^^^ function navEvent communicates to our Route components that the URL has changed in order to display the correct content
  }

  return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
  )
};

export default Link;