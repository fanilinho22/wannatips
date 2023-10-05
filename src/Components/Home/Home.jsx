import React from 'react';
import "./home.css"
import Header from '../Header/Header';

function Home() {
    const urlExterna = 'https://123milhas.com/';
    return (
        
        <div className='Home'>
            <Header/>
            <div className='topin'>
                <h1 className='bemV'>Bem vindo ao WannaTip</h1>
            </div>
            

            <div className='promos'>
                <h1 className='bordela'>Promoções do dia!</h1>
                <div className='viagens'>
                <div className='cards'>
                    <h1>Uruguai</h1>
                    <p>Viajem a partir de R$ 250.99</p>
                    <p>Compania aerea Latan</p>
                    <h5>* * * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Parana</h1>
                    <p>Viajem a partir de R$ 150.99</p>
                    <p>Compania aerea Avianca</p>
                    <h5>* *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Amapá</h1>
                    <p>Viajem a partir de R$ -50.99</p>
                    <p>Compania aerea Azul</p>
                    <h5>*</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Chile</h1>
                    <p>Viajem a partir de R$ 699.99</p>
                    <p>Compania aerea Americas</p>
                    <h5>* * * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Mexico</h1>
                    <p>Viajem a partir de R$ 900.99</p>
                    <p>Compania aerea MexErlines</p>
                    <h5>* * * * * * </h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
            </div>
            </div>
            <h1 className='bordela'>Reviews dos lugares</h1>
            <div className='revios'>
                <div className='cards-rev'>
                    <h1>Viagem ao alabama</h1>
                    <h3>6 dias de estadia</h3>
                    <p>Minha viagem de seis dias pelo Alabama foi uma jornada repleta de história, cultura e natureza. Comecei em Montgomery, mergulhando na história dos direitos civis, antes de explorar as fazendas rurais e paisagens pitorescas. Birmingham me envolveu em sua herança dos direitos civis, enquanto Huntsville ofereceu uma visão fascinante da exploração espacial. No quinto dia, a beleza natural das Montanhas Apalaches e cachoeiras de Noccalula me deixaram maravilhado, e terminei minha jornada em Mobile, apreciando a atmosfera à beira-mar. O Alabama me cativou com sua hospitalidade e diversidade, e mal posso esperar para voltar e continuar explorando este estado fascinante.</p>
                </div>
                <div className='cards-rev'>
                    <h1>Nova York uma aventura</h1>
                    <h3>4 dias de estadia</h3>
                    <p>Minha viagem a Nova York foi uma experiência de tirar o fôlego, que durou uma semana repleta de aventuras. Comecei explorando a icônica Times Square e absorvendo a energia vibrante da cidade que nunca dorme. Passei dias inteiros admirando a arquitetura deslumbrante de Manhattan, visitando o Empire State Building e o Central Park. A Broadway me proporcionou noites inesquecíveis com espetáculos de classe mundial. Comi em deliciosos food trucks e experimentei pratos étnicos em bairros como Chinatown e Little Italy. A Estátua da Liberdade e o Museu de Arte Moderna também foram destaques inesquecíveis. Nova York é verdadeiramente uma metrópole que nunca deixa de surpreender e inspirar.</p>
                </div>

            </div>
            <div className='revios'>
                <div className='cards-rev'>
                    <h1>Um novo mundo, Tóquio</h1>
                    <h3>9 dias de estadia</h3>
                    <p>Minha estadia em Tóquio, no Japão, foi uma imersão cultural de nove dias que me cativou. Comecei explorando os bairros movimentados de Shibuya e Harajuku, onde a moda e a cultura pop se encontram. Visitar o Templo Senso-ji em Asakusa me transportou para o Japão tradicional, com suas lanternas vermelhas e atmosfera serena. A culinária japonesa me encantou em restaurantes de sushi e ramen, mas também experimentei a agitação dos mercados de rua como Ameya-Yokocho. Não poderia deixar de visitar o Palácio Imperial e suas imponentes áreas verdes. Tóquio é uma mistura fascinante de tradição e modernidade, e sua energia é contagiante.</p>
                </div>
                <div className='cards-rev'>
                    <h1>Paris o lugar onde o romance esta no ar!</h1>
                    <h3>7 dias de estadia</h3>
                    <p>Minha estadia de sete dias em Paris foi uma viagem dos sonhos que me deixou encantado. Comecei com a icônica Torre Eiffel, de onde pude admirar toda a cidade. Passear pelas margens do Rio Sena e explorar os museus mundialmente famosos, como o Louvre e o Museu d'Orsay, foram experiências enriquecedoras. A arquitetura parisiense é verdadeiramente deslumbrante, com a Catedral de Notre-Dame e o Arco do Triunfo como pontos altos. Não posso esquecer de mencionar as delícias culinárias, desde croissants quentinhos até a autêntica culinária francesa em charmosos cafés. Paris é uma cidade romântica e culturalmente rica que deixa uma impressão duradoura em qualquer viajante.</p>
                </div>

            </div>

            <h1 className='bordela'>Viagens e preços</h1>
            <div className='viagens'>
                
                <div className='cards'>
                    <h1>Japão</h1>
                    <p>Viajem a partir de R$ 2.490.99</p>
                    <p>Compania aerea Gol</p>
                    <h5>* * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Alemanha</h1>
                    <p>Viajem a partir de R$ 3.490.99</p>
                    <p>Compania aerea Latan</p>
                    <h5>* * * * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Australia</h1>
                    <p>Viajem a partir de R$ 4.490.99</p>
                    <p>Compania aerea Autrians</p>
                    <h5>* * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>koreia do sul</h1>
                    <p>Viajem a partir de R$ 7.200.99</p>
                    <p>Compania aerea Kokoroyto</p>
                    <h5>* * * * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Ipirangueira</h1>
                    <p>Viajem a partir de R$ 1.190.99</p>
                    <p>Compania aerea Azul</p>
                    <h5>* *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
            </div>
            <div className='viagens'>
                <div className='cards'>
                    <h1>Amazonas</h1>
                    <p>Viajem a partir de R$ 1.120.99</p>
                    <p>Compania aerea Americo</p>
                    <h5>* * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Florida</h1>
                    <p>Viajem a partir de R$ 3.490.99</p>
                    <p>Compania aerea American airlines</p>
                    <h5>* * * * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Africa do sul</h1>
                    <p>Viajem a partir de R$ 7.490.99</p>
                    <p>Compania aerea sulafrica</p>
                    <h5>* * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Russia</h1>
                    <p>Viajem a partir de R$ 5.490.99</p>
                    <p>Compania aerea urss</p>
                    <h5>* *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
                <div className='cards'>
                    <h1>Mendelin</h1>
                    <p>Viajem a partir de R$ 1.490.99</p>
                    <p>Compania aerea mandavalas</p>
                    <h5>* * *</h5>
                    <a href={urlExterna} target="_blank" rel="noopener noreferrer">
                    <button className='botao'>Comprar passagem</button>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Home
