<script setup lang="ts">
export interface RepoLink {
  label: string
  href: string
}

export interface RepoItem {
  name: string
  stack?: string
  description: string
  links: RepoLink[]
}

defineProps<{
  items: RepoItem[]
}>()

function splitStack(stack?: string): string[] {
  if (!stack) return []
  return stack
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function isInternalLink(href: string): boolean {
  return href.startsWith('/')
}
</script>

<template>
  <div class="repo-grid">
    <article v-for="item in items" :key="item.name" class="repo-card">
      <div class="repo-header">
        <div class="repo-name">{{ item.name }}</div>
        <div v-if="splitStack(item.stack).length" class="repo-stacks">
          <span v-for="tag in splitStack(item.stack)" :key="tag" class="repo-stack">
            {{ tag }}
          </span>
        </div>
      </div>
      <p class="repo-desc">{{ item.description }}</p>
      <div class="repo-links">
        <a
          v-for="l in item.links"
          :key="l.href"
          class="repo-link no-icon"
          :href="l.href"
          :target="isInternalLink(l.href) ? undefined : '_blank'"
          :rel="isInternalLink(l.href) ? undefined : 'noreferrer'"
        >
          <span>{{ l.label }}</span>
          <svg
            v-if="isInternalLink(l.href)"
            class="repo-link-icon"
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
            <path d="M2.5 6H9.5" />
            <path d="M6.5 3L9.5 6L6.5 9" />
          </svg>
          <svg
            v-else
            class="repo-link-icon"
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
    </article>
  </div>
</template>

<style scoped>
.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 14px;
  margin: 16px 0 28px;
}

.repo-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.repo-card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: color-mix(in srgb, var(--vp-c-brand-1) 4%, var(--vp-c-bg-soft));
}

.repo-header {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.repo-name {
  font-family: var(--vp-font-family-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.35;
  letter-spacing: -0.015em;
  overflow-wrap: anywhere;
}

.repo-stacks {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.repo-stack {
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  font-weight: 500;
  line-height: 1.3;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 24%, var(--vp-c-divider));
  padding: 2px 8px;
  border-radius: 6px;
  white-space: nowrap;
}

.repo-desc {
  font-size: 14px;
  line-height: 1.58;
  color: var(--vp-c-text-2);
  margin: 0;
  flex: 1;
  text-wrap: pretty;
}

.repo-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  padding-top: 10px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 13.5px;
  font-weight: 600;
}

.repo-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  text-underline-offset: 0.2em;
  text-decoration-thickness: 1.5px;
  transition: color 0.16s ease;
}

.repo-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.repo-link-icon {
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .repo-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .repo-card {
    padding: 16px;
  }
}
</style>
