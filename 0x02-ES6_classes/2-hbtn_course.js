export default class ALXCourse {
    constructor(name, length, students) {
         // Validate input types
         if (typeof name !== 'string') {
            throw new Error("name must be a string");
        }
        if (typeof length !== 'number') {
            throw new Error("length must be a number");
        }
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new Error("students must be an array of strings");
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }
    set Name(value) {
        if (typeof value !== "string") {
            throw new TypeError("name must be a string")
        }
        this._name = value;
    }
    get Name() {
        return this._name;
    }
    set Length(value) {
        if (!Number.isInteger(value)) {
            throw new TypeError("Length must be an integer!")
        }
        this._length = value;
    }
    get Length() {
        return this._length;
    }
    set Students(value) {
        if (!Array.isArray(students)) {
            throw new TypeError("students must be an array of string")
        }
        this._students = value;
    }
    getName() {
        return this._name;
    }
    
}