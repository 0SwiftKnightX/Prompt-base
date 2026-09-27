# Campaign Data Pack

This directory is the campaign-content boundary for the Rezona Fallout reconstruction.

The engine foundation is already in `../src`. Campaign data is intentionally separated from reusable runtime code.

## Required source

Populate these packs only from the authorized Fallout 1/2 source materials supplied to the project owner. Do not invent dialogue, scripts, maps, rosters, or asset metadata.

## Required categories

- locations and maps
- world-map nodes and travel rules
- NPCs and creatures
- items, weapons, armor, ammunition, medical and quest items
- dialogue trees and conditions
- quests, objectives, alternate solutions and outcomes
- companions
- factions and reputation rules
- encounters and special encounters
- merchants and inventories
- scripted/world events
- endings and campaign completion conditions
- authorized art/audio/animation references

The validator should reject unresolved IDs and malformed cross-references before runtime import.

## Packaging

The repository contains an automated packaging workflow that writes the current project snapshot to `resona-fallout-project.zip` at the project root after content changes.
