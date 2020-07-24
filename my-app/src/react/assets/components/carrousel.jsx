import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./index.css"
const dataDummy = [{
    descripcion:
        "Dark es una serie original de Netflix del género de thriller de misterio con toques de fantasía sobrenatural.Esta serie es el primer proyecto que la compañía de streaming desarrolla que está escrita, rodada y producida en Alemania. Ambientada en la Alemania contemporánea, la serie gira alrededor de la desaparición de dos niños en Widen. El pueblo se vuelca en buscarles hasta que la situación cada vez se convierte más en una experiencia sobrenatural.",
    title: "Dark-Netflix",
    fecha: "1/1/1017  fue su lanzamiento"

}
    , {
    descripcion:
        "Avengers: Endgame (Vengadores: Endgame en España)3​ es una película de superhéroes estadounidense de 2019 basada en el grupo los Vengadores de Marvel Comics, producida por Marvel Studios y distribuida por Walt Disney Studios Motion Pictures. Es una secuela directa de la película de 2018 Avengers: Infinity War y una continuación de The Avengers (2012) y Avengers: Age of Ultron (2015), siendo la vigesimosegunda película del Universo cinematográfico de Marvel (MCU, por sus siglas en inglés). La cinta está dirigida por Anthony y Joe Russo, con un guion escrito por el equipo conformado por Christopher Markus y Stephen McFeely, y contando con la aparición de múltiples actores de películas anteriores del Universo cinematográfico de Marvel.",
    title: "Advenger end Game",
    fecha: "22/4/1019  fue su lanzamiento"

}, {
    descripcion: "Joker (conocida como Guasón en Hispanoamérica) es una película de suspenso y drama psicológico estadounidense de 2019 distribuida por Warner Bros. Pictures y basada en el Joker, personaje de DC Comics. Es la primera de una serie de películas basadas en DC separadas del universo extendido de DC (DCEU) compartido. La película fue dirigida por Todd Phillips a partir de un guion escrito junto con Scott Silver. Está protagonizada por Joaquin Phoenix como el personaje principal, acompañado por Robert De Niro, Zazie Beetz y Frances Conroy, entre otros. Joker' se centra en el icónico archienemigo de Batman y es una historia original, independiente, que no se ha visto antes en la pantalla grande. Conoceremos a Arthur Fleck, un hombre ignorado por la sociedad, y su historia no solo será un estudio descarnado del personaje, sino también una historia con moraleja",
    title: "Joker (Guasón) de Todd Phillips ",
    fecha: "2/7/1019  fue su lanzamiento"

}, {
    descripcion: "Wade Wilson (Ryan Reynolds), el mutante conocido como Deadpool y el antihéroe más gamberro de Marvel tiene que vérselas esta vez con Cable (Josh Brolin). El poderoso villano ha secuestrado a un chaval llamado Russell (Julian Dennison). Para salvar al joven, el desvergonzado mutante decide montar un hiper-mega escuadrón al que, por toda la cara, va a llamar X-Force. En este escuadrón estarán Domino (Zazie Beetz), Estrella Rota (Lewis Tan), Negasonic (Brianna Hildebrand), Zeitgeist (Bill Skarsgård), Yukio (Shioli Kutsuna), Coloso (Stefan Kapicic) y Bedlam (Terry Crews). Con su característica irreverencia, el antihéroe deberá demostrar a Cable que es un héroe y no solo un payaso.Esta secuela de Deadpool (2016) está dirigida por David Leitch (Atómica, John Wick (Un buen día para matar)) y cuenta con un guión escrito de nuevo por los guionistas de Bienvenidos a Zombieland (2009), Rhett Reese y Paul Wernick. Ryan Reynolds (El otro guardaespaldas, Life (Vida)) repite su papel como Wade Wilson. ",
    title: "Deadpool 2 ",
    fecha: "01/5/2018 fue su lanzamiento"
}
]
export default () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setNumber(number => {
                if (number === 3) {
                    return number - 3
                } else {
                    return number + 1
                }
            }

            )
        }, 9000
        )
        if (!timer) {
            return () => {
                clearInterval(timer)
            }
        }
    }, [])



    return (<div className="carrouselContainer">
        <div className="carrouselDivision">


            <div className="carrouselCont"
            >
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={4}
                    step={1}
                    naturalSlideWidth={500}
                    naturalSlideHeight={700}
                    interval={9000}
                    isPlaying={true}
                    infinite
                >
                    <Slider >
                        <Slide className="sliders" index={number}><ImageWithZoom className="imgZoom" src="https://images-na.ssl-images-amazon.com/images/I/91G5xnoFOqL._AC_SY679_.jpg"></ImageWithZoom></Slide>
                        <Slide className="sliders" index={number}><ImageWithZoom className="imgZoom" src="https://hipertextual.com/files/2019/03/hipertextual-nuevo-poster-ruso-avengers-endgame-confirmaria-mayores-teorias-pelicula-2019597199.jpeg"></ImageWithZoom></Slide>
                        <Slide className="sliders" index={number}><ImageWithZoom className="imgZoom" src="https://http2.mlstatic.com/poster-lona-vinilica-joker-2019-5-modelos-para-elegir-D_NQ_NP_709507-MLA32135065794_092019-F.jpg"></ImageWithZoom></Slide>
                        <Slide className="sliders" index={number}><ImageWithZoom className="imgZoom" src="https://i.pinimg.com/originals/d7/b1/b2/d7b1b22d777268ef710c5f5ac3607884.jpg"></ImageWithZoom></Slide>

                    </Slider>

                </CarouselProvider>

            </div>
        </div>
        <div className="carrouselBox">

            <div className="newContent-card">
                <h2 className="hsCardTitle">{dataDummy[number].title}</h2>
                <h4 className="newinfo-card">
                    {dataDummy[number].fecha}
                </h4>
                <p className="newdesc-card">
                    {dataDummy[number].descripcion}
                </p>
            </div>
        </div>
    </div>


    )
}
