// SPDX-License-Identifier: AGPL-3.0-or-later
export default function useColorModeImages(): (
  path: string,
  ext?: string
) => string {
  return (path, ext = ".png") => `${path}_${useColorMode().value}${ext}`;
}
