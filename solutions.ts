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

function formatCoordinate(location: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = location;
    const outputString:string = `Location: ${locationName} (${latitude}, ${longitude})`;

    return outputString;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatenatedArray: T[] = [];

    for(let i: number = 0; i < arrays.length; i++ ) {
        const array: T[] = arrays[i];

        array.forEach((value): void => {
            concatenatedArray.push(value);
        });
    }
    
    return concatenatedArray;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    const filteredCourses: Course[] = courses.filter(course => {
        return course.isPublished === true && course.students >= minStudents;
    }); 

    return filteredCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    const valueArray: T[K][] = items.map(item => item[key]);
    
    return valueArray;
}