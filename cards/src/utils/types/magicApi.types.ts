// From https://github.com/MagicTheGathering/mtg-sdk-typescript/blob/master/src/IMagic.ts

export type Color = "White" | "Blue" | "Black" | "Red" | "Green";

export type ColorIdentity = "W" | "U" | "B" | "R" | "G";

export type Rarity = 
  | "Basic Land" 
  | "Common" 
  | "Uncommon" 
  | "Mythic Rare" 
  | "Timeshifted" 
  | "Masterpiece";

export type Layout = 
  | "normal" 
  | "split" 
  | "flip" 
  | "double-faced" 
  | "token" 
  | "plane" 
  | "scheme" 
  | "phenomenon" 
  | "leveler" 
  | "vanguard";

export type Legality = "Legal" | "Banned" | "Restricted";

export type SetType = 
  | "core" 
  | "expansion" 
  | "reprint" 
  | "box" 
  | "un" 
  | "from the vault" 
  | "premium deck" 
  | "duel deck" 
  | "starter" 
  | "commander" 
  | "planechase" 
  | "archenemy" 
  | "promo" 
  | "vanguard" 
  | "masters";

export type BoosterCardType = 
  | "marketing" 
  | "land" 
  | "common" 
  | "uncommon" 
  | "rare" 
  | "mythic rare";

export type Booster = (BoosterCardType | BoosterCardType[])[];

export interface BlockLegality {
  format: string;
  legality: Legality;
}

export interface Card {
  name: string;
  manaCost: string;
  cmc: number;
  colors: Color[];
  colorIdentity: ColorIdentity[];
  type: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  rarity: Rarity;
  set: string;
  setName: string;
  artist: string;
  flavor?: string;
  layout: Layout;
  multiverseid: number;
  imageUrl: string;
  variations: number[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: BlockLegality[];
  id: string;
}

export interface CreatureCard extends Card {
  power: string;
  toughness: string;
}

export interface PlaneswalkerCard extends Card {
  loyalty: number;
}

export interface CardFilter {
  name?: string;
  layout?: string;
  cmc?: number;
  colors?: string;
  colorIdentity?: string;
  type?: string;
  supertypes?: string;
  types?: string;
  subtypes?: string;
  rarity?: string;
  set?: string;
  setName?: string;
  text?: string;
  flavor?: string;
  artist?: string;
  number?: string;
  power?: string;
  toughness?: string;
  loyalty?: number;
  foreignName?: string;
  language?: string;
  gameFormat?: string;
  legality?: Legality;
  page?: number;
  pageSize?: number;
  orderBy?: string;
  random?: boolean;
  contains?: string;
}

export interface PaginationFilter {
  page?: number;
  pageSize?: number;
}

export interface SetFilter {
  name?: string;
  block?: string;
}

export interface Set {
  name: string;
  block?: string;
  code: string;
  gathererCode?: string;
  type?: string;
  oldCode?: string;
  magicCardsInfoCode?: string;
  releaseDate: string;
  border: "white" | "black" | "silver";
  expansion: SetType;
  onlineOnly?: true;
  booster?: Booster;
}