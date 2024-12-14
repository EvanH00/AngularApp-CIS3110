import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // Other modules here
  ],
  exports: [RouterModule],
})
export class AppModule {}
