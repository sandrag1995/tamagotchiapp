const characterImages = {
    first: "https://tamagotchi-official.com/tamagotchi/jp/character/2023/06/01/vmvwFIfcQhNWer4p/%E3%81%BE%E3%82%81%E3%81%A3%E3%81%A1_%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97%E6%AD%A3%E6%96%B9%E5%BD%A2.png",
    second: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyiiQSMefDdz_k-LdGfVLFG22UoO2LYf5vg&usqp=CAU",
    third: "https://i.pinimg.com/originals/2e/c0/4c/2ec04c82cf5b074a355061d59604012d.png",
    fourth: "https://www.models-resource.com/resources/big_icons/27/26137.png?updated=1530176750"
}

const firstPetEvolutionImages = [
    "https://www.pngitem.com/pimgs/m/337-3373082_marutchi-baby-tamagotchi-character-hd-png-download.png",
    "https://w7.pngwing.com/pngs/542/1020/png-transparent-tamagotchi-64-minna-de-tamagotchi-world-tamagotchi-id-l-tamagotchi-connection-toy-game-photography-smiley-thumbnail.png",
    "https://p1.hiclipart.com/preview/558/943/605/kuchipatchi-mametchi-tamagotchi-kuromametchi-chamametchi-memetchi-tamagotchi-id-character-png-clipart.jpg",
    "https://tamagotchi-official.com/tamagotchi/jp/character/2023/06/01/vmvwFIfcQhNWer4p/%E3%81%BE%E3%82%81%E3%81%A3%E3%81%A1_%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97%E6%AD%A3%E6%96%B9%E5%BD%A2.png",
    "https://i.pinimg.com/474x/32/cb/a8/32cba8ccc177b42d969b724f2506d560.jpg",
    "https://tamagotchi-official.com/tamagotchi/jp/character/2023/06/01/vmvwFIfcQhNWer4p/%E3%81%BE%E3%82%81%E3%81%A3%E3%81%A1_%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97%E6%AD%A3%E6%96%B9%E5%BD%A2.png"
]

const secondPetEvolutionImages = [
    "https://www.pngitem.com/pimgs/m/337-3373082_marutchi-baby-tamagotchi-character-hd-png-download.png",
    "https://w7.pngwing.com/pngs/542/1020/png-transparent-tamagotchi-64-minna-de-tamagotchi-world-tamagotchi-id-l-tamagotchi-connection-toy-game-photography-smiley-thumbnail.png",
    "https://p1.hiclipart.com/preview/558/943/605/kuchipatchi-mametchi-tamagotchi-kuromametchi-chamametchi-memetchi-tamagotchi-id-character-png-clipart.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyiiQSMefDdz_k-LdGfVLFG22UoO2LYf5vg&usqp=CAU",
    "https://i.pinimg.com/474x/32/cb/a8/32cba8ccc177b42d969b724f2506d560.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyiiQSMefDdz_k-LdGfVLFG22UoO2LYf5vg&usqp=CAU"
]

const thirdPetEvolutionImages = [
    "https://www.pngitem.com/pimgs/m/337-3373082_marutchi-baby-tamagotchi-character-hd-png-download.png",
    "https://w7.pngwing.com/pngs/542/1020/png-transparent-tamagotchi-64-minna-de-tamagotchi-world-tamagotchi-id-l-tamagotchi-connection-toy-game-photography-smiley-thumbnail.png",
    "https://p1.hiclipart.com/preview/558/943/605/kuchipatchi-mametchi-tamagotchi-kuromametchi-chamametchi-memetchi-tamagotchi-id-character-png-clipart.jpg",
    "https://i.pinimg.com/originals/2e/c0/4c/2ec04c82cf5b074a355061d59604012d.png",
    "https://i.pinimg.com/474x/32/cb/a8/32cba8ccc177b42d969b724f2506d560.jpg",
    "https://i.pinimg.com/originals/2e/c0/4c/2ec04c82cf5b074a355061d59604012d.png",
]

const fourthPetEvolutionImages = [
    "https://www.pngitem.com/pimgs/m/337-3373082_marutchi-baby-tamagotchi-character-hd-png-download.png",
    "https://w7.pngwing.com/pngs/542/1020/png-transparent-tamagotchi-64-minna-de-tamagotchi-world-tamagotchi-id-l-tamagotchi-connection-toy-game-photography-smiley-thumbnail.png",
    "https://p1.hiclipart.com/preview/558/943/605/kuchipatchi-mametchi-tamagotchi-kuromametchi-chamametchi-memetchi-tamagotchi-id-character-png-clipart.jpg",
    "https://www.models-resource.com/resources/big_icons/27/26137.png?updated=1530176750",
    "https://i.pinimg.com/474x/32/cb/a8/32cba8ccc177b42d969b724f2506d560.jpg",
    "https://www.models-resource.com/resources/big_icons/27/26137.png?updated=1530176750"
]
const rnd = (num) => Math.round(Math.random()*num)

let gameData = {
    image: "",
    xp: 0,
    level: 1,
    hunger: 100,
    eggs: [],
    money: 0
}

function layEgg(randomNumber) {
    if(randomNumber > 70) {
        gameData.eggs.push({
            price: rnd(5) + gameData.level,
            id: Date.now()
        })
    }
}

function levelUp(xp, level) {
    if(xp > 100 && level === 1) return gameData.level = 2
    if(xp > 200 && level === 2) return gameData.level = 3
    if(xp > 300 && level === 3) return gameData.level = 4
    if(xp > 400 && level === 4) return gameData.level = 5
    if(xp > 500 && level === 5) return gameData.level = 6
}

function updateImage(lvl) {
    let evolutionImages;

    switch (lvl) {
        case 1:
            evolutionImages = firstPetEvolutionImages;
            break;
        case 2:
            evolutionImages = secondPetEvolutionImages;
            break;
        case 3:
            evolutionImages = thirdPetEvolutionImages;
            break;
        case 4:
            evolutionImages = fourthPetEvolutionImages;
            break;
        default:
            evolutionImages = firstPetEvolutionImages;
    }

    const randomIndex = Math.floor(Math.random() * evolutionImages.length);
    gameData.image = evolutionImages[randomIndex];
}

setInterval(() => {
    if(!gameData.image) return
    gameData.hunger -= rnd(3)
    gameData.xp += rnd(10) + gameData.level
    layEgg(rnd(100))
    levelUp(gameData.xp, gameData.level)
    updateImage(gameData.level)
}, 1000)


module.exports = {
    selectImage: (num) => {
        if(gameData.image) return false
        if (num === 1) gameData.image = characterImages.first
        if (num === 2) gameData.image = characterImages.second
        if (num === 3) gameData.image = characterImages.third
        if (num === 4) gameData.image = characterImages.fourth

        return gameData
    },
    getData: () => gameData,
    restartGame: () => {
        gameData = {
            image: "",
            xp: 0,
            level: 1,
            hunger: 100,
            eggs: [],
            money: 20
        }
    },
    sellEgg: (id) => {
        console.log()
        const egg = gameData.eggs.find(x => x.id === id)
        gameData.money += egg.price

        gameData.eggs = gameData.eggs.filter(x => x.id !== id)

        return gameData
    },
    feedAnimal: () => {
        if(gameData.money >= 10) {
            gameData.money -= 10
            gameData.hunger += rnd(10)
        }
        return gameData
    }

}