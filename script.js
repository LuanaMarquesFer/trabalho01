window.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  const executionInput = document.getElementById('execution-input');
  const addExecutionButton = document.getElementById('add-execution-btn');
  const executionList = document.getElementById('execution-list');

  const evaluationInput = document.getElementById('evaluation-input');
  const addEvaluationButton = document.getElementById('add-evaluation-btn');
  const evaluationList = document.getElementById('evaluation-list');

  const reportInput = document.getElementById('report-input');
  const addReportButton = document.getElementById('create-report-btn');
  const reportList = document.getElementById('report-list');

  addTaskButton.addEventListener('click', () => {
    const task = taskInput.value;
    const taskItem = document.createElement('div');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  });

  addExecutionButton.addEventListener('click', () => {
    const execution = executionInput.value;
    const executionItem = document.createElement('div');
    executionItem.textContent = execution;
    executionList.appendChild(executionItem);
    executionInput.value = '';
  });

  addEvaluationButton.addEventListener('click', () => {
    const evaluation = evaluationInput.value;
    const evaluationItem = document.createElement('div');
    evaluationItem.textContent = evaluation;
    evaluationList.appendChild(evaluationItem);
    evaluationInput.value = '';
  });

  addReportButton.addEventListener('click', () => {
    const report = reportInput.value;
    const reportItem = document.createElement('div');
    reportItem.textContent = report;
    reportList.appendChild(reportItem);
    reportInput.value = '';
  });
});
