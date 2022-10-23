// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */

export const humans: HumanHero[] = [
  new HumanHero(1, "John Doe", "male", 33, 20 ),
  new HumanHero(1, "John Doe", "male", 33, 20),
  new HumanHero(1, "John Doe", "male", 33, 20)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [
  {id:1, name: "t1", wings:0, wheels:4, clan: 'tr'},
  {id:2, name: "t2", wings:0, wheels:4, clan: 'tr'},
  {id:3, name: "t3", wings:0, wheels:4, clan: 'tr'},
];
