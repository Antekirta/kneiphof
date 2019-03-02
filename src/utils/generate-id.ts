export const generateId = function (className: string): string {
    return className + Math.random() + new Date().getTime()
}