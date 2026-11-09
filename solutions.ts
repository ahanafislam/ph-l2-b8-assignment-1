function multiplyValue(value: number, multiplier?: number): number {
    if(!multiplier && multiplier !== 0) {
        return value * 2;
    }

    return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
    if(typeof value === "string") {
        return value.trim().toLowerCase();
    }else if(typeof value === "number") {
        return value * 10;
    }

    return value ? "Active" : "Inactive";
}