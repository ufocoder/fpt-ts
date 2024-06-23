import { generateAmmo, generateHealthPack, generateSoldier, generateZombie, generateZombies } from "./generators";

const level: Level = {
  world: {
    colors: {
      top: { r: 0, g: 0, b: 0, a: 255 },
      bottom: { r: 84, g: 98, b: 92, a: 255 },
    },
  },
  music: 'heavy-duty-zoo',
  map: [
    [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4],
    [1, 0, 1, 0, 0, 2, 1, 0, 0, 1, 0, 1, 0, 2, 1, 1, 0, 0, 0, 1, 0, 2, 2, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 2, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1, 2, 2, 0, 1],
    [1, 0, 2, 0, 0, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
  ],
  mapEntities: {
    0: {type:'empty'},
    1: {type:'wall', texture: "TECH_1C" },
    2: {type:'wall', texture: "TECH_1E" },
    3: {type:'wall', texture: "TECH_2F" },
    4: {type:'wall', texture: "DOOR_1A" },
    5: {type:'wall', texture: "DOOR_1E" },
  },
  player: {
    x: 1.5,
    y: 1.5,
    angle: 90,
    health: 100,
  },
  items: [
    generateAmmo(1.5, 9.5, 15),
    generateAmmo(6.5, 3.5, 15),
    generateAmmo(6.5, 5.5, 15),
    generateAmmo(6.5, 7.5, 15),
    generateAmmo(6.5, 9.5, 15),
    generateAmmo(10.5, 1, 20),
    generateAmmo(10.5, 2, 20),
    generateAmmo(10.5, 2.5, 20),
    generateAmmo(10.5, 3, 20),
    generateAmmo(10.5, 3.5, 20),
    generateAmmo(10.5, 4, 20),
    generateAmmo(10.5, 4.5, 20),
    generateAmmo(10.5, 5, 20),
    generateAmmo(10.5, 5.5, 20),
    generateHealthPack(10.5, 6, 100),
  ],
  enemies: [
    generateZombie(1.5, 9.5, 2),
    generateSoldier(6, 1, 3),
    generateSoldier(4.5, 6.5, 4),
    generateSoldier(4.5, 7.5, 4),
    generateSoldier(4.5, 8.5, 4),
    generateSoldier(4.5, 9.5, 4),
    generateSoldier(4.5, 10.5, 4),

    ...generateZombies(15, 4.5, 4.5, 1, 1, 1),
    generateZombie(7, 3.5, 2),
    generateZombie(7, 5.5, 2),
    generateZombie(7, 7.5, 2),
    generateZombie(7, 9.5, 2),
    generateZombie(7, 9.5, 2),
    generateZombie(10.5, 7.5, 2),
    generateZombie(10.5, 9.5, 2),
    generateZombie(12.5, 7.5, 2),
    generateZombie(12.5, 9.5, 2),
    generateZombie(14.5, 7.5, 2),
    generateZombie(14.5, 8.5, 2),
    generateZombie(14.5, 9.5, 2),
    generateZombie(18.5, 1.5, 2),
    generateZombie(18.5, 2.5, 2),
    generateZombie(18.5, 3.5, 2),
    generateZombie(18.5, 4.5, 2),
    ...generateZombies(15, 14.5, 4.5, 1, 1, 2),
    ...generateZombies(25, 18, 5, 1, 1, 2),
    ...generateZombies(25, 17, 7, 1, 1, 2),
    ...generateZombies(15, 16, 8, 1, 1, 2),
    ...generateZombies(50, 17, 2, 1, 1, 2),
  ],
  endingScenario: {
    name:'exit',
    position: {
      x: 22,
      y: 1,
    }
  },
};

export default level;
