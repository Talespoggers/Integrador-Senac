const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.game.createMany({
    data: [
        { name: "GTA 5", price: 119.99, imageUrl: "/games/jogo-1.jpg", storeLink: "https://www.rockstargames.com/games" },
        { name: "Dark Souls", price: 99.99, imageUrl: "/games/jogo-2.jpg", storeLink: "https://store.steampowered.com/app/211420/DARK_SOULS_Remastered/" },
        { name: "Super Mario 64 (PS2)", price: 79.99, imageUrl: "/games/jogo-3.jpg", storeLink: "https://www.amazon.com.br/dp/B089M6TVY1" },
        { name: "Bioshock", price: 89.99, imageUrl: "/games/jogo-4.jpg", storeLink: "https://store.steampowered.com/app/7670/BioShock/" },
        { name: "Deus Ex: Human Revolution", price: 69.99, imageUrl: "/games/jogo-5.jpg", storeLink: "https://store.steampowered.com/app/238010/Deus_Ex_Human_Revolution/" },
        { name: "Bloodborne (PS2)", price: 59.99, imageUrl: "/games/jogo-6.jpg", storeLink: "https://store.playstation.com/concept/10001545/" },
        { name: "Assassin's Creed 3 (Wii U)", price: 79.99, imageUrl: "/games/jogo-7.jpg", storeLink: "https://www.ubisoft.com/en-us/game/assassins-creed-3/" },
        { name: "Thor: God of Thunder (Xbox 360)", price: 49.99, imageUrl: "/games/jogo-8.jpg", storeLink: "https://www.amazon.com/dp/B003R9YJ4Y" },
        { name: "Age of Empires: The Age of Kings", price: 39.99, imageUrl: "/games/jogo-9.jpg", storeLink: "https://www.microsoft.com/en-us/p/age-of-empires-iii/9p6x99b5b39p" },
        { name: "Slender: The Arrival", price: 29.99, imageUrl: "/games/jogo-10.jpg", storeLink: "https://store.steampowered.com/app/252330/Slender_The_Arrival/" },
        { name: "A.I.L.A", price: 19.99, imageUrl: "/games/jogo-11.jpg", storeLink: "https://www.microsoft.com/en-us/p/aila/9n7w8t1jz8c6" },
        { name: "The Elements", price: 24.99, imageUrl: "/games/jogo-12.jpg", storeLink: "https://www.nintendo.com/store/products/the-elements-switch/" },
        { name: "Dragonheir: Silent Gods", price: 49.99, imageUrl: "/games/jogo-13.jpg", storeLink: "https://www.dragonheir.com" },
        { name: "Nightmares: Little", price: 29.99, imageUrl: "/games/jogo-14.jpg", storeLink: "https://www.games.com/nightmares-little" },
        { name: "Blasphemous", price: 34.99, imageUrl: "/games/jogo-15.jpg", storeLink: "https://store.steampowered.com/app/774361/Blasphemous/" },
        { name: "Lempo", price: 44.99, imageUrl: "/games/jogo-16.jpg", storeLink: "https://www.lempo-game.com" },
        { name: "Recruits", price: 14.99, imageUrl: "/games/jogo-17.jpg", storeLink: "https://store.steampowered.com/app/1234567/Recruits/" },
        { name: "Tales of Arise", price: 79.99, imageUrl: "/games/jogo-18.jpg", storeLink: "https://www.bandainamcoent.com/tales-of-arise" },
        { name: "Succubus: Hunt for Meal", price: 19.99, imageUrl: "/games/jogo-19.jpg", storeLink: "https://www.nintendo.com/store/products/succubus-switch/" },
        { name: "Cestalt: Stem and Cinder", price: 29.99, imageUrl: "/games/jogo-20.jpg", storeLink: "https://www.cestaltgame.com" },
        { name: "Red Dead Redemption 2", price: 149.99, imageUrl: "/games/jogo-21.jpg", storeLink: "https://www.rockstargames.com/reddeadredemption2" },
        { name: "God of War 2", price: 59.99, imageUrl: "/games/jogo-22.jpg", storeLink: "https://store.playstation.com/concept/10001289/" },
        { name: "Until Dawn", price: 44.99, imageUrl: "/games/jogo-23.jpg", storeLink: "https://store.playstation.com/concept/10001813/" },
        { name: "Tabletop Simulator", price: 19.99, imageUrl: "/games/jogo-24.jpg", storeLink: "https://store.steampowered.com/app/286160/Tabletop_Simulator/" },
        { name: "Mortal Kombat Ultimate 11", price: 99.99, imageUrl: "/games/jogo-25.jpg", storeLink: "https://store.steampowered.com/app/976310/Mortal_Kombat_Ultimate/" },
        { name: "Resident Evil 2", price: 59.99, imageUrl: "/games/jogo-26.jpg", storeLink: "https://www.capcom.com/re2" },
        { name: "The Evil Within", price: 34.99, imageUrl: "/games/jogo-27.jpg", storeLink: "https://store.steampowered.com/app/268050/The_Evil_Within/" },
        { name: "The Guild 3", price: 49.99, imageUrl: "/games/jogo-28.jpg", storeLink: "https://store.steampowered.com/app/396560/The_Guild_3/" },
        { name: "Talent Club: Match 3 Puzzle", price: 14.99, imageUrl: "/games/jogo-29.jpg", storeLink: "https://www.talentclub.com" },
        { name: "Hentai Puzzle", price: 9.99, imageUrl: "/games/jogo-30.jpg", storeLink: "https://www.hentaipuzzle.com" }
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
