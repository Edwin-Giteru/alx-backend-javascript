export default function createIteratorObject(report) {
    return {
        *[Symbol.iterator]() {
          for (const department in report.allEmployees) {
            yield* report.allEmployees[department];
          }
        }
      };
}