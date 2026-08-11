import "react";

declare module "react" {
  export function cache<T extends (...args: unknown[]) => unknown>(fn: T): T;
}
