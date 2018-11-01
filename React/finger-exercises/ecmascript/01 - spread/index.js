import isArray from './utils';

export function min(...args) {
  if (args.length === 0) {
    return undefined;
  }

  if (isArray(...args)) {
    return Math.min(...args[0]);
  }

  return Math.min(...args);
}

export function copy(args, ...copieExample) {
  if (isArray(args)) {
    return copieExample;
  }
  return { ...args };
}

export function reverseMerge(arg1, arg2) {
  return [...arg2, ...arg1];
}

export function filterAttribs({ a, b, ...arg } = {}) {
  return arg;
}
