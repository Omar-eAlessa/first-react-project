declare module 'figlet' {
    interface FigletOptions {
      font?: string;
      horizontalLayout?: string;
      verticalLayout?: string;
      width?: number;
      whitespaceBreak?: boolean;
    }
  
    export function text(
      text: string,
      callback: (err: Error | null, data: string) => void
    ): void;
  
    export function text(
      text: string,
      options: FigletOptions,
      callback: (err: Error | null, data: string) => void
    ): void;
  
    export function textSync(
      text: string,
      options?: FigletOptions
    ): string;
  }
  