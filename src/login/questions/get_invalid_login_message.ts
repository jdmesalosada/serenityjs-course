import { Question } from "serenity-js/lib/screenplay";
import { LoginFail } from "../ui/login_fail";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";


export const ActualInvalidLoginMessage = () => Question.about('#actor get the target value',
    actor => Text.of(LoginFail.Invalid_Credentials_Message).answeredBy(actor) as PromiseLike<string>
);



