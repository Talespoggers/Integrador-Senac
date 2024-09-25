const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.game.createMany({
    data: [
      { name: "GTA 5", price: 119.99, imageUrl: "/games/jogo-1.jpg", storeLink: "https://loja.com/gta5" },
      { name: "Dark Souls", price: 99.99, imageUrl: "/games/jogo-2.jpg", storeLink: "https://loja.com/darksouls" },
      { name: "Super Mario 64 (PS2)", price: 79.99, imageUrl: "/games/jogo-3.jpg", storeLink: "https://loja.com/supermario64" },
      { name: "Bioshock", price: 89.99, imageUrl: "/games/jogo-4.jpg", storeLink: "https://loja.com/bioshock" },
      { name: "Deus Ex: Human Revolution", price: 69.99, imageUrl: "/games/jogo-5.jpg", storeLink: "https://loja.com/deusex" },
      { name: "Bloodborne (PS2)", price: 59.99, imageUrl: "/games/jogo-6.jpg", storeLink: "https://loja.com/bloodborne" },
      { name: "Assassin's Creed 3 (Wii U)", price: 79.99, imageUrl: "/games/jogo-7.jpg", storeLink: "https://loja.com/ac3" },
      { name: "Thor: God of Thunder (Xbox 360)", price: 49.99, imageUrl: "/games/jogo-8.jpg", storeLink: "https://loja.com/thor" },
      { name: "Age of Empires: The Age of Kings", price: 39.99, imageUrl: "/games/jogo-9.jpg", storeLink: "https://loja.com/ageofempires" },
      { name: "Slender: The Arrival", price: 29.99, imageUrl: "/games/jogo-10.jpg", storeLink: "https://loja.com/slender" },
      { name: "A.I.L.A", price: 19.99, imageUrl: "/games/jogo-11.jpg", storeLink: "https://loja.com/aila" },
      { name: "The Elements", price: 24.99, imageUrl: "/games/jogo-12.jpg", storeLink: "https://loja.com/elements" },
      { name: "Dragonheir: Silent Gods", price: 49.99, imageUrl: "/games/jogo-13.jpg", storeLink: "https://loja.com/dragonheir" },
      { name: "Nightmares: Little", price: 29.99, imageUrl: "/games/jogo-14.jpg", storeLink: "https://loja.com/nightmares" },
      { name: "Blasphemous", price: 34.99, imageUrl: "/games/jogo-15.jpg", storeLink: "https://loja.com/blasphemous" },
      { name: "Lempo", price: 44.99, imageUrl: "/games/jogo-16.jpg", storeLink: "https://loja.com/lempo" },
      { name: "Recruits", price: 14.99, imageUrl: "/games/jogo-17.jpg", storeLink: "https://loja.com/recruits" },
      { name: "Tales of Arise", price: 79.99, imageUrl: "/games/jogo-18.jpg", storeLink: "https://loja.com/talesofarise" },
      { name: "Succubus: Hunt for Meal", price: 19.99, imageUrl: "/games/jogo-19.jpg", storeLink: "https://loja.com/succubus" },
      { name: "Cestalt: Stem and Cinder", price: 29.99, imageUrl: "/games/jogo-20.jpg", storeLink: "https://loja.com/cestalt" },
      { name: "Red Dead Redemption 2", price: 149.99, imageUrl: "/games/jogo-21.jpg", storeLink: "https://loja.com/rdr2" },
      { name: "God of War 2", price: 59.99, imageUrl: "/games/jogo-22.jpg", storeLink: "https://loja.com/godofwar2" },
      { name: "Until Dawn", price: 44.99, imageUrl: "/games/jogo-23.jpg", storeLink: "https://loja.com/untildawn" },
      { name: "Tabletop Simulator", price: 19.99, imageUrl: "/games/jogo-24.jpg", storeLink: "https://loja.com/tabletop" },
      { name: "Mortal Kombat Ultimate 11", price: 99.99, imageUrl: "/games/jogo-25.jpg", storeLink: "https://loja.com/mk11" },
      { name: "Resident Evil 2", price: 59.99, imageUrl: "/games/jogo-26.jpg", storeLink: "https://loja.com/residentevil2" },
      { name: "The Evil Within", price: 34.99, imageUrl: "/games/jogo-27.jpg", storeLink: "https://loja.com/theevilwithin" },
      { name: "The Guild 3", price: 49.99, imageUrl: "/games/jogo-28.jpg", storeLink: "https://loja.com/theguild3" },
      { name: "Talent Club: Match 3 Puzzle", price: 14.99, imageUrl: "/games/jogo-29.jpg", storeLink: "https://loja.com/talentclub" },
      { name: "Hentai Puzzle", price: 9.99, imageUrl: "/games/jogo-30.jpg", storeLink: "https://loja.com/hentaipuzzle" }
  ],
  });
}

main()
  .then(() => console.log('Seeding completed!'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
