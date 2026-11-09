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

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    getDetails(): string {
        const outputString: string = `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;

        return outputString;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);  
        this.department = department;
    }

    getRoleInfo(): string {
        const outputString: string = `Manager of ${this.department}: ${this.name}`;

        return outputString;
    }
}

async function validateAgeAsync(age: number): Promise<string>{
   if(age >= 18) {
    return new Promise(resolved => {
        setTimeout(() => {
            resolved("Access Granted");
        }, 1000);
    });
   }

  return Promise.reject(new Error("Access Denied: Must be 18 or older")); 
}