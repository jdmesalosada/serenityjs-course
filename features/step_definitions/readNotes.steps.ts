import { EnterUsername } from "../../src/login/enter_credentials";
import { GetYearValueAnnoted } from "../../src/login/take_notes";


export = function readNotesSteps() {

    this.When(/^he remembers the year from another step library$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterUsername(GetYearValueAnnoted.of()
                .answeredBy(this.stage.theActorInTheSpotlight())
                .then() as any 
            ))
    })
}
