<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<template>
  <TooltipBase
    :text="$t(i18nMap.components.tooltip_discussion_warning.text)"
    class="w-fit md:right-0"
  >
    <ul class="w-72 list-disc space-y-1 pl-6 text-left md:w-96">
      <li>{{ $t(i18nMap.components.tooltip_discussion_warning.names) }}</li>
      <li>
        {{ $t(i18nMap.components.tooltip_discussion_warning.home_addresses) }}
      </li>
      <li>
        {{ $t(i18nMap.components.tooltip_discussion_warning.phone_numbers) }}
      </li>
      <li>
        {{ $t(i18nMap.components.tooltip_discussion_warning.email_addresses) }}
      </li>
    </ul>
  </TooltipBase>
</template>

<script setup lang="ts">
import { i18nMap } from "~/types/i18n-map";
</script>
