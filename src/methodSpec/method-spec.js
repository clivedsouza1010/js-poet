export function generateMethodStr(name, params, methodContent) {
    return "function " + name + "(" + params + ") { \n" + methodContent + "\n }";
}