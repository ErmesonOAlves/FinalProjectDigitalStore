import jordan from'../../assets/jordan.png'
import '../css/SpecialOffer.css'
export default function SpecialOffer(){
    return(<>
        <div className="offer">
            <div className="offerImg">
                <img src={jordan} alt="" />
                <div className="specialOffer">
                    <h3>Oferta especial</h3>
                    <h1>Air Jordan edição de colecionador</h1>
                    <p>O ícone das quadras chegou! Garanta seu Air Jordan com design exclusivo e conforto premium. Estilo lendário para o seu dia a dia. Compre hoje com desconto!</p>
                    <button> Ver Oferta</button>
                </div>
            </div>
        </div>
    
    </>)
}