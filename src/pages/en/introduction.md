---
title: Introduction
description: Docs intro
layout: ../../layouts/MainLayout.astro
---
### What is Blossom+

Blossom+ is a tool that manages the daisyUI plugin for tailwindcss. As of now, it supports installing the plugin, and setting up the structures for custom theming.

### Why I made it

If you've used tailwindcss, you're probably familiar with the method for generating a config file:
```shell
npx tailwindcss init
```
This creates a minimal template to start customizing your installation.

As of now, daisyui requires you to manually install the plugin. What's more, if you want to use custom themes, you additionally have to setup the daisyui config object:

```shell
module.exports = {
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
        themes: [ {*this is where the custom themes go...*} ]
    }
  }
```
And after all that, you have to enter your custom theme, which is an object with 20 fields! And say goodbye to the defaults once you do define the themes array.
I wanted a way to automate all that setup, while making it simple to add and remove themes

### Getting Started

Blossom+ works by adding the daisyui plugin into an existing tailwind configuration file. Then after its easy to add and list installed themes.

### Add daisyUI plugin to tailwinds config file

```bash
npx blossomplus init
```

This also installs all the default themes provided by daisyUI

### Add a custom theme

```bash
npx blossomplus add xmas
```

All custom themes live in the repo and [can be found here](https://github.com/BleedingEffigy/blossom-plus/tree/master/themes "Blossom+ Themes").

### List all custom themes

```bash
npx blossomplus list
```
