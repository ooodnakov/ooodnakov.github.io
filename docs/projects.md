<script setup>
const hostedDocs = [
  {
    name: 'VoiceDrop',
    description:
      'Portable desktop Telegram sender (Rust + Tauri + Telethon): drop a file and it lands as a voice note, round video note, or document',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/voice-drop/' },
      { label: 'Docs (RU)', href: 'https://ooodnakov.github.io/voice-drop/ru/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/voice-drop' },
      { label: 'Releases', href: 'https://github.com/ooodnakov/voice-drop/releases/latest' },
    ],
  },
  {
    name: 'windowping',
    description:
      'Pure Python 3.11+ stdlib daemon & CLI that keeps 5-hour rate-limit windows chained across Codex, Command Code, GLM, Claude Code, Kimi, and MiniMax',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/windowping/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/windowping' },
      { label: 'PyPI', href: 'https://pypi.org/project/windowping/' },
    ],
  },
  {
    name: 'zsh-fzf-unified',
    description:
      'Single source of truth for fzf in zsh: Ctrl-R, Ctrl-T, Alt-C, Ctrl-G ripgrep, vendored fzf-tab, and hybrid arrows',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/zsh-fzf-unified/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/zsh-fzf-unified' },
    ],
  },
  {
    name: 'ooodnakov-config',
    description:
      'Reproducible personal dotfiles for Linux, Windows, and macOS machines driven by the oooconf (o) CLI',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/ooodnakov-config/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/ooodnakov-config' },
    ],
  },
  {
    name: 'my_website',
    description: 'Personal website and CV frontend workspace',
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
      'Zero-dependency 5h rate-limit window chainer with live Telegram card, quiet hours, stats, doctor, and systemd watchdog',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/windowping/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/windowping' },
    ],
  },
  {
    name: 'dndtranscribe',
    stack: 'Python',
    description:
      'Local Russian transcription and speaker diarization for recorded tabletop sessions (Whisper, sherpa-onnx, optional pyannote, local LLM cleanup)',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/dndtranscribe' }],
  },
  {
    name: 'telegram_meme_autoposter',
    stack: 'Python, TypeScript',
    description:
      'Telegram media ingestion, deduplication, watermarking, moderation dashboard (FastAPI + React SPA), and scheduled publishing',
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
      'Reproducible personal dotfiles for Linux, Windows, and macOS managed by the oooconf (o) CLI',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/ooodnakov-config/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/ooodnakov-config' },
    ],
  },
  {
    name: 'zsh-fzf-unified',
    stack: 'Shell',
    description:
      'Unified fzf zsh plugin replacing zsh-fzf-history-search, standalone fzf-tab, and ad-hoc fzf --zsh bindings',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/zsh-fzf-unified/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/zsh-fzf-unified' },
    ],
  },
  {
    name: 'noctalia-handy',
    stack: 'Luau',
    description:
      'Offline speech-to-text integration for Noctalia bar status, dictation controls, transcript history, and model switching',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/noctalia-handy' },
      { label: 'Releases', href: 'https://github.com/ooodnakov/noctalia-handy/releases/latest' },
    ],
  },
  {
    name: 'omz.yazi',
    stack: 'Lua',
    description: "Renders your live Oh My Zsh prompt inside Yazi's header",
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/omz.yazi' },
      { label: 'Releases', href: 'https://github.com/ooodnakov/omz.yazi/releases/latest' },
    ],
  },
]

const appsGames = [
  {
    name: 'voice-drop',
    stack: 'Rust, Tauri, Python',
    description: 'Portable desktop Telegram sender styled as a printed consignment label',
    links: [
      { label: 'Docs', href: 'https://ooodnakov.github.io/voice-drop/' },
      { label: 'GitHub', href: 'https://github.com/ooodnakov/voice-drop' },
    ],
  },
  {
    name: 'alioss',
    stack: 'Kotlin, Jetpack Compose',
    description: 'Privacy-first, offline-only pass-and-play Alias party game for Android',
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/alioss' },
      { label: 'Releases', href: 'https://github.com/ooodnakov/alioss/releases/latest' },
    ],
  },
  {
    name: 'alioss-site',
    stack: 'TypeScript, Next.js',
    description: 'Marketing and community deck portal for Alioss',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/alioss-site' }],
  },
  {
    name: 'minecraft_modpacks_translations',
    stack: 'Python',
    description: 'Russian quest translations for Minecraft modpacks',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/minecraft_modpacks_translations' }],
  },
]

const academicResearch = [
  {
    name: 'dtsne_jedi',
    stack: 'Python, Jupyter',
    description:
      "dtSNE and JEDI dimensionality-reduction / visualization algorithms for Skoltech's ML 2023 course (pip install dtsnejedi)",
    links: [
      { label: 'GitHub', href: 'https://github.com/ooodnakov/dtsne_jedi' },
      { label: 'PyPI', href: 'https://pypi.org/project/dtsnejedi/' },
    ],
  },
  {
    name: 'GMP_TTA',
    stack: 'Python, Jupyter',
    description:
      'Thesis code: Enhancing Semantic Segmentation of LiDAR Point Clouds through Global Maps',
    links: [{ label: 'GitHub', href: 'https://github.com/ooodnakov/GMP_TTA' }],
  },
]
</script>

# Projects & Docs

Directory of public repositories and hosted sites under [`@ooodnakov`](https://github.com/ooodnakov).

## Hosted Documentation & Web Apps

<RepoGrid :items="hostedDocs" />

## AI & Automation Tools

<RepoGrid :items="aiTools" />

## Dotfiles & Terminal Plugins

<RepoGrid :items="dotfilesPlugins" />

## Apps, Games & Community

<RepoGrid :items="appsGames" />

## Academic & Research

<RepoGrid :items="academicResearch" />
