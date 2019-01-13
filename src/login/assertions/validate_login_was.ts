import { Task, See } from "serenity-js/lib/screenplay";
import { include } from "../../assertions/assertions";
import { ActualLoginMessage } from "../questions/get_invalid_login_message";
import { GetYearValueAnnoted } from "../take_notes";

export const ValidateLoginWasUnsuccesful = () => Task.where("#actor should see an invalid credentials message",
    See.if(ActualLoginMessage(), include("Please try again"))
)

export const ValidateLoginWasUnsuccesful2 = () => Task.where("#actor should see an invalid credentials message",
 See.if(GetYearValueAnnoted.of(), include("w"))
)

