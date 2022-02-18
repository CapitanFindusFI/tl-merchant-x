export function clearString(str: string): string {
    return str
        .replace(/\n|\r|\f/g, " ")
        .replace("  ", " ")
        .trim();
}
