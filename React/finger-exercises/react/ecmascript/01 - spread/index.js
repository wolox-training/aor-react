import { isArray } from './utils';

export function min(...args) {
  
  if(args.length == 0){
    return undefined;
  }
  
  if(isArray(...args)){
    var num = Math.min(...args[0]);
    return(num);
  }
  
  return Math.min(...args);
}

export function copy(args) {
  
  var example = args;
  console.log(example);
  
  if (isArray(example)){
    var copieExample = [...example];
    return [...example], copieExample;
  }
  
  return {...args}
}


export function reverseMerge(...args){
  
  let final = [];
  args.forEach(arg => {
    final.unshift(...arg)
  });
  
  return final;
}

export function filterAttribs(args) {
  const ListaAIgnorar = ['a', 'b'];
  return Object.keys(args)
  .filter(key => ListaAIgnorar.indexOf(key) < 0)
  .reduce((final, key) => {
    final[key] = args[key];
    return final;
  }, {});
}
