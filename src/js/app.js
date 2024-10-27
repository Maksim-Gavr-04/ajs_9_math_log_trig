import { Magician } from './Characters/Magician';

// TODO: write code here
const player = new Magician('Player', 2);
player.damage(15);
player.levelUp();
player.stoned = true;

console.log('Атака до введения новых правил: ' + player.attack);
console.log('Атака с новыми правилами: ' + player.attackMath);

console.log('app worked!');