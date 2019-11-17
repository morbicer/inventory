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

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
