function multiplyValue(value: number, multiplier?: number): number {
    if(!multiplier && multiplier !== 0) {
        return value * 2;
    }

    return value * multiplier;
}