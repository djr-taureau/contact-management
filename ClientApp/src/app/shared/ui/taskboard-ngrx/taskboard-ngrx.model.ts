export class Task {
  public taskTitle: string;
  public taskMessage: string;
  public createdOn: string;
  public createdBy: string;
  public assignedTo: string;
  public status: string;

  constructor(
    taskTitle: string,
    taskMessage: string,
    createdOn: string,
    createdBy: string,
    assignedTo: string,
    status: string
  ) {
    this.taskTitle = taskTitle;
    this.taskMessage = taskMessage;
    this.createdOn = createdOn;
    this.createdBy = createdBy;
    this.assignedTo = assignedTo;
    this.status = status;
  }
}
