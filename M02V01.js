

const course1 = {name: "Programing Hero"};
const course2 = {name: "next level web dev"};

// const map = new Map();
// map.set(course1, { courseId: "level1"});
// map.set(course2, { courseId: "level2"});

// map.forEach((value, key) => (key.name = "Shohoj shorol simple " + key.name));

// for(let key of map.keys()){
    // console.log(key);
// }

const courses = [
    [course1,"Level1"],
    [course2, "level2"]
];

const map = new Map(courses);

console.log(map);