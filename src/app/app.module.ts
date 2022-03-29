import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RepositoryFormComponent} from './repository-form/repository-form.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {informationReducer} from './store/repo.reducer';
import {CloneComponent} from './clone/clone.component';
import {ChannelComponent} from './channel/channel.component';
import {MessageComponent} from './message/message.component';

@NgModule({
    declarations: [
        AppComponent,
        RepositoryFormComponent,
        CloneComponent,
        ChannelComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        StoreModule.forRoot({information: informationReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
