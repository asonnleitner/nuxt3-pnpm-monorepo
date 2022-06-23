# nuxt3-pnpm-monorepo

> Example of nuxt3 monorepo using pnpm. Currently works only with the
> `--shamefully-hoist` option.

The monorepo contains a `packages` and `apps` directory.

- `apps` directory contains all nuxt apps.

- `packages` directory contains all packages, which can be shared for all
  nuxt apps.

## Install

Make sure you are using the node version specified in the `package.json` or
as in `.nvmrc`.

Also make sure `corepack` is enabled. If not run `corepack enable` which
should install `pnpm` if you are not already using it.

After that you can run `pnpm install` to install all packages. Feel free to
look through the project's dependencies.

## Creating a new package

If you want to create a new package, you need to create a new directory in
the `packages` directory. To make the new package available for all nuxt
apps, add it either as a workspace devDependency or dependency.

## Creating a new app

Create a new project in the `apps` directory, and remove any devDependencies
or dependencies from the `package.json` file, which are already included in
the root `package.json`. I already made `@vueuse`, `pinia` and `@unocss` 
available for all nuxt apps. So you just need to add them to `nuxt.config.
ts` modules.

Don't forget to add the required scripts which you would like to run from
the root `package.json`. Then you can filter the nuxt app and run the exact
app you want. You can also run them all at once in parallel, there is a
script for that.

---

Feel free to ask any questions
