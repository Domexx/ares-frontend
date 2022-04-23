# Contributing

## Development

We follow the standard `Develop` > `Master` development workflow.

![Feature Branches](<https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20(2).svg?cdnVersion=1521>)

<https://www.atlassian.com/de/git/tutorials/comparing-workflows/gitflow-workflow>

### Creating A Release

Creating a release takes place in Github:

1. Update CHANGELOG.md with the release information and next version number (see <https://keepachangelog.com/en/1.1.0/>)
2. Merge `develop` into `master` via Pull Request (DO **NOT** SQUASH COMMITS)
3. Create a new Release
4. Create a tag from `master` using the same version number from the updated CHANGELOG.md
5. Copy/paste the CHANGELOG.md release notes into the Github release notes
6. Click "Create Release"
7. Fetch the changes from Github via `git fetch origin`
8. Checkout the newly created tag e.g. `git checkout tags/v0.7.0`
9. Push your changes

## Components

To create a new component we use [hygen](https://github.com/jondot/hygen) in the background

```bash
yarn hygen component new Feature
```

Which will generate the following:

```ascii
src/
┣ components/
┃   ┗ Feature/
┃ ┃   ┣ Feature.css
┃ ┃   ┣ Feature.spec.tsx
┃ ┃   ┗ Feature.tsx
┃ ┃   ┗ Feature.stories.tsx
```

### Colors

When adding new colors ensure it's named using one of the following tools:

- <https://chir.ag/projects/name-that-color/>
- <https://github.com/guillaumedoutriaux/name-that-color>

## Architecture

### State Management

We'll be following [Flux](https://facebook.github.io/flux/docs/in-depth-overview/#structure-and-data-flow)'s unidirectional dataflow model as close as possible by using [Redux Toolkit](https://redux-toolkit.js.org/)

!["Flux Diagram"](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png "Unidirectional Data Flow")

## Husky

Pre-commit and pre-push hooks are managed via [husky](https://github.com/typicode/husky) in the main `package.json`

Tests and linting will be run before every commit and push.
