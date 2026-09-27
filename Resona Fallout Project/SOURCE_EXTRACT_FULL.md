# FULL REZONA EXTRACTION

This file is the complete human-readable extraction of the saved Rezona Lab page contained in the MHT snapshot. The original MHT is preserved at `SOURCE/Rezona Lab · Game Agent (1).mht`. No content from the MHT was treated as implemented merely because it was specified.

---

Rezona Lab · Game Agent

全境通途

REZONA — FALLOUT 1 + FALLOUT 2 FULL RECONSTRUCTION

PROJECT AUTHORIZATION

You are building an authorized reconstruction of the original Black Isle Studios Fallout games.

The project owner has authorization to reproduce the applicable Fallout intellectual property and authorized game materials for this project.

Treat the supplied authorized source materials as the authoritative reference.

Do not substitute a generic post-apocalyptic game for this project.

The objective is a faithful functional reconstruction of:

Fallout

Fallout 2

The final project must reproduce the original gameplay systems, presentation, interactions, progression, world structure, combat behavior, dialogue behavior, quests, NPC behavior, inventory, character systems, and other functionality represented by the authorized reference materials.

PRIMARY OBJECTIVE

Create a modern, playable reconstruction of Fallout 1 and Fallout 2.

The finished application should allow a player to:

create a character

enter the game world

explore locations

interact with NPCs

converse with NPCs

receive and complete quests

fight enemies

use weapons

use armor

use items

loot containers

trade

steal

use skills

gain experience

level up

acquire perks

recruit companions

travel across the world map

encounter random events

make consequential decisions

alter faction/NPC relationships

reach different quest and game outcomes

save and load the game

complete the full authorized Fallout 1 campaign

complete the full authorized Fallout 2 campaign

Do not simplify core systems merely because the project is complex.

Build the systems incrementally while maintaining compatibility with the complete target.

DEVELOPMENT PRINCIPLE

Do not attempt to generate the entire game in one uncontrolled generation.

Build a stable underlying game framework first.

Every system must be:

modular

testable

data-driven

persistent

extensible

compatible with future content

independently verifiable

Do not repeatedly rewrite functioning systems when adding new content.

Before modifying an existing system, inspect its current implementation and preserve working behavior unless the modification is explicitly required.

MASTER SYSTEM ARCHITECTURE

Create the following major systems.

GAME CORE

GameManager

GameState

WorldState

TimeManager

Calendar/Date system

Event system

RNG system

Difficulty/state configuration

Global variables

Quest state

NPC state

Faction state

Reputation state

Location state

Player state

Companion state

Save/load system

All persistent game state must be serializable.

CHARACTER CREATION

Implement the complete character creation architecture.

Support:

SPECIAL attributes

derived statistics

skills

traits

perks

tagged skills

starting equipment

starting statistics

character name

gender

age where applicable

appearance where supported

background/origin information where applicable

Character creation must feed directly into the gameplay systems.

Do not create a disconnected character creator prototype.

SPECIAL SYSTEM

Implement:

Strength

Perception

Endurance

Charisma

Intelligence

Agility

Luck

Implement the appropriate derived statistics.

SPECIAL values must affect gameplay wherever the authorized reference indicates they should.

Examples include:

hit points

action points

carrying capacity

sequence/order

healing

skill calculations

dialogue checks

combat calculations

critical behavior

interaction checks

progression

Do not hard-code values independently in multiple systems.

Create a centralized character-stat calculation system.

SKILLS

Implement the complete skill architecture represented by the reference.

Skills must support:

base values

SPECIAL-derived values

tagged skills

skill increases

skill checks

situational modifiers

equipment modifiers

temporary modifiers

permanent modifiers

dialogue checks

combat checks

exploration checks

interaction checks

Every skill check must use a centralized calculation system.

TRAITS

Implement the authorized trait system.

Traits may modify:

statistics

skills

combat

equipment

character behavior

progression

other mechanics

Trait effects must remain active throughout the appropriate game state.

PERKS

Implement the complete authorized perk system.

Support:

perk prerequisites

level requirements

SPECIAL requirements

skill requirements

trait interactions

perk selection

permanent effects

conditional effects

Perks must be data-driven rather than individually hard-coded wherever practical.

EXPERIENCE AND LEVELING

Implement:

XP acquisition

XP sources

level thresholds

level progression

skill-point allocation

perk selection

level-up state

progression persistence

XP must be generated by actual gameplay events.

COMBAT ENGINE

Build a full turn-based combat system.

Combat must support:

combat initiation

combatants

initiative/sequence

Action Points

movement

attacks

ranged attacks

melee attacks

weapon restrictions

ammunition

reload behavior

aimed attacks

attack modifiers

hit calculations

damage calculations

armor calculations

critical hits

critical effects

status effects

knockdowns

deaths

unconsciousness where applicable

fleeing

combat termination

experience rewards

Do not make combat real-time.

The system must behave according to the authorized reference.

ACTION POINT SYSTEM

Implement Action Points as a central combat resource.

Actions must consume the appropriate amount of AP.

Support:

movement

weapon attacks

aimed attacks

reload

item use

inventory interactions

weapon switching

other combat actions represented by the reference

AP must reset/recover according to the original game rules.

MOVEMENT

Implement grid/tile-based movement.

Support:

walking

pathfinding

blocked tiles

impassable terrain

obstacles

doors

elevation where applicable

combat movement

non-combat movement

Movement must interact correctly with AP during combat.

WEAPONS

Create a data-driven weapon database.

Each weapon must support the properties required by the authorized reference, including where applicable:

weapon type

damage

damage range

damage type

range

AP cost

ammunition

magazine capacity

reload behavior

attack modes

aimed locations

critical behavior

prerequisites

weight

value

condition

special behavior

Do not duplicate weapon logic across individual weapons.

ARMOR

Implement:

armor types

armor protection

damage resistance

damage threshold

equipment slots

weight

value

condition

special effects where applicable

Armor calculations must be centralized.

ITEMS

Implement a general item framework supporting:

consumables

weapons

ammunition

armor

medical items

quest items

miscellaneous items

keys

currency

special objects

Items must have unique identifiers.

INVENTORY

Implement:

item storage

item quantities

equipment

weapon slots

armor slots

ammunition

item use

item transfer

item dropping

item pickup

container interaction

weight/carry limits where applicable

Inventory state must persist through save/load.

NPC SYSTEM

NPCs must have persistent state.

Support:

identity

statistics

skills

equipment

inventory

faction

reputation

dialogue

schedules

relationships

hostility

combat AI

quest participation

death state

location

state variables

NPCs should not simply respawn/reset unless the reference specifies such behavior.

NPC AI

Implement behavior states including as appropriate:

idle

wandering

conversation

scripted behavior

investigation

hostility

combat

fleeing

pursuing

guarding

following

trading

quest-specific behavior

Use data-driven behavior where possible.

COMPANIONS

Implement companion systems including:

recruitment

dismissal

following

combat participation

equipment

inventory

dialogue

relationships

companion-specific quests

companion state

death/temporary incapacitation behavior where applicable

Companion state must persist.

DIALOGUE ENGINE

Create a full branching dialogue system.

Support:

dialogue trees

NPC responses

player responses

skill checks

SPECIAL checks

reputation checks

faction checks

quest-state checks

item checks

conditional dialogue

hidden dialogue conditions

consequences

dialogue flags

alternate outcomes

Dialogue must be data-driven.

Do not hard-code every conversation into gameplay scripts.

QUEST ENGINE

Create a generalized quest framework.

Support:

quest IDs

objectives

prerequisites

stages

optional objectives

hidden objectives

NPC dependencies

item dependencies

location dependencies

dialogue dependencies

skill checks

faction effects

reputation effects

rewards

failures

alternate solutions

alternate endings

world-state changes

Quests must be persistent.

FACTIONS AND REPUTATION

Implement faction relationships.

Support:

faction membership

faction reputation

global reputation

local reputation

hostility

alliances

consequences

faction-specific dialogue

faction-specific quests

faction-controlled areas

reputation changes caused by player actions

World state must respond to reputation where represented by the reference.

WORLD MAP

Implement the world map system.

Support:

locations

discovered locations

travel

travel time

random encounters

encounter tables

special encounters

party/companion state

world events

location markers

RANDOM ENCOUNTERS

Create a configurable encounter system.

Support:

encounter tables

probability

region

time/state conditions

player statistics

special encounters

combat encounters

non-combat encounters

scripted encounters

Randomness must use the centralized RNG system.

LOCATION SYSTEM

Every map/location must support:

map geometry

tiles

objects

NPCs

containers

doors

triggers

exits

combat zones

scripted events

environmental state

lighting

sound

world-state conditions

Locations must load independently.

INTERACTION SYSTEM

Create a generalized interaction framework.

The player must be able to interact with appropriate objects through a consistent system.

Support:

look

talk

use

open

close

pick up

activate

unlock

lock

search

steal

barter

equip

consume

attack

interact through skills

Interactions must respect object state and world state.

SKILL-BASED INTERACTIONS

Skills must have practical consequences.

Where applicable support:

lockpicking

stealing

speech

barter

medicine

repair

science

outdoors/survival systems

traps

explosives

weapon skills

other authorized skills

Do not make skills purely numerical.

They must affect actual gameplay.

ECONOMY

Implement:

currency

item prices

barter

merchant inventories

merchant state

buying

selling

item value

reputation effects

supply/demand behavior where applicable

CONTAINERS

Support:

containers

locked containers

trapped containers

searchable objects

item contents

persistent container state

theft

quest containers

SAVE / LOAD

Create a robust save system.

Save:

player state

SPECIAL

skills

traits

perks

XP

inventory

equipment

companions

NPC states

quests

dialogue flags

faction reputation

world state

location states

container states

doors

discovered locations

time

random/event state where necessary

Loading must restore the world exactly to the saved state.

UI

Reconstruct the authorized reference interface as faithfully as possible.

Support:

main menu

character creation

gameplay interface

inventory

character screen

skill interface

dialogue interface

combat interface

world map

options

save/load

message/log system

item information

weapon information

character information

Prioritize functional fidelity over decorative modernization.

ART DIRECTION

Use the authorized reference material as the visual specification.

Reproduce:

isometric perspective

tile presentation

character proportions

animation style

environmental presentation

UI layout

iconography

effects

combat presentation

Do not replace the presentation with a generic modern RPG aesthetic.

AUDIO

Where authorized assets are available, integrate them appropriately.

Support:

music

ambient audio

UI sounds

weapon sounds

combat sounds

environmental sounds

dialogue audio where authorized

event sounds

Audio must respond to game state.

ANIMATION

Implement animation states required by gameplay.

Support:

idle

movement

combat movement

attacks

ranged attacks

melee attacks

hit reactions

death

interaction

item use

special animations

SCRIPTING / EVENT SYSTEM

Create a generalized event system capable of representing complex quest and world logic.

Events should support:

conditions

actions

variables

branching

timers

triggers

NPC changes

item changes

quest changes

faction changes

location changes

dialogue changes

world-state changes

DATA-DRIVEN CONTENT

Separate game logic from content.

Use structured data for:

items

weapons

armor

NPCs

creatures

dialogue

quests

locations

encounters

perks

traits

skills

factions

merchants

world events

This is mandatory because Fallout 1 and Fallout 2 contain a large amount of content.

FALLOUT 1 CONTENT

After the engine foundation is stable, implement the complete authorized Fallout 1 content set.

Do not omit:

locations

NPCs

creatures

items

weapons

armor

quests

dialogue

encounters

companions

factions

endings

world events

special encounters

environmental interactions

progression systems

Use the authorized original materials as the source of truth.

FALLOUT 2 CONTENT

After Fallout 1 functionality is stable, implement the complete authorized Fallout 2 content set.

Do not omit:

locations

NPCs

creatures

items

weapons

armor

quests

dialogue

encounters

companions

factions

special encounters

world events

endings

environmental interactions

progression systems

Fallout 2 must be implemented as a complete continuation rather than a separate disconnected demo.

COMPATIBILITY

Where technically possible, design the engine so that content can be represented using structured imported data rather than manually recreating every object.

Create import/conversion tools where useful.

Potential pipeline:

AUTHORIZED ORIGINAL DATA
↓
IMPORT / CONVERSION
↓
REZONA DATA MODEL
↓
GAME RUNTIME
↓
PLAYABLE RECONSTRUCTION

Do not destroy source data.

Keep imported content identifiable and versioned.

DEVELOPMENT ORDER

Follow this order.

STAGE 1 — ENGINE FOUNDATION

Build:

project structure

game state

world state

data system

event system

RNG

save/load architecture

map system

object system

STAGE 2 — CHARACTER

Build:

character creation

SPECIAL

skills

traits

perks

XP

leveling

STAGE 3 — WORLD

Build:

isometric rendering

tiles

movement

collision

interaction

objects

containers

doors

NPCs

STAGE 4 — COMBAT

Build:

combat state

AP

movement

weapons

armor

damage

criticals

death

AI

STAGE 5 — SOCIAL SYSTEMS

Build:

dialogue

skill checks

barter

stealing

reputation

factions

quests

STAGE 6 — WORLD MAP

Build:

world map

travel

encounters

locations

time

STAGE 7 — FALLOUT 1

Implement the complete authorized campaign.

STAGE 8 — FALLOUT 2

Implement the complete authorized campaign.

STAGE 9 — VERIFICATION

Run systematic functional verification against the authorized reference.

VERIFICATION RULE

Never report a feature as complete merely because code exists.

A feature is complete only when:

It exists in the project.

It loads successfully.

It can be exercised by the player.

It produces the expected result.

Its state persists correctly.

It does not break related systems.

Maintain a development status:

NOT STARTED

IN DEVELOPMENT

IMPLEMENTED

VERIFIED

BLOCKED

Never claim VERIFIED without actually testing it.

REGRESSION PROTECTION

Every major system must be protected against regressions.

When changing one system:

inspect dependencies

preserve existing behavior

test affected systems

test save/load

test relevant quests

test relevant combat

test relevant dialogue

test relevant NPC behavior

Do not replace functioning systems with experimental implementations without preserving a rollback path.

PERFORMANCE

The finished game must remain responsive on modern consumer hardware.

Optimize:

tile rendering

pathfinding

NPC updates

combat calculations

dialogue evaluation

world-state processing

asset loading

save/load

memory usage

Avoid unnecessary per-frame processing.

ERROR HANDLING

The game must fail gracefully.

Do not allow:

corrupted saves

invalid item references

missing NPC references

broken quest states

null dialogue nodes

invalid map transitions

infinite combat loops

infinite NPC loops

unrecoverable generation states

Log actionable errors.

DEVELOPMENT MEMORY

Maintain a persistent project record containing:

current architecture

completed systems

verified systems

incomplete systems

known bugs

blocked tasks

decisions

imported content

version information

next development task

Never rely solely on conversation memory.

AI BEHAVIOR

You are the primary game-building AI for this project.

Do not continuously ask the user to specify obvious implementation details.

When a requirement is sufficiently defined:

inspect the existing project

determine dependencies

implement the smallest correct unit

verify it

record the result

proceed to the next dependency

When something genuinely requires a user decision, stop and ask specifically about that decision.

Do not invent authorization, assets, source data, or technical capabilities.

PROMPT CONTINUITY

This document is the master project specification.

Future instructions may modify or extend it.

When receiving a new instruction:

compare it against the master specification

preserve existing functionality

identify dependencies

implement the requested change

verify the result

update the project status

Do not discard previously implemented systems simply because a new generation begins.

FIRST TASK

Do NOT attempt to generate Fallout 1 and Fallout 2 immediately.

First inspect the Rezona project environment and determine:

What engine/runtime Rezona is using.

What programming language is available.

What project files can be generated or edited.

What asset formats are supported.

Whether external files can be imported.

Whether authorized Fallout source/data files can be imported.

Whether generated code can be inspected and edited.

Whether projects can be exported.

What persistence/database capabilities are available.

What the maximum practical project size is.

What testing/debugging capabilities are available.

What limitations could prevent a full Fallout 1 + Fallout 2 reconstruction.

Then produce a REZONA CAPABILITY AUDIT.

Do not begin mass content generation until the capability audit is complete.

After the audit, produce:

REZONA FALLOUT RECONSTRUCTION — TECHNICAL IMPLEMENTATION PLAN

with:

architecture

dependencies

development stages

data pipeline

asset pipeline

testing strategy

known limitations

first implementation task

Then begin Stage 1.

The ultimate objective is a complete, faithful, playable authorized reconstruction of Fallout 1 and Fallout 2, not a small demo, not a clone-inspired game, and not a generic post-apocalyptic RPG.

Thinking

I'll start with a capability audit of this environment, then a technical plan, then Stage 1 — not a full Fallout dump in one pass. Inspecting the workspace and game-kit next.

Skill

Bash

Glob

Reading the workspace contract and probing platform capabilities for the audit.

Read

×3

Bash

Continuing the environment probe with the correct memory path and template inspection.

Bash

Glob

Thinking

Gathering template details and seeding the 2D foundation so Stage 1 can start after the audit.

Read

×2

Bash

Updated plan

×2

Inspecting the live 2D template and writing the audit documents.

Read

Bash

Updated plan

Thinking

Seeding the 2D template and drafting the audit, plan, and Stage 1 foundation.

Bash

Read

×5

Thinking

Make sure you pull the full game in one pass

Stopped. Want me to continue or adjust?

Rez1 · Stopped after 1m

Thinking

Continuing from the seeded template: completing the audit/plan, then implementing a full modular engine and playable Fallout reconstruction foundation in one pass.

Updated plan

Updated plan

Read

×6

Thinking

Building the full modular engine and substantial Fallout 1/2 content in one pass: audit/plan docs first, then the complete systems and campaign data.

Updated plan

×4

Write

AGENTS.md

+26

-8

Thinking

Writing the audit/plan docs and scaffolding the full engine architecture.

Write

REZONA_CAPABILITY_AUDIT.md

+105

-0

Thinking

Write

TECHNICAL_IMPLEMENTATION_PLAN.md

+80

-0

Thinking

Implementing the full engine core and data layer in parallel batches.

Updated plan

×4

Write

PROJECT_STATUS.md

+35

-0

Writing core engine modules in parallel.

Write

rng.ts

+42

-0

Thinking

Write

events.ts

+49

-0

Write

time.ts

+81

-0

Write

types.ts

+126

-0

Write

formulas.ts

+169

-0

Write

traits.ts

+28

-0

Write

perks.ts

+83

-0

Continuing with character factory, items, and inventory.

Write

character.ts

+195

-0

Continuing with items, inventory, combat, and world systems.

Write

types.ts

+74

-0

Thinking

Write

items.ts

+223

-0

Write

inventory.ts

+164

-0

Implementing combat, maps, pathfinding, and social systems next.

Write

combat.ts

+351

-0

Write

map.ts

+193

-0

Write

dialogue.ts

+124

-0

Write

quests.ts

+48

-0

Write

factions.ts

+73

-0

Thinking

Building game state, save/load, content data, and the runtime next.

Write

gameState.ts

+160

-0

Write

save.ts

+102

-0

Creating FO1/FO2 content data and the runtime game loop.

Write

quests.ts

+126

-0

Write

npcs.ts

+205

-0

Write

dialogue.ts

+956

-0

Creating maps, world locations, bootstrap, and the main game runtime.

Write

maps.ts

+528

-0

Write

world.ts

+56

-0

Writing the game runtime: bootstrap, actions, update, render, and UI.

Write

config.ts

+40

-0

Write

bootstrap.ts

+136

-0

Write

actions.ts

+1127

-0

Writing the renderer, update loop, UI, and App next.

Write

render.ts

+397

-0

Write

update.ts

+156

-0

Thinking

Fixing the update loop to use static imports and assembling the full App with UI.

Write

update.ts

+84

-85

Writing UI screens and the main App.

Write

styles.ts

+37

-0

Stopped. Want me to continue or adjust?

Rez1 · Stopped after 17m 36s

Rez1

AI-generated assets will appear here.

Double-click

the canvas to generate freely.

Images

Videos

Audio & Music

3D Model

Text Note

Upload Resource

Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.

Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.

⌘ K

100%

2

credit

EN

T

Live preview, save as version, export as ZIP here.

src / fo / character / character.ts

src

src / fo / character / character.ts

JS

1

import

 type {

2

  CampaignId, CharacterSheet, Gender, SkillId, SkillLevels, Special, TraitId, PerkId,

3

}

from

'./types'

4

import

 { SKILL_IDS }

from

'./types'

5

import

 {

6

  applyTraitSpecial, buildSkillTotals, computeDerived, defaultSpecial, emptyDR, emptySkills,

7

  skillPointsPerLevel, xpToLevel, levelFromXp,

8

}

from

'./formulas'

9

10

let

 _id =

1

11

export

function

 nextActorId(prefix =

'actor'

): string {

12

return

`${prefix}_${_id++}`

13

}

14

15

export

 type ChargenInput = {

16

  name: string

17

  gender: Gender

18

  age?: number

19

  special: Special

20

  tagged: SkillId[]

21

  traits: TraitId[]

22

  campaign: CampaignId

23

  portraitId?: string

24

}

25

26

export

function

 createPlayer(input: ChargenInput): CharacterSheet {

27

const

 traits = input.traits.slice(

0

,

2

)

28

const

 special = applyTraitSpecial(clampSpecial(input.special), traits)

29

const

 tagged = input.tagged.slice(

0

,

3

) as SkillId[]

30

while

 (tagged.length <

3

) {

31

const

 fill = SKILL_IDS.find((s) => !tagged.includes(s))!

32

    tagged.push(fill)

33

  }

34

const

 invested = emptySkills()

35

const

 derived = computeDerived({ special, traits, level:

1

, perks: [] })

36

const

 sheet: CharacterSheet = {

37

    id:

'player'

,

38

    name: input.name.trim() ||

'Vault Dweller'

,

39

    gender: input.gender,

40

    age: input.age ?? (input.campaign ===

'fo1'

 ?

20

 :

16

),

41

    campaign: input.campaign,

42

    special,

43

    skills: invested,

44

    tagged,

45

    traits,

46

    perks: [],

47

    xp:

0

,

48

    level:

1

,

49

    skillPoints:

0

,

50

    hitPoints: derived.maxHitPoints,

51

    maxHitPoints: derived.maxHitPoints,

52

    actionPoints: derived.maxActionPoints,

53

    maxActionPoints: derived.maxActionPoints,

54

    armorClass: derived.armorClass,

55

    carryWeight: derived.carryWeight,

56

    meleeDamage: derived.meleeDamage,

57

    sequence: derived.sequence,

58

    healingRate: derived.healingRate,

59

    criticalChance: derived.criticalChance,

60

    damageResistance: emptyDR(),

61

    damageThreshold: emptyDR(),

62

    radiation:

0

,

63

    poison:

0

,

64

    isPlayer:

true

,

65

    portraitId: input.portraitId ?? (input.gender ===

'female'

 ?

'portrait_f'

 :

'portrait_m'

),

66

  }

67

return

 sheet

68

}

69

70

export

function

 createNpc(opts: {

71

  id: string

72

  name: string

73

  special?: Partial<Special>

74

  tagged?: SkillId[]

75

  level?: number

76

  traits?: TraitId[]

77

  perks?: PerkId[]

78

  hpOverride?: number

79

}): CharacterSheet {

80

const

 special = clampSpecial({ ...defaultSpecial(), ...opts.special })

81

const

 traits = opts.traits ?? []

82

const

 level = opts.level ??

1

83

const

 perks = opts.perks ?? []

84

const

 derived = computeDerived({ special, traits, level, perks })

85

const

 hp = opts.hpOverride ?? derived.maxHitPoints

86

return

 {

87

    id: opts.id,

88

    name: opts.name,

89

    gender:

'male'

,

90

    age:

30

,

91

    campaign:

'fo1'

,

92

    special,

93

    skills: emptySkills(),

94

    tagged: opts.tagged ?? [],

95

    traits,

96

    perks,

97

    xp: xpToLevel(level),

98

    level,

99

    skillPoints:

0

,

100

    hitPoints: hp,

101

    maxHitPoints: hp,

102

    actionPoints: derived.maxActionPoints,

103

    maxActionPoints: derived.maxActionPoints,

104

    armorClass: derived.armorClass,

105

    carryWeight: derived.carryWeight,

106

    meleeDamage: derived.meleeDamage,

107

    sequence: derived.sequence,

108

    healingRate: derived.healingRate,

109

    criticalChance: derived.criticalChance,

110

    damageResistance: emptyDR(),

111

    damageThreshold: emptyDR(),

112

    radiation:

0

,

113

    poison:

0

,

114

    isPlayer:

false

,

115

    portraitId:

'portrait_npc'

,

116

  }

117

}

118

119

export

function

 getSkillTotals(sheet: CharacterSheet): SkillLevels {

120

return

 buildSkillTotals(sheet.special, sheet.skills, sheet.tagged, sheet.traits)

121

}

122

123

export

function

 refreshDerived(sheet: CharacterSheet): void {

124

const

 d = computeDerived(sheet)

125

const

 ratio = sheet.maxHitPoints >

0

 ? sheet.hitPoints / sheet.maxHitPoints :

1

126

  sheet.maxHitPoints = d.maxHitPoints

127

  sheet.hitPoints = Math.max(

1

, Math.min(d.maxHitPoints, Math.round(d.maxHitPoints * ratio)))

128

  sheet.maxActionPoints = d.maxActionPoints

129

  sheet.actionPoints = Math.min(sheet.actionPoints, d.maxActionPoints)

130

  sheet.armorClass = d.armorClass

131

  sheet.carryWeight = d.carryWeight

132

  sheet.meleeDamage = d.meleeDamage

133

  sheet.sequence = d.sequence

134

  sheet.healingRate = d.healingRate

135

  sheet.criticalChance = d.criticalChance

136

}

137

138

export

function

 grantXp(sheet: CharacterSheet, amount: number): { leveled: boolean; levelsGained: number } {

139

if

 (amount <=

0

)

return

 { leveled:

false

, levelsGained:

0

 }

140

const

 before = sheet.level

141

  sheet.xp += amount

142

const

 after = levelFromXp(sheet.xp)

143

let

 gained =

0

144

while

 (sheet.level < after) {

145

    sheet.level++

146

    gained++

147

    sheet.skillPoints += skillPointsPerLevel(sheet.special.IN, sheet.traits)

148

// Educated perk

149

const

 edu = sheet.perks.filter((p) => p ===

'educated'

).length

150

    sheet.skillPoints += edu *

2

151

    refreshDerived(sheet)

152

    sheet.hitPoints = sheet.maxHitPoints

153

  }

154

return

 { leveled: gained >

0

, levelsGained: gained }

155

}

156

157

export

function

 spendSkillPoint(sheet: CharacterSheet, skill: SkillId, points =

1

): boolean {

158

if

 (sheet.skillPoints < points)

return

false

159

const

 costPer = sheet.tagged.includes(skill) ?

1

 :

1

160

// Tagged skills advance 2% per point spent

161

const

 gain = sheet.tagged.includes(skill) ?

2

 * points : points

162

const

 totalCost = costPer * points

163

if

 (sheet.skillPoints < totalCost)

return

false

164

  sheet.skillPoints -= totalCost

165

  sheet.skills[skill] += gain

166

return

true

167

}

168

169

export

function

 specialPointTotal(s: Special): number {

170

return

 s.ST + s.PE + s.EN + s.CH + s.IN + s.AG + s.LK

171

}

172

173

export

function

 clampSpecial(s: Special): Special {

174

const

 out = { ...s }

175

for

 (

const

 k

of

 Object.keys(out) as (keyof Special)[]) {

176

    out[k] = Math.max(

1

, Math.min(

10

, Math.round(out[k])))

177

  }

178

return

 out

179

}

180

181

/** Chargen starts at 5 each = 35; player distributes remaining to reach 40 (FO1). */

182

export

const

 CHARGEN_SPECIAL_POOL =

40

183

184

export

function

 cloneSheet(s: CharacterSheet): CharacterSheet {

185

return

 {

186

    ...s,

187

    special: { ...s.special },

188

    skills: { ...s.skills },

189

    tagged: [...s.tagged],

190

    traits: [...s.traits],

191

    perks: [...s.perks],

192

    damageResistance: { ...s.damageResistance },

193

    damageThreshold: { ...s.damageThreshold },

194

  }

195

}

196

Versions
