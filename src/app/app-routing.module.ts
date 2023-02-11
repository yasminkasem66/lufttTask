import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolverGuard } from './@Appservice/guards/product-resolver.guard';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    resolve: { products: ProductResolverGuard },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
