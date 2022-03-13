interface TwObject {
  dark?: string; // Cuando se aplique el tema oscuro.
  responsive?: string; // Modificar CSS según el viewport.
  text?: string; // Todo lo relacionado con tipografía.
  multimedia?: string; // Imagenes, Videos, SVG, etc.
  layout?: string; // Grid, Flexbox, Position, Display, etc.
  box?: string; // Margin, Padding, Box Sizing, Width, Height, etc.
  accessibility?: string;
  table?: string;
  movement?: string; // Transform, Translate, Animation

  // ¿Cómo llamo a todo esto?
  effect?: string;
  filter?: string;
  interactivity?: string;
}

const TwAssemble = (styles: TwObject): string => {
  let style: string = "";
  for (let property in styles) {
    if (!style) {
      style = `${styles[property]}`;
    } else {
      style = `${style} ${styles[property]}`;
    }
  }
  return style;
};

export default TwAssemble;
export type { TwObject };
