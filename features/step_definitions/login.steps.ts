import { Navigate } from "../../src/navigate/navigate";
import { EnterCredentials, EnterUsername } from "../../src/login/enter_credentials";
import { ValidateLoginWasUnsuccesful } from "../../src/login/assertions/validate_login_was";
import { TakeNote, TakeNotes, Actor, Notepad } from "serenity-js/lib/screenplay";
import { Text } from "serenity-js/lib/serenity-protractor";
import { Login } from "../../src/login/ui/login";
import { GetYearValueAnnoted } from "../../src/login/take_notes";

export = function loginSteps() {

    this.Given(/^that James opens the Login page$/, function () {
        return this.stage.theActorCalled('James').attemptsTo(
            Navigate.toFaceboook()
        )

    });

    this.When(/^he enters a wrong credentials$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterCredentials("james", "123456")
        )
    });

    this.When(/^he takes note of the year$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            TakeNote.of(Text.of(Login.Year_Field)).as("year_test")
        )
    });


    this.When(/^he remembers the year$/, function () {

        //Funciona
        /*return this.stage.theActorInTheSpotlight().attemptsTo(
                EnterUsername(TakeNotes
                    .as(this.stage.theActorInTheSpotlight())
                    .read("year_test") as any)
            );*/

        /* //Funciona
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterUsername(GetYearValueAnnoted.of()
            .answeredBy(this.stage.theActorInTheSpotlight()) as any)
        )*/

        /* Funciona
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterUsername(GetYearValueAnnoted.of()
                .answeredBy(this.stage.theActorInTheSpotlight())
                .then() as any
            ))

            */

        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterUsername(TakeNotes
                .as(this.stage.theActorInTheSpotlight())
                .read("year_test") as any)
        )
    });


    this.Then(/^he should be warned about the invalid credentials$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            ValidateLoginWasUnsuccesful()
        )
    });
}