import { Task } from '@app/shared/ui/taskboard-ngrx/taskboard-ngrx.model';
import * as TaskActions from '@app/shared/ui/taskboard-ngrx/store/taskboard.actions';

export interface FeatureState {
    task: State;
}

export interface State {
    todo: Task[];
    inProcess: Task[];
    backLog: Task[];
    completed: Task[];
}

const initialState: State = {
    todo: [
        new Task(
            'Responsive',
            'Etiam porta sem malesuada magna mollis euismod.',
            'May 17',
            'Elizabeth Elliott',
            'assets/img/portrait/small/avatar-s-3.png',
            'New'),
        new Task(
            'QA Testing',
            'Etiam porta sem malesuada magna mollis euismod.',
            'May 17',
            'Elizabeth Elliott',
            'assets/img/portrait/small/avatar-s-3.png',
            'New'),
        new Task(
            'Budget',
            'Etiam porta sem malesuada magna mollis euismod.',
            'May 17',
            'Elizabeth Elliott',
            'assets/img/portrait/small/avatar-s-3.png',
            'New')
    ],
    inProcess: [
        new Task(
            'checklist',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'assets/img/portrait/small/avatar-s-1.png',
            'In Process'),
        new Task(
            'Navigation',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'assets/img/portrait/small/avatar-s-1.png',
            'In Process'),
        new Task(
            'Bootstrap 4',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'assets/img/portrait/small/avatar-s-1.png',
            'In Process')
    ],
    backLog: [
        new Task(
            'Assessment',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            'Schedule',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            'Unit tests',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending')
    ],
    completed: [
        new Task(
            'Angular 5',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed'),
        new Task(
            'Fields',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed'),
        new Task(
            'Task board',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed')
    ]

};

export function taskReducer(state = initialState, action: TaskActions.TaskActions) {
    switch (action.type) {
        case (TaskActions.ADD_TODO):
            const todo = [...state.todo];
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };
        default:
            return state;
    }
}
