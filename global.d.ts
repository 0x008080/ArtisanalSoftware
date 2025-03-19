declare module '*.css' {
    const content: string;
    export default content;
  }
  
  declare module '*.svg' {
    const content: string;
    export default content;
  }
  
  interface ImportMeta {
    readonly env: {
      [key: string]: string | boolean | undefined;
      BASE_URL: string;
    };
  }