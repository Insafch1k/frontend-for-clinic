import { NgModule } from '@angular/core';
import { ClinicComponent } from './clinic.component';
import { ClinicRoutingModule } from './clinic-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BurgerMenuComponent } from './layout/header/burger-menu/burger-menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ClinicComponent,
        HeaderComponent,
        FooterComponent,
        BurgerMenuComponent,
    ],
    imports: [ClinicRoutingModule, SharedModule],
})
export class ClinicModule {}
