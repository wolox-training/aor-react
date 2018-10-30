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

export function copy(args) {
  const example = args;

  if (isArray(example)) {
    const copieExample = [...example];
    return copieExample;
  }

  return { ...args };
}

export function reverseMerge(arg1, arg2) {
  const test = [...arg2, ...arg1];
  return test;
}

export function filterAttribs({ a, b, ...arg } = {}) {
  return arg;
}
