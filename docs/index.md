---
layout: home

hero:
  name: ooodnakov
  text: Open-Source Docs & Tools
  tagline: Risk analysis, AI tooling, terminal plugins, and homelab automation.
  image:
    src: /logo.svg
    alt: ooodnakov
  actions:
    - theme: brand
      text: Browse Projects
      link: /projects
    - theme: alt
      text: dnakov.ooo
      link: https://dnakov.ooo
    - theme: alt
      text: GitHub
      link: https://github.com/ooodnakov

features:
  - title: VoiceDrop
    details: Portable Telegram sender for voice notes, round videos, and documents (Rust + Tauri, bilingual EN/RU docs).
    link: https://ooodnakov.github.io/voice-drop/
    linkText: Open Docs
  - title: windowping
    details: Keep Codex, Command Code, GLM Coding Plan, and Claude Code 5-hour rate-limit windows back-to-back (pure Python, stdlib only).
    link: https://ooodnakov.github.io/windowping/
    linkText: Open Docs
  - title: zsh-fzf-unified
    details: One zsh plugin owning Ctrl-R history, Ctrl-T / Alt-C pickers, Ctrl-G ripgrep, vendored fzf-tab, and hybrid arrows.
    link: https://ooodnakov.github.io/zsh-fzf-unified/
    linkText: Open Docs
  - title: ooodnakov-config
    details: Reproducible personal dotfiles for Linux, Windows, and macOS machines, driven by the oooconf (o) CLI.
    link: https://ooodnakov.github.io/ooodnakov-config/
    linkText: Open Docs
---

<script setup>
const otherRepos = [
  {
    name: 'telegram_meme_autoposter',
    stack: 'Python, TypeScript',
    description:
      'Telegram meme channel ingestion, processing, moderation dashboard (FastAPI + React SPA), and publishing',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/telegram_meme_autoposter' },
      { label: 'Wiki', href: 'https://github.com/ooodnakov/telegram_meme_autoposter/wiki' },
    ],
  },
  {
    name: 'dndtranscribe',
    stack: 'Python',
    description:
      'Local Russian transcription, speaker labeling (Whisper, sherpa-onnx, pyannote), and conservative LLM cleanup',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/dndtranscribe' }],
  },
  {
    name: 'noctalia-handy',
    stack: 'Luau',
    description:
      'Offline speech-to-text integration for Noctalia: bar status, dictation controls, and transcript history',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/noctalia-handy' }],
  },
  {
    name: 'omz.yazi',
    stack: 'Lua',
    description: "Oh My Zsh prompt rendered in Yazi's header",
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/omz.yazi' }],
  },
  {
    name: 'alioss & alioss-site',
    stack: 'Kotlin, TypeScript',
    description:
      'Local-only pass-and-play Alias party game for Android + Next.js community deck portal',
    links: [
      { label: 'App', href: 'https://github.com/ooodnakov/alioss' },
      { label: 'Site', href: 'https://github.com/ooodnakov/alioss-site' },
    ],
  },
  {
    name: 'minecraft_modpacks_translations',
    stack: 'Python',
    description: 'Russian quest translations for Minecraft modpacks (Cube Warper 1.13)',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/minecraft_modpacks_translations' }],
  },
]
</script>

## Other Public Repositories

<RepoGrid :items="otherRepos" />

See the full categorized list on [Projects & Docs](/projects).
