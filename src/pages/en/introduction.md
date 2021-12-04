---
title: Introduction
description: Docs intro
layout: ../../layouts/MainLayout.astro
---
### What is Blossom+

### Why I made it

### How is it different

### Getting Started

Blossom+ works by adding the daisyui plugin into an existing tailwind configuration file. Then after its easy to add and list installed themes. 

### Add daisyUI plugin to tailwinds config file

<Code code={`npx blossomplus init`} lang="shellscript" theme="dracula-soft" />

This also installs all the default themes provided by daisyUI

### Add a custom theme

<Code code={`npx blossomplus add xmas`} lang="shellscript" theme="dracula-soft" />

All custom themes live in the repo and [can be found here](https://github.com/BleedingEffigy/blossom-plus/tree/master/themes "Blossom+ Themes").

### List all custom themes

<Code code={`npx blossomplus list`} lang="shellscript" theme="dracula-soft" />