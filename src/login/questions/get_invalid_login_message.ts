import { Question } from "serenity-js/lib/screenplay";
import { LoginFail } from "../ui/login_fail";
import { Wait, Is, Text } from "serenity-js/lib/serenity-protractor";


export const ActualInvalidLoginMessage = () => Question.about('#actor get the invalid credentials message',
    actor => {
        Wait.until(LoginFail.Invalid_Credentials_Message, Is.visible()),
            Text.of(LoginFail.Invalid_Credentials_Message)
    }
);
