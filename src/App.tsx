import Avatar from './Avatar.tsx'
import './App.css'

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson",
  nbDonuts: 0
};

const homer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName: "Simpson",
  nbDonuts: 4200
};

const marge = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
  firstName: "Marge",
  lastName: "Simpson",
  nbDonuts: 0
};

const lisa = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
  firstName: "Lisa",
  lastName: "Simpson",
  nbDonuts: 0
};

const maggie = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
  firstName: "Maggie",
  lastName: "Simpson",
  nbDonuts: 0
};

const simpsonsLogo = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2257-the-simpsons-logo-sticker.png",
  firstName: "Logo",
  lastName: "The Simpsons",
  nbDonuts: 0
};

const simpsonsFamily = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2253-the-simpsons-01-sticker.png",
  firstName: "La famille",
  lastName: "Simpson",
  nbDonuts: 0
};

const mailSimpsons = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2264-mail-simpsons-sticker.png",
  firstName: "Timbre",
  lastName: "Simpsons",
  nbDonuts: 0
}

const donut = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png",
  firstName: "Donut",
  lastName: "sucré aux sucres",
  nbDonuts: 0
}

const simpsonsFamily2 = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2254-the-simpsons-02-sticker.png",
  firstName: "(2) La famille",
  lastName: "Simpson",
  nbDonuts: 0
}

const hulkHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2249-homer-simpson-the-incredible-homer.png",
  firstName: "Homer",
  lastName: "en mode Hulk",
  nbDonuts: 0
}

const guitarHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
  firstName: "Homer en slibard",
  lastName: "jouant de la guitare",
  nbDonuts: 0
}

const beerHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
  firstName: "Homer",
  lastName: "sous binouze",
  nbDonuts: 0
}

const donutHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png",
  firstName: "Homer",
  lastName: "mangeant son donut",
  nbDonuts: 0
}

const nirvanaBart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2244-bart-simpson-nirvana-nevermind.png",
  firstName: "Bart",
  lastName: "dans l'album de Nirvana (Nevermind)",
  nbDonuts: 0
}

function App() {
  return (
    <>
      <Avatar image={bart.image} firstName={bart.firstName} lastName={bart.lastName} nbDonuts={bart.nbDonuts} />
      <Avatar image={homer.image} firstName={homer.firstName} lastName={homer.lastName} nbDonuts={homer.nbDonuts} />
      <Avatar image={marge.image} firstName={marge.firstName} lastName={marge.lastName} nbDonuts={marge.nbDonuts} />
      <Avatar image={lisa.image} firstName={lisa.firstName} lastName={lisa.lastName} nbDonuts={lisa.nbDonuts} />
      <Avatar image={maggie.image} firstName={maggie.firstName} lastName={maggie.lastName} nbDonuts={maggie.nbDonuts} />
      <Avatar image={simpsonsLogo.image} firstName={simpsonsLogo.firstName} lastName={simpsonsLogo.lastName} nbDonuts={simpsonsLogo.nbDonuts} />
      <Avatar image={simpsonsFamily.image} firstName={simpsonsFamily.firstName} lastName={simpsonsFamily.lastName} nbDonuts={simpsonsFamily.nbDonuts} />
      <Avatar image={mailSimpsons.image} firstName={mailSimpsons.firstName} lastName={mailSimpsons.lastName} nbDonuts={mailSimpsons.nbDonuts} />
      <Avatar image={donut.image} firstName={donut.firstName} lastName={donut.lastName} nbDonuts={donut.nbDonuts} />
      <Avatar image={simpsonsFamily2.image} firstName={simpsonsFamily2.firstName} lastName={simpsonsFamily2.lastName} nbDonuts={simpsonsFamily2.nbDonuts} />
      <Avatar image={hulkHomer.image} firstName={hulkHomer.firstName} lastName={hulkHomer.lastName} nbDonuts={hulkHomer.nbDonuts} />
      <Avatar image={guitarHomer.image} firstName={guitarHomer.firstName} lastName={guitarHomer.lastName} nbDonuts={guitarHomer.nbDonuts} />
      <Avatar image={beerHomer.image} firstName={beerHomer.firstName} lastName={beerHomer.lastName} nbDonuts={beerHomer.nbDonuts} />
      <Avatar image={donutHomer.image} firstName={donutHomer.firstName} lastName={donutHomer.lastName} nbDonuts={donutHomer.nbDonuts} />
      <Avatar image={nirvanaBart.image} firstName={nirvanaBart.firstName} lastName={nirvanaBart.lastName} nbDonuts={nirvanaBart.nbDonuts} />
    </>
  )
}

export default App
