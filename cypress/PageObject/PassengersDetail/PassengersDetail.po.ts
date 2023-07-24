import { BaseComponent } from "../Base/baseComponent";
import { IPassengersDetail } from "./IPassengersDetail.in";

export class PassengersDetail extends BaseComponent implements IPassengersDetail{
private IncrementAdult = '[data-ref="passengers-picker__adults"] > .counter >.counter__button-wrapper--enabled';
private IncrementChildren='[data-ref="passengers-picker__children"] > .counter > .counter__button-wrapper--enabled';
private DoneVar = '.passengers__confirm-button';
private searchButton = '[data-ref="flight-search-widget__cta"]';
    getAdults(){
        cy.get(this.IncrementAdult).click({ multiple: true });
    }
    getChildren(){
        cy.get(this.IncrementChildren).click({ multiple: true });
    }
    clickOnDone(){
        cy.get(this.DoneVar).click();
    }
    clickOnSearch(){
        this.clickOnElement(this.searchButton);
    }
    selectPassengers(){
        this.getAdults();
        this.getChildren();
        this.clickOnDone();
        this.clickOnSearch();
    }
    
}

