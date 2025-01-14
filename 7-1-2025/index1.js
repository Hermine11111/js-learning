const tasks = [
    { taskName: "Առաջադրանք 1", duration: 1000 },
    { taskName: "Առաջադրանք 2", duration: 2000 },
    { taskName: "Առաջադրանք 3", duration: 1500 },
  ];
  
  async function runTask(task) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(task.taskName);
        resolve(task.duration);
      }, task.duration);
    });
  }
  
  async function runTasksWithTotalTime(tasks) {
    let totalTime = 0;
    for (const task of tasks) {
      totalTime += await runTask(task);
    }
    return totalTime;
  }
  
  runTasksWithTotalTime(tasks).then(totalTime => {
    console.log(`Ընդհանուր տևողությունը՝ ${totalTime} միլիվայրկյան։`);
  }).catch(error => {
    console.error("Սխալ տեղի ունեցավ:", error);
  });
  
