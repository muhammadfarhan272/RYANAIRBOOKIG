import { Timeout } from "../enums/enums";
import { IBasePage } from "./basePage.in";

export abstract class BasePage implements IBasePage{

    abstract waitForReadiness(element:string):any;

    getElement(element:any){
        return cy.get(element,{timeout:Timeout.LONG})
    }
}