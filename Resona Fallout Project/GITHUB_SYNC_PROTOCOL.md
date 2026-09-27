# GITHUB SYNC PROTOCOL

## Target
Parent repository: `0SwiftKnightX/Prompt-base`
Project root: `Resona Fallout Project/`

## Rule
Rezona must never receive or embed a GitHub personal access token in game source.

The intended architecture is:

Rezona -> GitHub bridge/integration -> GitHub

GitHub's repository Contents API supports creating/replacing files and committing those changes, while Git's tree/commit APIs can be used for larger structured changes. Authentication must be held by the integration layer, not the game. 

## Project-local sync contract
A future bridge should:
1. Read `PROJECT_STATE.md`.
2. Generate a change manifest.
3. Restrict writes to `Resona Fallout Project/` unless explicitly authorized.
4. Reject credential files and secrets.
5. Preserve previous file versions through Git history.
6. Commit changes with a descriptive message.
7. Return the commit SHA and changed paths.
8. Update `SYNC_LOG.md`.

## Safety
Never store:
- GitHub tokens
- passwords
- OAuth client secrets
- private keys

inside this project directory.
