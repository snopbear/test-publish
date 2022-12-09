//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { ReactiveFormsModule } from '@angular/forms';
//Compoents
import { CICEditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [CICEditorComponent],
  imports: [CommonModule, EditorModule, ReactiveFormsModule],
  exports: [CICEditorComponent],
})
export class CICEditorModule {}
