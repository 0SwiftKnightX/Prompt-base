# Authorized Campaign Import Contract

## Purpose

Import the complete authorized Fallout 1 campaign first, then Fallout 2, without fabricating missing records.

## Import order

1. Preserve the original source files unchanged.
2. Convert source records into the JSON structures declared by `src/contentSchema.ts`.
3. Preserve stable source IDs and add `sourceRef` provenance to every imported record.
4. Import locations/world-map nodes before NPCs, items, quests and dialogue that reference them.
5. Import dialogue/quests/events only after referenced IDs exist.
6. Import authorized asset references last and keep them separate from logic/data.
7. Run referential-integrity validation.
8. Run save/load and campaign bootstrap checks.
9. Mark a campaign `IMPLEMENTED` only when all required records import and the campaign can start and progress.
10. Mark `VERIFIED` only after an actual runtime acceptance pass against the authorized reference.

## Hard rule

The project must never fill a missing campaign record with a guessed or generic substitute merely to make validation pass.
