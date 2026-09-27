import {Special,SkillId,SKILL_IDS,CharacterSheet} from "./types.js";
export const defaultSpecial=():Special=>({ST:5,PE:5,EN:5,CH:5,IN:5,AG:5,LK:5});
export const clampSpecial=(s:Special):Special=>Object.fromEntries(Object.entries(s).map(([k,v])=>[k,Math.max(1,Math.min(10,Math.round(v)))])) as Special;
export const specialPointTotal=(s:Special)=>s.ST+s.PE+s.EN+s.CH+s.IN+s.AG+s.LK;
export const emptySkills=()=>Object.fromEntries(SKILL_IDS.map(k=>[k,0])) as Record<SkillId,number>;
export function computeDerived(s:Pick<CharacterSheet,"special"|"level"|"perks">){const x=clampSpecial(s.special);return{maxHitPoints:15+2*x.EN+Math.floor(x.ST/2),maxActionPoints:5+Math.floor(x.AG/2)+(s.perks.includes("actionBoy")?1:0),armorClass:x.AG,carryWeight:25+25*x.ST,sequence:2*x.PE,criticalChance:x.LK+1};}
export function buildSkillTotals(s:Special,i:Record<SkillId,number>,tagged:SkillId[]){const out=emptySkills();for(const k of SKILL_IDS)out[k]=(i[k]??0);out.smallGuns+=5+4*s.AG;out.unarmed+=40+2*s.AG+2*s.ST;out.speech+=5*s.CH;out.science+=4*s.IN;for(const k of tagged)out[k]*=2;return out;}
export const levelFromXp=(xp:number)=>Math.max(1,Math.min(25,1+Math.floor(xp/1000)));
export const skillPointsPerLevel=(int:number)=>5+2*int;