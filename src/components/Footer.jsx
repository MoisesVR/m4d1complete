import Button from 'react-bootstrap/Button';

const Footer = () => {
    return(
        <>
            <div className='button'>
                <Button variant="outline-primary mt-3 mb-3">Más Imágenes</Button>
            </div>
            <div className='footer'>
                <h6> Todos los derechos reservados </h6>
            </div> 
        </>
        
    );
}

export default Footer;