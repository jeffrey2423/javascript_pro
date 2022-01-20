import { Singleton } from "./Singleton";

const a = Singleton.getIntance();
const b = Singleton.getIntance();

console.log(a === b);
