function abbrevName(name){
  let abbrev1 = name.split(' ');
  return `${abbrev1[0].charAt(0)}.${abbrev1[1].charAt(0)}`.toUpperCase();
}