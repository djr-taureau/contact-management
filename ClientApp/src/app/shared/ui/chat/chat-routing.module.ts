import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from '@app/shared/ui/chat/chat.component';

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
export class ChatRoutingModule { }

export const routedComponents = [ChatComponent];
