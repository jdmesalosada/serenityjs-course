import { Task, See } from "serenity-js/lib/screenplay";
import { include } from "../../assertions/assertions";
import { ActualInvalidLoginMessage } from "../questions/get_invalid_login_message";
import { LoginFail } from "../ui/login_fail";
import { Wait, Is } from "serenity-js/lib/serenity-protractor";

export const ValidateLoginWasUnsuccesful = () => Task.where('#actor should see an invalid credentials message',
   Wait.until(LoginFail.Invalid_Credentials_Message, Is.visible()),
   See.if(ActualInvalidLoginMessage(), include('Please try again'))
)
