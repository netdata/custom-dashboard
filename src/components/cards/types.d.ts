type GridConfig = {
  i: string
  x: number
  y: number
  w: number
  h: number
  minW?: number
  maxW?: number
  minH?: number
  maxH?: number
  moved?: boolean
  static?: boolean
  isDraggable?: boolean
  isResizable?: boolean
}

/* Text types. Used for text cards mostly */
type TextPosition = "start" | "center" | "end"
type TextType = "normal" | "italic"
type TextWeight = "normal" | "bold"
