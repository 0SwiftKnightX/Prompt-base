# PROJECT STATE

## Identity
- Project: Resona Fallout Project
- Parent repository: 0SwiftKnightX/Prompt-base
- Workspace path: Resona Fallout Project/
- Source snapshot: Rezona Lab · Game Agent (1).mht
- Rezona project: SfLbqGhDzE

## State vocabulary
- SPECIFIED = required by the Rezona source prompt.
- SCAFFOLDED = project structure exists, but functionality is not complete.
- IMPLEMENTED = functionality has been written into the project.
- VERIFIED = functionality has been tested against an explicit acceptance check.

## Current state
- Source extraction: COMPLETE
- Original snapshot preservation: COMPLETE
- Project workspace structure: COMPLETE
- Core game runtime implementation: NOT VERIFIED FROM SNAPSHOT
- Full Fallout 1 campaign implementation: NOT VERIFIED FROM SNAPSHOT
- Full Fallout 2 campaign implementation: NOT VERIFIED FROM SNAPSHOT
- GitHub bridge: SPECIFICATION ONLY
- Rezona continuation protocol: SCAFFOLDED

## Immediate sequence
1. Establish the core runtime/data model.
2. Establish character/SPECIAL/skills/traits/perks.
3. Establish inventory/items/equipment.
4. Establish grid movement and turn-based AP combat.
5. Establish NPC/dialogue/quest/faction state.
6. Establish world-map/location/random-event systems.
7. Establish save/load and persistence.
8. Establish content import/data pipeline.
9. Add campaign content in controlled increments.
10. Verify each subsystem before marking it complete.

## Integrity rule
Never convert SPECIFIED directly to VERIFIED.
