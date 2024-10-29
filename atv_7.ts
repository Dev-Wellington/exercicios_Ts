function formatarEntrada(valor: string | number | boolean): string | number | boolean{
if (typeof valor === "string") {
    return valor.toUpperCase();
}
if (typeof valor === "number") {
    return valor * 10;
}
if (typeof valor === "boolean") {
    return !valor;
}
return valor;
}
console.log(formatarEntrada("typescript")); 
console.log(formatarEntrada(5));
console.log(formatarEntrada(true)); 
