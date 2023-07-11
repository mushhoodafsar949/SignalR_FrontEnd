import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieveMessageComponent } from './recieve-message/recieve-message.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'recievemessage', component: RecieveMessageComponent},
  {path: 'sendmessage', component: SendMessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
