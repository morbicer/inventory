/** Global definitions for development **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module "*inventory.json" {
  const def: Array<any>;
  export default def;
}

declare module "@rebass/forms" {
  export const Label: any;
  export const Checkbox: any;
}

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
