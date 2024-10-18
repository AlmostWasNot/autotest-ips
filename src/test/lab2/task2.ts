type Student = {
    name: string,
    age: number,
}

function studentInfo(group: Student): string {
    return `${group.name}, ${group.age} лет`
}

const group: Student[] = [
    { name: 'Иван', age: 25 },
    { name: 'Юля', age: 17 },
    { name: 'Петр', age: 40 },
    { name: 'Слава', age: 48 },
]

group.forEach((groups: Student) => console.log(studentInfo(groups)))