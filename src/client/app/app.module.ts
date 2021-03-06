import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports:[
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        AboutModule,
        CoreModule,
        HomeModule,
        SharedModule.forRoot()
    ],
    exports:[],
    declarations:[AppComponent],
    providers:[{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    }],
    bootstrap:[AppComponent]
})
export class AppModule { }