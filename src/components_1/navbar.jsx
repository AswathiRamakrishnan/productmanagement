function NavBar() {
  return(
    <div style={{
      paddingLeft: '1rem',
      paddingRight: '1rem',
      height: '3.5rem',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '3px solid',
      backgroundColor: "white"
    }}>
        <img src="aghub_processed.png" width="85px" height="85px"></img>
        <h1 style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '30%',
        }}>
          Agile Hub
        </h1>
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          gap: '1rem',
          '@media (min-width: 640px)': {
            gap: '1.5rem',
          },
        }}>

          <a href="/Home" style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'text-decoration-color 0.2s',
          }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
            Home
          </a>
          <a href="/addproduct" style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'text-decoration-color 0.2s',
          }} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
            Add Products
          </a>
        </div>
      </div>
  );
};




export default NavBar;

    