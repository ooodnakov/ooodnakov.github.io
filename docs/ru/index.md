---
layout: home

hero:
  name: ooodnakov
  text: Документация и проекты
  tagline: AI-инструменты, плагины для терминала, десктопные утилиты и автоматизация.
  image:
    src: /logo.svg
    alt: ooodnakov
  actions:
    - theme: brand
      text: Все проекты
      link: /ru/projects
    - theme: alt
      text: dnakov.ooo
      link: https://dnakov.ooo
    - theme: alt
      text: GitHub
      link: https://github.com/ooodnakov

features:
  - title: VoiceDrop
    details: Portable-отправка файлов в Telegram голосовыми, кружочками или документами (Rust + Tauri, документация на EN/RU).
    link: https://ooodnakov.github.io/voice-drop/ru/
    linkText: Открыть доки
  - title: windowping
    details: Цепочка 5-часовых окон лимитов для Codex, Command Code, GLM Coding Plan и Claude Code на чистом Python без зависимостей.
    link: https://ooodnakov.github.io/windowping/
    linkText: Открыть доки
  - title: zsh-fzf-unified
    details: "Единый плагин zsh для fzf: поиск по истории Ctrl-R, пикеры Ctrl-T / Alt-C, Ctrl-G ripgrep, fzf-tab и гибридные стрелки."
    link: https://ooodnakov.github.io/zsh-fzf-unified/
    linkText: Открыть доки
  - title: ooodnakov-config
    details: "Воспроизводимые dotfiles для Linux, Windows и macOS с единым CLI oooconf (o)."
    link: https://ooodnakov.github.io/ooodnakov-config/
    linkText: Открыть доки
---

<script setup>
const otherRepos = [
  {
    name: 'telegram_meme_autoposter',
    stack: 'Python, TypeScript',
    description:
      'Платформа автопостинга в Telegram: сбор из источников, обработка, модерация через FastAPI + React SPA',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/telegram_meme_autoposter' },
      { label: 'Wiki', href: 'https://github.com/ooodnakov/telegram_meme_autoposter/wiki' },
    ],
  },
  {
    name: 'dndtranscribe',
    stack: 'Python',
    description:
      'Локальная транскрибация русской речи и разделение спикеров (Whisper, sherpa-onnx, pyannote, LM Studio)',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/dndtranscribe' }],
  },
  {
    name: 'noctalia-handy',
    stack: 'Luau',
    description: 'Интеграция офлайн-диктовки Handy в панель Noctalia',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/noctalia-handy' }],
  },
  {
    name: 'omz.yazi',
    stack: 'Lua',
    description: 'Промпт Oh My Zsh в заголовке файлового менеджера Yazi',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/omz.yazi' }],
  },
  {
    name: 'alioss и alioss-site',
    stack: 'Kotlin, TypeScript',
    description: 'Офлайн-игра Alias для Android и портал с колодами на Next.js',
    links: [
      { label: 'Приложение', href: 'https://github.com/ooodnakov/alioss' },
      { label: 'Сайт', href: 'https://github.com/ooodnakov/alioss-site' },
    ],
  },
  {
    name: 'minecraft_modpacks_translations',
    stack: 'Python',
    description: 'Русские переводы квестов для модпаков Minecraft (Cube Warper 1.13)',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/minecraft_modpacks_translations' }],
  },
]
</script>

## Другие открытые репозитории

<RepoGrid :items="otherRepos" />

Полный каталог проектов по категориям — на странице [Проекты и доки](/ru/projects).
