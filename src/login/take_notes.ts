import { TakeNotes, UsesAbilities, Question } from "serenity-js/lib/screenplay";

export class GetYearValueAnnoted implements Question<PromiseLike<string>> {

    static of() {
        return new GetYearValueAnnoted();
    }
    constructor() { }

    answeredBy(actor: UsesAbilities): PromiseLike<string> {
        return TakeNotes
                .as(actor)
                .read("year_test")
    };
}


