const Queue = require("../../stack-queue/queue");

function findBuildOrder(projects, deps) {
  deps.forEach((dep) => {
    if (dep[1].dependsOn) {
      dep[1].dependsOn.push(dep[0]);
    } else {
      dep[1].dependsOn = [dep[0]];
    }
  });

  const q = new Queue();
  const result = [];
  projects.forEach((p) => {
    if (!p.dependsOn) {
      p.deleted = true;
      result.push(p);
    } else {
      q.add(p);
    }
  });

  let initialLenght = q._queue.length,
    counter = 0;

  while (!q.isEmpty()) {
    const project = q.remove();
    if (project.dependsOn.every((p) => p.deleted)) {
      project.deleted = true;
      result.push(project);
    } else {
      q.add(project);
    }

    counter++;
    if (counter === initialLenght && q._queue.length === initialLenght) {
      return "not found";
    }
  }

  return result;
}

const a = { name: "a" },
  b = { name: "b" },
  c = { name: "c" };
const deps = [
  [a, b],
  [b, c],
  // [c, a],
];

console.log(JSON.stringify(findBuildOrder([a, b, c], deps)));
