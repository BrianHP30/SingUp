import Header from "../Complements/Header";
import Footer from "../Complements/Footer";

function Layout({children}) {
    return ( 
        <>
        <Header></Header>
        {children}
        </>
     );
}

export default Layout;