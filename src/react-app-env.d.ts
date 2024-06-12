/// <reference types="react-scripts" />

declare module '*.svg?url';

declare module '*.svg' {
  const content: string;
  export default content;
}
