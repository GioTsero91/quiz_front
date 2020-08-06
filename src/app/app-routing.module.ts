import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './shared/components/quiz/quiz.component';
import {SettingsComponent} from './shared/components/settings/settings.component';

const appRoutes: Routes = [
    { path: 'quiz', component: QuizComponent },
    { path: 'settings', component: SettingsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
