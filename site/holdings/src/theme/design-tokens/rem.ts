export const REM_BASE = 16
export const REM_BASE_UNIT = 'px'
export const REM_UNIT = 'rem'
export const rem = (
  val: number,
  unit: string | boolean = REM_UNIT,
  base = REM_BASE,
): string => `${val / base}${unit || ''}`
