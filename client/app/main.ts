import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import './styles/main.scss';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
