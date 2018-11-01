import { NgModule} from '@angular/core' ;
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'accomodation', component: AccomodationComponent },
    { path: 'lifestyle', component: LifestyleComponent},
    { path: 'food-and-beverage', component: FoodAndBeverageComponent},
    { path: 'foodandbeverage',
        redirectTo: 'food-and-beverage',
        pathMatch: 'full' },
    { path: 'weddings', component: WeddingsComponent},
    { path: 'celebrations', component: CelebrationsComponent},
    { path: 'offers', component: OffersComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: '', component: HomeComponent},
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
