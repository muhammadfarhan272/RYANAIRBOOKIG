import { BaseComponent } from "../Base/baseComponent";
import { IFlightDetail } from "./IFlightPage.in";

export class FlightDetail extends BaseComponent implements IFlightDetail{
    private departureCard = '.flight-card-summary__select-btn';
    private FairCard = '[data-e2e="fare-card--standard"]';
    private FareUpgrade = '.fare-upgrade-footer-continue_button';

    selectDeparture(){
        cy.get(this.departureCard).eq(2).click({force:true});
    }
    selectArrival(){
        cy.get(this.departureCard).eq(2).click({force:true});
    }
    selectFairPrice(){
        cy.get(this.FairCard).click();
    }
    selectFareUpgrade(){
        cy.get(this.FareUpgrade).click();
    }
    resolveError(){
        cy.get('.error-footer__button').click();
    }

}