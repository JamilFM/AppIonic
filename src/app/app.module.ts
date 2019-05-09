import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { LoginPage } from '../pages/login/login';

import { TarefasProvider } from '../providers/tarefas/tarefas';
import { ListagemCategoriasPage } from "../pages/listagem-categorias/listagem-categorias";
import { AdicionarTarefaPage } from '../pages/adicionar-tarefa/adicionar-tarefa';
import { TarefasFinalizadasPage } from '../pages/tarefas-finalizadas/tarefas-finalizadas';

import { config } from '../config';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    MyApp,    
    HomePage,
    TabsPage,
    LoginPage,
    AdicionarTarefaPage,
    TarefasFinalizadasPage,
    ListagemCategoriasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    TabsPage,
    LoginPage,
    AdicionarTarefaPage,
    TarefasFinalizadasPage,
    ListagemCategoriasPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    AuthProvider,
    TarefasProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
