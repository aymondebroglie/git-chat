import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FavoriteColorComponent} from './repository-form/repository-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {repoReducer} from './store/repo.reducer';
import {CloneComponent} from './channel-selector/clone.component';
import {HttpClientModule} from "@angular/common/http";
import { ChannelComponent } from './messages/channel.component';
import { MessageComponent } from './message/message.component';

@NgModule({
    declarations: [
        AppComponent,
        FavoriteColorComponent,
        CloneComponent,
        ChannelComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({url: repoReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
