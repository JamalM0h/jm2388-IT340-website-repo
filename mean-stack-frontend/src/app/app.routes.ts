import { Routes } from '@angular/router';
import { Aboutpage } from './aboutpage/aboutpage';
import { Homepage } from './homepage/homepage';
import { Cataloguepage } from './cataloguepage/cataloguepage';
import { Profilespage } from './profilespage/profilespage';
import { Loginpage } from './loginpage/loginpage';
import { Registrationpage } from './registrationpage/registrationpage';

export const routes: Routes = [
	{path: 'aboutpage', component: Aboutpage}
       ,{path: 'homepage', component: Homepage}
       ,{path: 'cataloguepage', component: Cataloguepage}
       ,{path: 'profilespage', component: Profilespage}
       ,{path: 'loginpage', component: Loginpage}
       ,{path: 'registrationpage', component: Registrationpage}
];	
