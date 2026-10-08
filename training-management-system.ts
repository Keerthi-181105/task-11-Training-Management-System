interface Trainee {
    traineeId: number;
    name: string;
}

interface LearningPathNode {
    courseName: string;
    children: LearningPathNode[];
}

class RecentlyViewedCourses {
    private stack: string[] = [];

    push(course: string): void {
        this.stack.push(course);
    }

    pop(): string | undefined {
        return this.stack.pop();
    }
}

class DoubtQueue {
    private queue: string[] = [];

    enqueue(question: string): void {
        this.queue.push(question);
    }

    dequeue(): string | undefined {
        return this.queue.shift();
    }
}

function searchTraineeById(
    trainees: Trainee[],
    traineeId: number
): Trainee | null {
    let low = 0;
    let high = trainees.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const trainee = trainees[middle];

        if (trainee.traineeId === traineeId) {
            return trainee;
        }

        if (trainee.traineeId < traineeId) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return null;
}

function createLearningPathTree(): LearningPathNode {
    const angular: LearningPathNode = { courseName: "Angular", children: [] };
    const typeScript: LearningPathNode = {
        courseName: "TypeScript",
        children: [angular]
    };
    const javaScript: LearningPathNode = {
        courseName: "JavaScript",
        children: [typeScript]
    };
    const frontend: LearningPathNode = {
        courseName: "Frontend",
        children: [
            { courseName: "HTML", children: [] },
            { courseName: "CSS", children: [] },
            javaScript
        ]
    };
    const backend: LearningPathNode = {
        courseName: "Backend",
        children: [
            { courseName: "Node.js", children: [] },
            { courseName: "Express.js", children: [] }
        ]
    };

    return {
        courseName: "Programming",
        children: [frontend, backend]
    };
}

function displayLearningPath(root: LearningPathNode): void {
    console.log(root.courseName);

    for (const child of root.children) {
        displayLearningPath(child);
    }
}

function listCoursesRecursively(node: LearningPathNode): void {
    for (const child of node.children) {
        console.log(child.courseName);
        listCoursesRecursively(child);
    }
}

function generateLearningPathReport(root: LearningPathNode): void {
    const frontend = root.children[0];
    const backend = root.children[1];

    console.log(`${frontend.courseName} Courses`);
    listCoursesRecursively(frontend);
    console.log(`${backend.courseName} Courses`);
    listCoursesRecursively(backend);
}

const trainees: Trainee[] = [
    { traineeId: 101, name: "Rahul" },
    { traineeId: 102, name: "Priya" },
    { traineeId: 103, name: "Arun" },
    { traineeId: 104, name: "Divya" }
];

const viewedCourses = new RecentlyViewedCourses();
viewedCourses.push("HTML");
viewedCourses.push("CSS");
viewedCourses.push("JavaScript");

const currentCourse = viewedCourses.pop();
console.log(`Current Course: ${currentCourse?.toUpperCase() ?? "NONE"}`);

const doubts = new DoubtQueue();
doubts.enqueue("Angular Routing");
doubts.enqueue("RxJS");

const currentDoubt = doubts.dequeue();
console.log(`Current Doubt: ${currentDoubt ?? "NONE"}`);

console.log("Binary Search:");
console.log(`Found: ${JSON.stringify(searchTraineeById(trainees, 103))}`);
console.log(`Not found: ${searchTraineeById(trainees, 999)}`);

const learningPath = createLearningPathTree();
console.log("Learning Path Traversal:");
displayLearningPath(learningPath);

console.log("Learning Path Report:");
generateLearningPathReport(learningPath);
