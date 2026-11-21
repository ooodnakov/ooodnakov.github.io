<script setup>
const hostedDocs = [
  {
    name: 'VoiceDrop',
    description:
      'Portable-утилита отправки файлов в Telegram (Rust + Tauri + Telethon): голосовые, кружочки и документы',
    links: [
      { label: 'Доки (RU)', href: 'https://ooodnakov.github.io/voice-drop/ru/' },
      { label: 'Docs (EN)', href: 'https://ooodnakov.github.io/voice-drop/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/voice-drop' },
      { label: 'Релизы', href: 'https://github.com/ooodnakov/voice-drop/releases/latest' },
    ],
  },
  {
    name: 'windowping',
    description:
      'Демон и CLI на чистом Python 3.11+ (stdlib) для автоматического старта 5-часовых окон лимитов в Codex, Command Code, GLM, Claude Code, Kimi и MiniMax',
    links: [
      { label: 'Доки', href: 'https://ooodnakov.github.io/windowping/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/windowping' },
      { label: 'PyPI', href: 'https://pypi.org/project/windowping/' },
    ],
  },
  {
    name: 'zsh-fzf-unified',
    description:
      'Единый плагин zsh для всех поверхностей fzf: Ctrl-R, Ctrl-T, Alt-C, Ctrl-G ripgrep, fzf-tab и гибридные стрелки',
    links: [
      { label: 'Доки', href: 'https://ooodnakov.github.io/zsh-fzf-unified/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/zsh-fzf-unified' },
    ],
  },
  {
    name: 'ooodnakov-config',
    description:
      'Воспроизводимые dotfiles для Linux, Windows и macOS с единым CLI oooconf (o)',
    links: [
      { label: 'Доки', href: 'https://ooodnakov.github.io/ooodnakov-config/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/ooodnakov-config' },
    ],
  },
  {
    name: 'my_website',
    description: 'Личный сайт и резюме',
    links: [
      { label: 'dnakov.ooo', href: 'https://dnakov.ooo' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/my_website' },
    ],
  },
]

const aiTools = [
  {
    name: 'windowping',
    stack: 'Python',
    description:
      'Менеджер 5-часовых окон с live-карточкой в Telegram, тихими часами, статистикой, doctor и systemd-watchdog',
    links: [
      { label: 'Доки', href: 'https://ooodnakov.github.io/windowping/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/windowping' },
    ],
  },
  {
    name: 'dndtranscribe',
    stack: 'Python',
    description:
      'Локальная транскрибация русской речи и диаризация для записей настольных сессий (Whisper, sherpa-onnx, pyannote, LM Studio)',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/dndtranscribe' }],
  },
  {
    name: 'telegram_meme_autoposter',
    stack: 'Python, TypeScript',
    description:
      'Агрегация медиа из Telegram-каналов, дедупликация, водяные знаки, админ-панель (FastAPI + React SPA) и отложенный постинг',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/telegram_meme_autoposter' },
      { label: 'Wiki', href: 'https://github.com/ooodnakov/telegram_meme_autoposter/wiki' },
    ],
  },
]

const dotfilesPlugins = [
  {
    name: 'ooodnakov-config',
    stack: 'Python, Shell',
    description:
      'Воспроизводимые dotfiles для Linux, Windows и macOS с единым CLI oooconf (o)',
    links: [
      { label: 'Доки', href: 'https://ooodnakov.github.io/ooodnakov-config/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/ooodnakov-config' },
    ],
  },
  {
    name: 'zsh-fzf-unified',
    stack: 'Shell',
    description:
      'Единый zsh-плагин для fzf, заменяющий zsh-fzf-history-search, отдельный fzf-tab и ручные биндинги fzf --zsh',
    links: [
      { label: 'Доки', href: 'https://ooodnakov.github.io/zsh-fzf-unified/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/zsh-fzf-unified' },
    ],
  },
  {
    name: 'noctalia-handy',
    stack: 'Luau',
    description:
      'Интеграция офлайн speech-to-text Handy в панель Noctalia: статус, диктовка, история и выбор моделей',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/noctalia-handy' },
      { label: 'Релизы', href: 'https://github.com/ooodnakov/noctalia-handy/releases/latest' },
    ],
  },
  {
    name: 'omz.yazi',
    stack: 'Lua',
    description: 'Отображение актуального промпта Oh My Zsh в шапке Yazi',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/omz.yazi' },
      { label: 'Релизы', href: 'https://github.com/ooodnakov/omz.yazi/releases/latest' },
    ],
  },
]

const appsGames = [
  {
    name: 'voice-drop',
    stack: 'Rust, Tauri, Python',
    description: 'Portable-окно отправки файлов в Telegram в эстетике печатной накладной',
    links: [
      { label: 'Доки (RU)', href: 'https://ooodnakov.github.io/voice-drop/ru/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/voice-drop' },
    ],
  },
  {
    name: 'alioss',
    stack: 'Kotlin, Jetpack Compose',
    description: 'Офлайн-игра Alias для Android без рекламы, аккаунтов и трекеров',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/alioss' },
      { label: 'Релизы', href: 'https://github.com/ooodnakov/alioss/releases/latest' },
    ],
  },
  {
    name: 'alioss-site',
    stack: 'TypeScript, Next.js',
    description: 'Портал и галерея колод для Alioss',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/alioss-site' }],
  },
  {
    name: 'minecraft_modpacks_translations',
    stack: 'Python',
    description: 'Переводы квестов в модпаках Minecraft (Cube Warper 1.13)',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/minecraft_modpacks_translations' }],
  },
]

const academicResearch = [
  {
    name: 'dtsne_jedi',
    stack: 'Python, Jupyter',
    description:
      'Алгоритмы dtSNE и JEDI для курса ML 2023 в Сколтехе (pip install dtsnejedi, архивный)',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/dtsne_jedi' },
      { label: 'PyPI', href: 'https://pypi.org/project/dtsnejedi/' },
    ],
  },
  {
    name: 'GMP_TTA',
    stack: 'Python, Jupyter',
    description:
      'Код дипломной работы: Enhancing Semantic Segmentation of LiDAR Point Clouds through Global Maps',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/GMP_TTA' }],
  },
]
</script>

# Проекты и документация

Каталог открытых репозиториев и сайтов [`@ooodnakov`](https://github.com/ooodnakov).

## Сайты и документация на GitHub Pages

<RepoGrid :items="hostedDocs" />

## AI-инструменты и автоматизация

<RepoGrid :items="aiTools" />

## Dotfiles и терминальные плагины

<RepoGrid :items="dotfilesPlugins" />

## Приложения, игры и комьюнити

<RepoGrid :items="appsGames" />

## Исследования и учёба

<RepoGrid :items="academicResearch" />
