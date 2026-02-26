/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 */

import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsavedChanges: boolean;

  constructor(content: string, cursorPosition: number, unsavedChanges: boolean){
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsavedChanges = unsavedChanges;

  }

  displaySate() {
    console.log("Esatdo del editor:", COLORS.green);
    console.log(
      `
      Contenido: ${this.content} 
      Cursor: ${this.cursorPosition} 
      Saved: ${this.unsavedChanges} 
      `,
    );
  }
}

class CodeEditorHistory  {
  private history: CodeEditorState [] =[];
  private currentIndex: number = -1;

  save(state:CodeEditorState): void{
    if (this.currentIndex<this.history.length-1) {
      this.history = this.history.slice(0, this.currentIndex+1);
      
    }

    this.history.push(state);
    this.currentIndex ++;
  }

  redo(): CodeEditorState | null{
    if(this.currentIndex < this.history.length-1){
      this.currentIndex ++;
      return this.history[this.currentIndex];
    }
    return null;
  }
}
