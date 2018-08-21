import { Action } from '@ngrx/store';

import { Task } from '@app/shared/ui/taskboard-ngrx/taskboard-ngrx.model';

export const ADD_TODO = 'ADD_TODO';

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: Task) { }
}

export type TaskActions = AddTodo;
