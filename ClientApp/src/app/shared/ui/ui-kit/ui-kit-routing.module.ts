import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsComponent } from '@app/shared/ui/ui-kit/grids/grids.component';
import { TypographyComponent } from '@app/shared/ui/ui-kit/typography/typography.component';
import { HelperClassesComponent } from '@app/shared/ui/ui-kit/helper-classes/helper-classes.component';
import { SyntaxHighlighterComponent } from '@app/shared/ui/ui-kit/syntax-highlighter/syntax-highlighter.component';
import { TextUtilitiesComponent } from '@app/shared/ui/ui-kit/text-utilities/text-utilities.component';
import { FeatherComponent } from '@app/shared/ui/ui-kit/icons/feather/feather.component';
import { FontAwesomeComponent } from '@app/shared/ui/ui-kit/icons/font-awesome/font-awesome.component';
import { SimpleLineComponent } from '@app/shared/ui/ui-kit/icons/simple-line/simple-line.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'grids',
        component: GridsComponent,
        data: {
          title: 'Grids'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      },
      {
        path: 'textutilities',
        component: TextUtilitiesComponent,
        data: {
          title: 'Text Utilities'
        }
      },
      {
        path: 'syntaxhighlighter',
        component: SyntaxHighlighterComponent,
        data: {
          title: 'Syntax Highlighter'
        }
      },
      {
        path: 'helperclasses',
        component: HelperClassesComponent,
        data: {
          title: 'Helper Classes'
        }
      },
      {
        path: 'feather',
        component: FeatherComponent,
        data: {
          title: 'Feather Icons'
        }
      },
      {
        path: 'font-awesome',
        component: FontAwesomeComponent,
        data: {
          title: 'Font Awesome'
        }
      },
      {
        path: 'simple-line',
        component: SimpleLineComponent,
        data: {
          title: 'Simple Line'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIKitRoutingModule {}
