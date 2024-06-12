export function once<T extends (...args: any[]) => any>(fn: T): T {
  let haveResult = false;
  let result: any = null;

  return function (this: any, ...args: any[]) {
    if (!haveResult) {
      haveResult = true;
      result = fn.apply(this, args);
    }

    return result;
  } as any;
}
