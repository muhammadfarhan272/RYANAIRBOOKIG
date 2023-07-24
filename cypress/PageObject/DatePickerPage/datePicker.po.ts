import { BaseComponent } from "../Base/baseComponent";
import { IDatePicker } from "./IDatePicker.in";
import { incrementDateByDays } from "../utils/utility";

export default class DatePickerPage extends BaseComponent implements IDatePicker {
    private searchDate = '.ng-trigger-datesFromTripTypeChange';
    private backButton = '[data-ref="calendar-btn-prev-month"]';
    private forwardButton = '[data-ref="calendar-btn-next-month"]';

    selectDatePicker() {
        this.clickOnElement(this.searchDate);
    }
    getNavigateBack() {
        return cy.get(this.backButton);
    }
    getNavigateForward() {
        cy.get(this.forwardButton).dblclick();
    }
    calculateDatePlusDays(dateDays: number) {
        const scheduledDeparture = `[data-id=${incrementDateByDays(dateDays)}]`;
        return cy.get(scheduledDeparture).click();
    }

}