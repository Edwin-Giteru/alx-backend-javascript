interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFormHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string;
}
class Director implements DirectorInterface {    
    workFromHome(): string {
        return "Working from home";        
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director task";
    }
}
class Teacher implements TeacherInterface {
    workFormHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "cannot have a coffee break";
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}
function createEmployee (salary: string | number) : Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}
function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();        
    } else {
        return employee.workTeacherTasks();
    }
}
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}