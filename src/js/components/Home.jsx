import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import '../../styles/index.css';



//create your first component

const Home = () => {
  // Array con los datos de las tarjetas
  const cardsData = [
    {
      title: "Huawei MateBook Fold Ultimate Design",
      text: "El impresionante portátil plegable HUAWEI MateBook Fold Ultimate Design ya es oficial y dice adiós a Windows.",
      imgUrl: "https://touchit.sk/wp-content/uploads/2025/05/Huawei-MateBook-Fold-Ultimate.webp",
      buttonText: "Ver más",
      buttonUrl: "#"
    },
    {
      title: "Iphone 17",
      text: "Apple anunciará oficialmente el nuevo iPhone el 9 de septiembre de 2025. .",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxRMBH6RydA-VHDNpoox9uMef7S5cWJkDBw&s",
      buttonText: "Detalles",
      buttonUrl: "#"
    },
    {
      title: "Nano Banana IA",
      text: " Google ha dado un golpe sobre la mesa con el lanzamiento de Nano Banana, una versión de Gemini perfecta para generar y editar imágenes.",
      imgUrl: "https://i.ytimg.com/vi/bnihuvFe5bM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBBH_yn4BWCSaiFnyc9IJW6U9Fk1g",
      buttonText: "Explorar",
      buttonUrl: "#"
    },
    {
      title: "Zuchongzhi-3",
      text: " China marca un hito en la computación cuántica con Zuchongzhi-3: el procesador superconductor de 105 cúbits.",
      imgUrl: "https://clickpetroleoegas.com.br/wp-content/uploads/2025/03/China-lanca-Zuchongzhi-3.0-computador-quantico-mais-avancado-do-mundo.jpg",
      buttonText: "Ir",
      buttonUrl: "#"
    }
  ];

  return (
    <>
      <Navbar brand="Mi Landing con React" />

      <div className="container my-4">
        <Jumbotron
          title="¡Bienvenido a mi landing! 🎉"
          description="Esta es una sencilla landing page construida con React y Bootstrap."
          buttonText="Aprende más"
          buttonUrl="#"
        />

        <div className="row g-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              imgUrl={card.imgUrl}
              buttonText={card.buttonText}
              buttonUrl={card.buttonUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;