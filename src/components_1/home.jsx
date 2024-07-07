import Hero from "./hero";
import Products from "./products";


function Home(){
return(

    <div>
        <h3 style={{paddingLeft: '1rem',
      paddingRight: '1rem',
      height: '3.5rem',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '3px solid'}}>
            product details
        </h3>
      <Products />
      <Hero />
    </div>
  );
};

    
export default Home;