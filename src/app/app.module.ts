import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioEditComponent,
    AcessDeniedComponent,
    NovaSenhaComponent,
    PermissaoComponent,
    PermissaoEditComponent,
    SubPermissaoComponent,
    SubPermissaoEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SidebarModule,
    MenubarModule,
    ChartModule,
    MultiSelectModule,
    CalendarModule,
    DropdownModule,
    ProgressSpinnerModule,
    DialogModule,
    FormsModule,
    InputTextareaModule,
    InputNumberModule,
    FileUploadModule,
    PickListModule,
    MapsModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    provideClientHydration(),
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
