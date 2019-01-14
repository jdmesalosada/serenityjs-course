import { protractor } from 'protractor';
import { Actor, BrowseTheWeb, Cast, TakeNotes, Notepad } from 'serenity-js/lib/screenplay-protractor';
import { noConflict } from 'q';

export class Actors implements Cast {

    abilities = [BrowseTheWeb.using(protractor.browser), 
        TakeNotes.usingAnEmptyNotepad()];


   /* notepad: Notepad;

    abilities = [BrowseTheWeb.using(protractor.browser),
    TakeNotes.using(this.notepad)];*/

    actor(name: string): Actor {
        return Actor.named(name).whoCan(...this.abilities);
    }
}