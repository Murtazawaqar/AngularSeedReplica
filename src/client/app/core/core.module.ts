import { NgModule, Optional, SkipSelf } from  '@angular/core';
import { RouterModule } from "@angular/router";

import { ThrowIfAlreadyLoaded } from './module-import-guard'

import { NavbarComponent } from "./navbar/navbar.component";
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [
        RouterModule
    ],
    exports: [],
    declarations: [],
    providers: []
})
export class CoreModule { 
    
    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        ThrowIfAlreadyLoaded(parentModule,'CoreModule');
    }
}