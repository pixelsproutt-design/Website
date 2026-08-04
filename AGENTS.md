# AGENTS.md

Guidance for AI agents working in this repository.

## Repository status

This is a **greenfield starter repository** (`pixelsproutt-design/Website`). At present it contains only `README.md` — no application code, package manifests, Docker config, or CI workflows.

When application code is added (e.g. `package.json`, `docker-compose.yml`), update this file with stack-specific run/lint/test instructions.

## Cursor Cloud specific instructions

### Services

| Service | Required | Notes |
|---------|----------|-------|
| *(none)* | — | No dev server or backend is defined in the repo yet. |

### Tooling available in the Cloud VM

- **Git** — clone, branch, commit workflows work normally.
- **Node.js** v22 + npm — ready when a Node-based site is added.
- **Python 3.12** — can serve static files for quick checks (`python3 -m http.server <port>` from repo root).

### Lint / test / build

Not applicable until a stack is chosen and config files are committed.

### Local smoke test (current repo)

With only static content, verify the environment by serving the repo root:

```bash
python3 -m http.server 8765
```

Then confirm `http://127.0.0.1:8765/README.md` returns `# Website`.

### Gotchas

- **Docker is not installed** in the default Cloud VM; use native Node/Python tooling until Docker is added to the environment config.
- **No `.env` or secrets** are required for the current repo contents.
