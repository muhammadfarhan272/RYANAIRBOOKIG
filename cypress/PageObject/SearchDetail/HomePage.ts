import { BasePage } from "../Base/basePage";
import DatePickerPage  from "../DatePickerPage/datePicker.po";
import { PassengersDetail } from "../PassengersDetail/PassengersDetail.po";
import { DepartureAndDestination } from "./DepartureAndDestination.po";

export class HomePage extends BasePage {
    private BodySearchContext = ".search-widget__search"

    waitForReadiness(element: string) {
        this.getElement(this.BodySearchContext).should("be.visible")
    }
    getHeader(){
        return new DepartureAndDestination(this.BodySearchContext);
    }
    getDatePicker(){
        return new DatePickerPage(this.BodySearchContext);
    }
    getPassengersDetail(){
        return new PassengersDetail(this.BodySearchContext);
    }
}