import { BaseComponent } from "../Base/baseComponent";
import { FlightLocation } from "../enums/enums";
import { IDepartureAndDestination } from "./IDepartureAndDestination.in";

export class DepartureAndDestination extends BaseComponent implements IDepartureAndDestination {
    private firstClickOnAgree = '.cookie-popup-with-overlay__button';
    private searchForDepartureFrom = '#input-button__departure';
    private searchResult1 = '[data-id="DUB"]';
    private searchForDepartureTo = '#input-button__destination';
    private searchResult2 = '[data-id="STN"]';

    clickOnAgree(){
        cy.get(this.firstClickOnAgree).click();
    }
    searchDepartureAndDestination(searchDept: string,search:string){
        const SearchDetail = (searchDept === FlightLocation.FROM) ? this.searchForDepartureFrom : this.searchForDepartureTo
        this.getElement(SearchDetail).clear().type(search);
       
    }
    clickOnResult(searchDept: string){
        const searchResult = (searchDept === FlightLocation.FROM) ? this.searchResult1 : this.searchResult2;
        cy.get(searchResult).click();
    }

}