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
</script>

<template>
  <div class="repo-grid">
    <article v-for="item in items" :key="item.name" class="repo-card">
      <div class="repo-head">
        <div class="repo-name">{{ item.name }}</div>
        <span v-if="item.stack" class="repo-stack">{{ item.stack }}</span>
      </div>
      <p class="repo-desc">{{ item.description }}</p>
      <div class="repo-links">
        <a
          v-for="l in item.links"
          :key="l.href"
          :href="l.href"
          :target="l.href.startsWith('/') ? undefined : '_blank'"
          :rel="l.href.startsWith('/') ? undefined : 'noreferrer'"
        >
          {{ l.label }}
        </a>
      </div>
    </article>
  </div>
</template>
