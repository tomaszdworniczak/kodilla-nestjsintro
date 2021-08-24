export const dateToArray = (date: Date): Array<number> => {
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];
};

export const arrayToDate = (array: Array<number>): Date => {
    return new Date(
        array[0],
        array[1] - 1,
        array[2],
        array[3] ?? 0,
        array[4] ?? 0,
        array[5] ?? 0,
    );
};