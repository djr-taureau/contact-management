import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from '@app/shared/ui/chat-ngrx/chat-ngrx.component';

const routes: Routes = [
    {
        path: '',
        component: ChatComponent,
        data: {
            title: 'Chat'
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatNGRXRoutingModule { }

export const routedComponents = [ChatComponent];
