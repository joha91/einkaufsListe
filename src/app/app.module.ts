import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { ProductListPage } from '../pages/product-list/product-list';
import { NewShoppingListPage } from '../pages/new-shopping-list/new-shopping-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    ProductDetailsPage,
    ProductListPage,
    NewShoppingListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    ProductDetailsPage,
    ProductListPage,
    NewShoppingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
