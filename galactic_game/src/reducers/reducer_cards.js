// This is our cards reducer file.  It manages the raw data that flows into our app.
// It is exported as 'default' with no name. This module gets it's name on import in the rootReducer file.

// const Cards = [
//     { 
//         name: 'Plasma Bowman',      // 0
//         damage: 2,
//         health: 15,
//         image: require('../assets/PlasmaBowman.png'),
//     },      
//     { 
//         name: 'Roseroot Vertebrate',  // 1
//         damage: 0,
//         health: 6,
//         image: require('../assets/RoserootVertebrate.png'),
//     },  
//     { 
//         name: 'Omnigo Scrapper',               // 2
//         damage: 1,
//         health: 8,
//         image: require('../assets/OmnigoScrapper.png'),
//     },                     
//     {
//         name: 'Atlas Drill',        // 3
//         damage: 3,
//         health: 10,
//         image: require('../assets/AtlasDrill.png'),
//     }          
// ];

// export default Cards;
    
/*export default function () {
    return (
        [
            { 
                name: 'Plasma Bowman',      // 0
                damage: 2,
                health: 15,
                image: require('../assets/PlasmaBowman.png'),
            },      
            { 
                name: 'Roseroot Vertebrate',  // 1
                damage: 0,
                health: 6,
                image: require('../assets/RoserootVertebrate.png'),
            },  
            { 
                name: 'Omnigo Scrapper',               // 2
                damage: 1,
                health: 8,
                image: require('../assets/OmnigoScrapper.png'),
            },                     
            {
                name: 'Atlas Drill',        // 3
                damage: 3,
                health: 10,
                image: require('../assets/AtlasDrill.png'),
            }          
        ]
    )
}*/

// This is our cards reducer file.  It manages the raw data that flows into our app.
// It is exported as 'default' with no name. This module gets it's name on import in the rootReducer file.
export default function () {
     return [
        { 
            name: 'Plasma Bowman',
            energy_cost: 1,
            health: 3,
            damage: 4,
            range: 3,
            image: require('../assets/PlasmaBowman.png'),
            description: 'Once a prodigy marksman, Andrew Hatfield, the Plasma Bowman strayed from his honorable path in search of dominant power. Through a dark and dangerous treatment the bowman infused his body with radioacive plasma, achieving his goal for power but killing Andrew in the process.',
            quantity: 6,
        },
        { 
            name: 'Roseroot Vertebrate',
            energy_cost: 2,
            health: 8,
            damage: 1,
            range: 1,
            image: require('../assets/RoserootVertebrate.png'),
            description: 'A more sinister than pesky organism, typically found deep in the Gigas Forests operating at the top of the food chain. The Roseroot Verebrate attracts injured prey with its soothing aroma, only to unlease its lethal strangling spores, squeezing the life from all those within its proximity.',
            quantity: 3,
        },
        { 
            name: 'Omnigo Scrapper',
            energy_cost: 0,
            health: 2,
            damage: 1,
            range: 1,
            image: require('../assets/OmnigoScrapper.png'),
            description: 'Many believe the Omnigo Scrapper to be a divine totem. The lifeform`s evolution has far surpassed all other known life in the Milky Way. Due to the Omnigo Scrapper`s strange tendency to be spotted throughout the galaxy simultaneously, the elder Manassah Watkins caretaker to the Citadel of Known Fact, concluded that the ancient being must hold an omnipresent existence over the 8th millennium`s spacetime paradox.',
            quantity: 3,
        },               
        { 
            name: 'Wax Gas Grenadier',
            energy_cost: 3,
            health: 4,
            damage: 4,
            range: 2,
            image: require('../assets/WaxGasGrenadier.png'),
            description: 'Famously known as the Magma Sector`s "Bad Boy" Arturo Santana, better known as the Wax Gas Grenadier has terrorized the Galactic Federation for close to two decades. Armed with a slew of lethal pryrotechnics, and a seemingly unlimited supply of precious uranium and soldiers, the Wax Gas Grenadier has sworn the destruction of the opressive Capital Fist.',
            quantity: 4,
        },
        { 
            name: 'Crystal Beam Rover',
            energy_cost: 3,
            health: 6,
            damage: 4,
            range: 2,
            image: require('../assets/CrystalBeamRover.png'),
            description: 'The Galactic Federation`s trademark rolling death machine, and the sole reason why a rock crystal is more valuable than a dragon egg, the Crystal Beam Rover quickly became one of the most capable small warmachines in existence, ever since it first surfaced during the Daimond Strip Raids of the late 4th millennium.',
            quantity: 2,
        },
        { 
            name: 'Electromagnetic Ray Cannon',
            energy_cost: 3,
            health: 4,
            damage: 8,
            range: 3,
            image: require('../assets/EMRCannon.png'),
            description: 'Fate dealt the Potonics a cruel existence upon The Great White Dwarf Star. Bitter toward all life, the Potonics with their blistered skin and empty eyeholes sought out to harness the grousome radiation responsible for their low quality of life. With the goal to project their suffering on all other life in the Milky Way, the Potonics developed the truly frightening Electromagnetic Ray Cannon. Forged with fire and hatred, an Electromagnetic Ray Cannon is capable of obliterating small planets and completly erasing entire civilizations.',
            quantity: 2,
        },
        { 
            name: 'Atlas Drill',
            energy_cost: 1,
            health: 8,
            damage: 0,
            range: 0,
            image: require('../assets/AtlasDrill.png'),
            description: 'During the Black Reconstruction Era brought on by the Man Wraiths conquest in the early 6th millennium. Ruthless business tycoon Claudio Villani, commissioned the Metal Bending Lazaks of Zenobane 9 to construct him a planet-busting excavator so massive it could extract all meaningful minerals from an entire world in mere seconds. Enter Atlas Drill, this behemoth single handedly erradicated two thirds of the Milky Way over Claudio`s thirty year mineral piracy conquest.',
            quantity: 6,
        },
        { 
            name: 'Dragon Draw Festival',
            energy_cost: 2,
            health: 0,
            damage: 0,
            range: 0,
            image: require('../assets/DragonDrawFestival.png'),
            description: 'Through its 10 millennia since the Dawn of the Technological Age, the Milky Way has seen its fair share of blood and fire, death and light. Yet through it all, that little planet in the First Rank Solar System ER14A or better known as Earth, has stood strong. This is thanks entirely to the divine intervention of the Man Born Dragon, Jake DeMonaco. The divine beast resides just out of Earth`s atmosphere, wrapping his titanic body around ER14A to protect his fellow man from harm, for the rest of eternity. Every year on the Summer Solstice, a worldwide festival is held in honor of the Great Dragon Jake to pay tribute to eternal service.',
            quantity: 4,
        },
        { 
            name: 'Meteor Strike',
            energy_cost: 3,
            health: 0,
            damage: 0,
            range: 0,
            image: require('../assets/MeteorStrike.png'),
            description: 'Far off from all humanity, residing in the deep dark abyss of the Andromeda Sector of the Milky Way, a World-Eater by the name of Nurul Alam sits on his towering Throne of Bones. There is no life for Nurul, there is no death. Ever since the dawn of existence the World-Eater has sat upon his Throne of Bones hurtling pebbles over his shoulder through the black space he stares out into. Nurul`s pebbles crash into unexpecting planets as colossal meteor strikes. The World-Eater oblivous to the fact he is a henchman of Fate, will carry on long after the rest of us fade away.',
            quantity: 2,
        },               
    ];
}