export type CampaignId = "fo1" | "fo2";
export type Gender = "male" | "female";
export type Special = { ST:number; PE:number; EN:number; CH:number; IN:number; AG:number; LK:number };
export type SkillId = "smallGuns"|"bigGuns"|"energyWeapons"|"unarmed"|"meleeWeapons"|"throwing"|"firstAid"|"doctor"|"sneak"|"lockpick"|"steal"|"traps"|"science"|"repair"|"speech"|"barter"|"outdoorsman";
export type TraitId = string;
export type PerkId = string;
export type CharacterSheet = { id:string; name:string; gender:Gender; campaign:CampaignId; special:Special; skills:Record<SkillId,number>; tagged:SkillId[]; traits:TraitId[]; perks:PerkId[]; xp:number; level:number; skillPoints:number; hitPoints:number; maxHitPoints:number; actionPoints:number; maxActionPoints:number; armorClass:number; carryWeight:number; sequence:number; criticalChance:number };
export const SKILL_IDS:SkillId[]=["smallGuns","bigGuns","energyWeapons","unarmed","meleeWeapons","throwing","firstAid","doctor","sneak","lockpick","steal","traps","science","repair","speech","barter","outdoorsman"];