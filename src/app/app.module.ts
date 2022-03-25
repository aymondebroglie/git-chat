import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RepositoryFormComponent} from './repository-form/repository-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {repoReducer} from './store/repo.reducer';
import {ChannelSelectorComponent} from './channel-selector/channel-selector.component';

@NgModule({
    declarations: [
        AppComponent,
        RepositoryFormComponent,
        ChannelSelectorComponent
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
