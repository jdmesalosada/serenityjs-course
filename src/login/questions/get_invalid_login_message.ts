import { Question } from "serenity-js/lib/screenplay";
import { Text } from "serenity-js/lib/serenity-protractor";
import { LoginFail } from "../ui/login_fail";

export const ActualLoginMessage = () => Question.about("#actor gets the invalid login message",
    actor => Text.of(LoginFail.Invalid_Credentials_Message).answeredBy(actor) as PromiseLike<string>
);