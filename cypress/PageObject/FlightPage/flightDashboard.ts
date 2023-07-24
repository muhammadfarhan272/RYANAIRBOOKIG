import { BasePage } from "../Base/basePage";
import { FlightDetail } from "./FlightPage.po";

export class FlightPage extends BasePage{
    private flightBodyPage = '.app-scroll-container';
    waitForReadiness() {
        this.getElement(this.flightBodyPage).should('be.visible');
    }
    getFlightDetail(){
        return new FlightDetail(this.flightBodyPage);
    } 
}