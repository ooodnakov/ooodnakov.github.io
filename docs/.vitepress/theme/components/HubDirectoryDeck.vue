<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref, useId } from 'vue'

interface DirectoryEntry {
  id: string
  name: string
  slug: string
  stack: string
  docsHref: {
    en: string
    ru: string
  }
  repoHref: string
  description: {
    en: string
    ru: string
  }
}

const ENTRIES: readonly DirectoryEntry[] = [
  {
    id: 'voice-drop',
    name: 'VoiceDrop',
    slug: '/voice-drop/',
    stack: 'Rust · Tauri',
    docsHref: {
      en: 'https://ooodnakov.github.io/voice-drop/',
      ru: 'https://ooodnakov.github.io/voice-drop/ru/',
    },
    repoHref: 'https://github.com/ooodnakov/voice-drop',
    description: {
      en: 'Portable Telegram sender for voice notes, round videos, and documents (Rust + Tauri + Telethon, EN/RU docs).',
      ru: 'Portable-отправка файлов в Telegram голосовыми, кружочками или документами (Rust + Tauri + Telethon, доки EN/RU).',
    },
  },
  {
    id: 'windowping',
    name: 'windowping',
    slug: '/windowping/',
    stack: 'Python stdlib',
    docsHref: {
      en: 'https://ooodnakov.github.io/windowping/',
      ru: 'https://ooodnakov.github.io/windowping/',
    },
    repoHref: 'https://github.com/ooodnakov/windowping',
    description: {
      en: 'Keep Codex, Command Code, GLM Coding Plan, and Claude Code 5-hour rate-limit windows chained back-to-back.',
      ru: 'Цепочка 5-часовых окон лимитов для Codex, Command Code, GLM Coding Plan и Claude Code на чистом Python без зависимостей.',
    },
  },
  {
    id: 'zsh-fzf-unified',
    name: 'zsh-fzf-unified',
    slug: '/zsh-fzf-unified/',
    stack: 'Zsh · fzf',
    docsHref: {
      en: 'https://ooodnakov.github.io/zsh-fzf-unified/',
      ru: 'https://ooodnakov.github.io/zsh-fzf-unified/',
    },
    repoHref: 'https://github.com/ooodnakov/zsh-fzf-unified',
    description: {
      en: 'Single zsh plugin owning Ctrl-R history, Ctrl-T / Alt-C pickers, Ctrl-G ripgrep, vendored fzf-tab, and hybrid arrows.',
      ru: 'Единый плагин zsh для fzf: поиск Ctrl-R, пикеры Ctrl-T / Alt-C, Ctrl-G ripgrep, fzf-tab и гибридные стрелки.',
    },
  },
  {
    id: 'ooodnakov-config',
    name: 'ooodnakov-config',
    slug: '/ooodnakov-config/',
    stack: 'Dotfiles · CLI',
    docsHref: {
      en: 'https://ooodnakov.github.io/ooodnakov-config/',
      ru: 'https://ooodnakov.github.io/ooodnakov-config/',
    },
    repoHref: 'https://github.com/ooodnakov/ooodnakov-config',
    description: {
      en: 'Reproducible personal dotfiles for Linux, Windows, and macOS machines driven by the oooconf (o) CLI.',
      ru: 'Воспроизводимые dotfiles для Linux, Windows и macOS с единым CLI oooconf (o).',
    },
  },
] as const

const { lang } = useData()
const activeId = ref<string>(ENTRIES[0].id)
const detailPanelId = useId()

const isRu = computed(() => lang.value.toLowerCase().startsWith('ru'))
const localeKey = computed<'en' | 'ru'>(() => (isRu.value ? 'ru' : 'en'))

const copy = computed(() =>
  isRu.value
    ? {
        deckAria: 'Каталог сайтов документации',
        listAria: 'Выбор сайта документации',
        countLabel: '4 сайта доков',
        openDocs: 'Открыть доки',
        github: 'GitHub',
        themeNote: 'Общая палитра из 8 тем для всех сайтов ooodnakov.github.io/*',
      }
    : {
        deckAria: 'Hosted documentation directory',
        listAria: 'Select a hosted documentation site',
        countLabel: '4 hosted docs',
        openDocs: 'Open Docs',
        github: 'GitHub',
        themeNote: 'Shared 8-theme palette across ooodnakov.github.io/*',
      }
)

const activeEntry = computed(
  () => ENTRIES.find((entry) => entry.id === activeId.value) ?? ENTRIES[0]
)

function selectEntry(id: string): void {
  activeId.value = id
}
</script>

<template>
  <section class="hub-deck" :aria-label="copy.deckAria">
    <div class="hub-topbar">
      <span class="hub-path">ooodnakov.github.io/</span>
      <span class="hub-count">{{ copy.countLabel }}</span>
    </div>

    <div class="hub-list" role="group" :aria-label="copy.listAria">
      <button
        v-for="entry in ENTRIES"
        :key="entry.id"
        type="button"
        class="hub-row"
        :class="{ active: entry.id === activeEntry.id }"
        :aria-pressed="entry.id === activeEntry.id"
        :aria-controls="detailPanelId"
        @click="selectEntry(entry.id)"
      >
        <span class="hub-row-id">
          <span class="hub-name">{{ entry.name }}</span>
          <span class="hub-slug">{{ entry.slug }}</span>
        </span>
        <span class="hub-tag">{{ entry.stack }}</span>
      </button>
    </div>

    <div :id="detailPanelId" class="hub-detail" aria-live="polite">
      <p class="hub-desc">{{ activeEntry.description[localeKey] }}</p>
      <div class="hub-actions">
        <a
          class="hub-link hub-link-primary no-icon"
          :href="activeEntry.docsHref[localeKey]"
          target="_blank"
          rel="noreferrer"
        >
          <span>{{ copy.openDocs }}</span>
          <svg
            class="hub-link-icon"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3.5 8.5 8.5 3.5" />
            <path d="M4.25 3.5H8.5V7.75" />
          </svg>
        </a>
        <a
          class="hub-link hub-link-secondary no-icon"
          :href="activeEntry.repoHref"
          target="_blank"
          rel="noreferrer"
        >
          <span>{{ copy.github }}</span>
          <svg
            class="hub-link-icon"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3.5 8.5 8.5 3.5" />
            <path d="M4.25 3.5H8.5V7.75" />
          </svg>
        </a>
      </div>
    </div>

    <div class="hub-footnote">
      {{ copy.themeNote }}
    </div>
  </section>
</template>

<style scoped>
.hub-deck {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-alt);
  overflow: hidden;
  text-align: left;
}

.hub-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.hub-path {
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hub-count {
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex-shrink: 0;
}

.hub-list {
  display: flex;
  flex-direction: column;
}

.hub-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 11px 16px;
  border: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-1);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.16s ease, color 0.16s ease;
}

.hub-row:last-child {
  border-bottom: 0;
}

.hub-row:hover {
  background-color: color-mix(in srgb, var(--vp-c-brand-1) 6%, var(--vp-c-bg-alt));
}

.hub-row.active {
  background-color: color-mix(in srgb, var(--vp-c-brand-1) 10%, var(--vp-c-bg-elv));
}

.hub-row:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}

.hub-row-id {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.hub-name {
  font-family: var(--vp-font-family-display);
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
  overflow-wrap: anywhere;
}

.hub-row.active .hub-name {
  color: var(--vp-c-brand-1);
}

.hub-slug {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  line-height: 1.35;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}

.hub-tag {
  flex-shrink: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 3px 8px;
  white-space: nowrap;
  transition: border-color 0.16s ease, background-color 0.16s ease, color 0.16s ease;
}

.hub-row.active .hub-tag {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-divider));
}

.hub-detail {
  padding: 14px 16px 15px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-elv);
}

.hub-desc {
  margin: 0 0 12px;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
  text-wrap: pretty;
}

.hub-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hub-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;
  transition: border-color 0.16s ease, background-color 0.16s ease, color 0.16s ease;
}

.hub-link-primary {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, var(--vp-c-divider));
}

.hub-link-primary:hover {
  background-color: color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent);
  border-color: var(--vp-c-brand-1);
}

.hub-link-secondary {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.hub-link-secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.hub-link-icon {
  flex-shrink: 0;
}

.hub-footnote {
  padding: 9px 16px;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  font-size: 12px;
  line-height: 1.45;
  color: var(--vp-c-text-2);
}

@media (max-width: 480px) {
  .hub-topbar,
  .hub-row,
  .hub-detail,
  .hub-footnote {
    padding-left: 14px;
    padding-right: 14px;
  }

  .hub-row {
    align-items: flex-start;
  }
}
</style>
