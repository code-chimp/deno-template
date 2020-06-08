# Deno Template

[![vr scripts](https://badges.velociraptor.run/flat.svg)](https://velociraptor.run)

Working on a base "best practices" template for my Deno projects

## Prerequisites

- Install [Deno](https://deno.land/#installation)
- Install [Velociraptor](https://velociraptor.run/) script runner

## Velociraptor scripts

- restore cache from lock file

    ```bash
    vr restore-cache
    ```

- Run project (will run restore-cache first)

    ```bash
    vr start
    ```
