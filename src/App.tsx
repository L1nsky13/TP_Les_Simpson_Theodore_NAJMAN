import Avatar from './Avatar.tsx'
import './App.css'

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};

const homer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName: "Simpson"
};

const marge = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
  firstName: "Marge",
  lastName: "Simpson"
};

const lisa = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
  firstName: "Lisa",
  lastName: "Simpson"
};

const maggie = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
  firstName: "Maggie",
  lastName: "Simpson"
};

const simpsonsLogo = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2257-the-simpsons-logo-sticker.png",
  firstName: "Logo",
  lastName: "The Simpsons"
};

const simpsonsFamily = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2253-the-simpsons-01-sticker.png",
  firstName: "La famille",
  lastName: "Simpson"
};

const mailSimpsons = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2264-mail-simpsons-sticker.png",
  firstName: "Timbre",
  lastName: "Simpsons"
}

const donut = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png",
  firstName: "Donut",
  lastName: "sucré aux sucres"
}

const simpsonsFamily2 = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2254-the-simpsons-02-sticker.png",
  firstName: "(2) La famille",
  lastName: "Simpson"
}

const hulkHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2249-homer-simpson-the-incredible-homer.png",
  firstName: "Homer",
  lastName: "en mode Hulk"
}

const guitarHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
  firstName: "Homer en slibard",
  lastName: "jouant de la guitare"
}

const beerHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
  firstName: "Homer",
  lastName: "sous binouze"
}

const donutHomer = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png",
  firstName: "Homer",
  lastName: "mangeant son donut"
}

const nirvanaBart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2244-bart-simpson-nirvana-nevermind.png",
  firstName: "Bart",
  lastName: "dans l'album de Nirvana (Nevermind)"
}

function App() {
  return (
    <>
      <Avatar image={bart.image} firstName={bart.firstName} lastName={bart.lastName} />
      <Avatar image={homer.image} firstName={homer.firstName} lastName={homer.lastName} />
      <Avatar image={marge.image} firstName={marge.firstName} lastName={marge.lastName} />
      <Avatar image={lisa.image} firstName={lisa.firstName} lastName={lisa.lastName} />
      <Avatar image={maggie.image} firstName={maggie.firstName} lastName={maggie.lastName} />
      <Avatar image={simpsonsLogo.image} firstName={simpsonsLogo.firstName} lastName={simpsonsLogo.lastName} />
      <Avatar image={simpsonsFamily.image} firstName={simpsonsFamily.firstName} lastName={simpsonsFamily.lastName} />
      <Avatar image={mailSimpsons.image} firstName={mailSimpsons.firstName} lastName={mailSimpsons.lastName} />
      <Avatar image={donut.image} firstName={donut.firstName} lastName={donut.lastName} />
      <Avatar image={simpsonsFamily2.image} firstName={simpsonsFamily2.firstName} lastName={simpsonsFamily2.lastName} />
      <Avatar image={hulkHomer.image} firstName={hulkHomer.firstName} lastName={hulkHomer.lastName} />
      <Avatar image={guitarHomer.image} firstName={guitarHomer.firstName} lastName={guitarHomer.lastName} />
      <Avatar image={beerHomer.image} firstName={beerHomer.firstName} lastName={beerHomer.lastName} />
      <Avatar image={donutHomer.image} firstName={donutHomer.firstName} lastName={donutHomer.lastName} />
      <Avatar image={nirvanaBart.image} firstName={nirvanaBart.firstName} lastName={nirvanaBart.lastName} />
    </>
  )
}

export default App
